from twisted.internet import reactor
from twisted.protocols.basic import LineOnlyReceiver
from twisted.internet.protocol import ServerFactory, connectionDone

class Client(LineOnlyReceiver):
    #Класс обработки соединения с клиентом сервера

    delimiter = "\n".encode() # \n для терминала, \r\n для GUI

    factory : 'Server'

    ip : str
    login : str = None

    def connectionMade(self):

        #Обработчик нового клиента

        #- записать IP
        #- внести в список клиентов
        #- отправить сообщение приветствия
        
        self.ip = self.transport.getPeer().host
        self.factory.clients.append(self)

        self.sendLine("Welcome to the chat!".encode())

    def connectionLost(self, reason=connectionDone):

        ''' 
        Обработчик закрытия соединения

        - удалить из списка клиентов
        - вывести сообщение в чат об отключении
        '''

        self.factory.clients.remove(self)
        print(f"Client disconnected: {self.ip}")

    def lineReceived(self, line:bytes):

        '''
        Обработчик нового сообщения от клиента

        - зарегистрировать, если это первый вход, уведомить чат
        - переслать сообщение в чат, если уже зарегистрирован
        '''

        message = line.decode()

        if self.login is None:
            if message.startswith("login:"):  # проверяем, чтобы в начале шел login:
                user_login = message.replace("login:", "")  # вырезаем часть после :

                # проверка существования логина
                for user in self.factory.clients:
                    if user_login == user.login:
                        error = f"[Server] - Login {user_login} already exists!"

                        self.sendLine(error.encode())
                        """
                        В интерфейсе можно не прерывать подключение, 
                        а просто повторно написать "login:значение" в текстовом поле
                        """
                        # self.transport.loseConnection()
                        return

                self.login = user_login

                notification = f"New client with login: {self.login}"

                print(notification)
                self.factory.notify_all_users(notification)

                 # отправка 10-ти сообщений новому клиенту
                self.send_history()
            else:
                self.sendLine("Invalid login".encode()) #шлём уведомление, если в сообщении ошибка
        #если логин уже есть и это следующее сообщение
        else:
            format_message = f"{self.login}:{message}" #форматируем сообщение от имени клиента

            self.factory.messages.append(format_message) #сохранение сообщения в список

            #отсылаем всем в чат и в консоль сервера
            self.factory.notify_all_users(format_message)
            print(format_message)

        def send_history(self):
            self.factory.notify_(format_message)
            """Отправка новому клиенту последних 10-ти сообщений"""
            last_messages = self.factory.messages[-10:]

            for message in last_messages:
                self.sendLine(message.encode())
                      

class Server(ServerFactory):
        '''Класс управления сервером'''

        clients : list
        messages: list
        protocol = Client # протокол обработки клиента

        def __init__(self):

            '''
            Старт сервера

            - инициализация списка клиентов
            - вывод уведомления в консоль
            '''

            self.clients = []
            self.messages = []
            print("Server started - OK")
        
        def startFactory(self):
            '''Запуск прослушивания клиентов (уведомление в консоль)'''

            print("Listening ...")

        def notify_all_users(self, message: str):
            '''
            Отправка сообщения всем клиентам чата
            :param message: Текст сообщения
            '''

            for user in self.clients:
                user.sendLine(message.encode())

if __name__ == '__main__':
    # параметры прослушивания
    reactor.listenTCP(
        7410,
        Server()
    )

    # запускаем реактор
    reactor.run()