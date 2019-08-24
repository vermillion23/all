
units={'mile':1609, 'yard':0.9144, 'foot':0.3, 'inch':0.025, 'km':1000, 'm':1, 'cm':0.01,
        'mm':0.001}

s=input('12.3 mile in km').split(" ")
value=(float(s[0]))
unit_in=(s[1])
preposition=(s[2])
unit_out=(s[3])
def convert_UNITS(value, unit_in, unit_out):
    return value*UNITS[unit_in]/UNITS[unit_out]

result=value*units.items()

((value==float) or (value==int) and (unit_in in units) and (unit_out in units) and (preposition=='in')


print(result)

print(result)


input('12.3'' mile'' km')
output

units=dict('mile':'1609', 'yard':'0.9144', 'foot':'0.3', 'inch':'0.025', 'km':'1000', 'm':'1', 'cm':'0.01',
        'mm':'0.001')
s in units


s=input('12.3 mile in km').split(" ")
for w in words:
    n=w.find('mile')
    if n!=-1:
        print('В строке есть число:' +str(w))
        """почему то выводит mile
"""


a=input('Enter your convertation like this "15.5 mile in km"')
words=a.split(" ")
for a in words:
    n=a.find('mile')
    if a!=-1:
        print('В строке есть число:'+str(a))
        
units=dict("mile":"m", "yard":"m")
a in units

units=dict('mile':1609, 'yard':0.9144, 'foot':0.3, 'inch':0.025, 'km':1000, 'm':1, 'cm':0.01,
        'mm':0.001)
s in units


s='Это обычная строка, а в ней есть email test@mail.ru'
words=s.split(" ")
for w in words:
    n=w.find('@mail.ru')
    if n!=-1:
        print('В строке есть email:' +str(w))



"""To take kilometers from the user, uncomment the code below
kilometers = 5.5
"""
kilometers = float(input("Enter value in kilometers"))

"""
# conversion factor
"""
conv_fac = 0.621371

"""# calculate miles
"""
miles = kilometers * conv_fac
print('%0.3f kilometers is equal to %0.3f miles' %(kilometers,miles))



a=input('Enter your convertation like this "15.5 mile in km"')
words=a.split(" ")
for a in words:
    n=a.find('mile')
    if a!=-1:
        print('В строке есть число:'+str(a))


мили (1 mile = 1609 m), 
ярды (1 yard = 0.9144 m), 
футы (1 foot = 30.48 cm), 
дюймы (1 inch = 2.54 cm), 
километры (1 km = 1000 m), 
метры (m), 
сантиметры (1 cm = 0.01 m)
миллиметры (1 mm = 0.001 m)


s='Это обычная строка, а в ней есть email test@mail.ru'
words=s.split(" ")
for w in words:
    n=w.find('@mail.ru')
    if n!=-1:
        print('В строке есть email:' +str(w))



words=s.split(" ")

s=s.replace('строка которую заменяем', 'строка вместо неё')

"""Результат равен N <единица изменения, в которую конвертируем из строки ввода>"
Полученное число должно быть с точностью до пяти знаков после запятой.
Примечания:
Использовать словарь для единиц измерения, вынести логику конвертации в
отдельную функцию.
"""



5 mile in km


a=input('Enter your convertation like this "15.5 mile in km"')
words=a.split(" ")
for a in words:
    n=a.find('mile')
    if a!=-1:
        print('В строке есть число:'+str(a))


units = input("Выберите единицы измерения:\n \
\t1 - байты,\n \
\t2 - килобайты,\n \
\t3 - мегабайты,\n \
\t4 - гигабайты.\n№: ")
 
qty = float(input("Введите значение: "))
 
if units == '1':
	print("Килобайты: %10.3f" % (qty / 2**10))
	print("Мегабайты: %10.3f" % (qty / 2**20))
	print("Гигабайты: %10.3f" % (qty / 2**30))
elif units == '2':
	print("Байты: %14d" % (qty * 2**10))
	print("Мегабайты: %10.3f" % (qty / 2**10))
	print("Гигабайты: %10.3f" % (qty / 2**20))
elif units == '3':
	print("Байты: %14d" % (qty * 2**20))
	print("Килобайты: %10d" % (qty * 2**10))
	print("Гигабайты: %10.3f" % (qty / 2**10))
elif units == '4':
	print("Байты: %14d" % (qty * 2**30))
	print("Килобайты: %10d" % (qty * 2**20))
	print("Мегабайты: %10d" % (qty * 2**10))
