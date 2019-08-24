units={'mile':1609, 'yard':0.9144, 'foot':0.3048, 'inch':0.0254, 'km':1000, 'm':1, 'cm':0.01,
        'mm':0.001}
def convert_UNITS(value, unit_in, unit_out):
    return value*units[unit_in]/units[unit_out]


s=input('12.3 mile in km').split(" ")
value=(float(s[0]))
unit_in=(s[1])
preposition=(s[2])
unit_out=(s[3])
if ((unit_in in units) and (unit_out in units) and (preposition=='in')):
    result=convert_UNITS(value,unit_in,unit_out)
    print(float('{:.5f}'.format(result)))
else:
    print('Unsupported format! Try entering data in a format: "12.3 mile in km"')


