import csv, requests, bs4
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



