print('Print rub for ruble, euro for euro, dollar for dollar.')
units={'rub':1, 'euro':73.03, 'dollar':65.06}
"""The currency rate from 08.08.19. Due to the changing currency rate such a converter is better to be used for counting stable values, e.g. converting inches to foots, etc.
"""
def convert_UNITS(value, unit_in, unit_out):
    return value*units[unit_in]/units[unit_out]


s=input('10 euro in rub').split(" ")
value=(float(s[0]))
unit_in=(s[1])
preposition=(s[2])
unit_out=(s[3])
if ((unit_in in units) and (unit_out in units) and (preposition=='in')):
    result=convert_UNITS(value,unit_in,unit_out)
    print(float('{:.5f}'.format(result)))
else:
    print('Unsupported format! Try entering data in a format: "10 euro in rub"')


