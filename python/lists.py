
b=['cat','dog','cow','duck']
b.append('frog')
b.sort()
for x in b:
    x=x*2
    print(x)

a=[4,1,34,23]
a.append(14)
"""How to add a new value in a list.
"""
a.sort()
for x in a:
    x=x*2
    print(x)

print('Grandpa planted a turnip. The turnip grew bigger and bigger. Grandpa came to pick the turnip, pulled and pulled but couldn\'t pull it up!')
mas=['Grandpa', 'Grandma','Granddaughter','Doggy','Kitty']
mas.append('Mouse')
"""Fairy tail about turnip. How to add a cycle in a list.
"""
for x in mas:
    print(''+x+' pulled Turnip and called...')

print('What did they pull up?')
s=''
while((s!='Turnip') and (s!='turnip')):
    s=input('Type your answer here and press Enter:')
print('Right you\'re!')

"""Cycles for and while in the list
"""
e=int(input('Write a number'))
f=[]
for x in range(e):
    f.append(x)
print(f)

n = int(input('Write a number'))
a = [i for i in range(n)]
print(a)

a = [i for i in range(int(input()))]
print(a)

a=1
while(a<10):
    print(a*a)
    a=a+1

"""Below you see a programm which awaits for a serial input of 10 numbers,
adds the numbers in a list, sorts the list, multiplies the numbers from
the list by 10 and prints them.
"""
a=0
f=[]
while(a<10):
    e=int(input('Write a number'))
    a=a+1
    f.append(e)
    f.sort()
print(f)
for x in f:
    x=x*10
    print(x)

