#Основы ООП - конструктор, наследование, перегрузка, полиморфизм, инкапсуляция

class User: #конструктор
    login: str
    age: int
    _password: str = "123123"
    role = "user"
    
    def __init__(self, new_login: str):
        self.age = 0
        self.login = new_login

    def info(self):
        print(self._password)

class SuperUser(User):
    role = "admin"

    def info(self):
        super(SuperUser, self).info()
        print("!!!")

user1 = User("john") # инициализация объекта
user1._password="456"
print(user1._password)
user1.info()
#user1.info()
#print(user1.login)
#print(user1.age)
#print(user1.role)

user2 = SuperUser("arthur")
#user2.info()
#print(user2.login)
#print(user2.age)
#print(user2.role)
