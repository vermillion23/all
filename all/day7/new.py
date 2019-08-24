
import requests, bs4
s=requests.get('https://clutch.co/web-designers')
a=bs4.BeautifulSoup(s.text, "html.parser")
b=a
company_name=b.select('.company-name .field-content a')
tagline=a.select('.col-xs-12 .tagline')
i=0
t=0
while t<len(tagline) and i<len(company_name):
    name1=company_name[i].getText()
    print('Company name :' + name1)
    i=i+1
    tagline1=tagline[t].getText()
    print('Tagline :' + tagline1)
    t=t+1

import csv

writer = csv.writer(open("/dev/Git/day7/test23" 'w'))
for row in data:
    if counter[row[0]] >= 4:
        writer.writerow(row)

"""import csv
data = ['Headphones', '$7.05', '$11.00' ,'$4.00']
 
with open('example_2.csv', 'wt') as out_csv:
    writer = csv.writer(out_csv)
    writer.writerow(('Item', 'Cost', 'Sold', 'Profit'))
    writer.writerow(data)

with open('persons.csv', 'wb') as csvfile:
    filewriter = csv.writer(csvfile, delimiter=',', quotechar='|', quoting=csv.QUOTE_MINIMAL)
    filewriter.writerow(['Name', 'Profession'])
    filewriter.writerow(['Derek', 'Software Developer'])
    filewriter.writerow(['Steve', 'Software Developer'])
    filewriter.writerow(['Paul', 'Manager'])
"""
