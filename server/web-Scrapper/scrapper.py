import urllib.request
from bs4 import BeautifulSoup
import json

wiki = "https://www-banner.aub.edu.lb/catalog/schd_A.htm"

page = urllib.request.urlopen(wiki)
soup = BeautifulSoup(page, "html.parser")
all_tables = soup.find_all('td')

data = {}
data["courses"] = []

currCourse = {"name": "",
              "number": "",
              "title": ""
              }
count = 0
for td in all_tables[39:]:
    if count == 2:
        currCourse['name'] = td.string
    elif count == 3:
        currCourse['number'] = td.string
    elif count == 5:
        currCourse['title'] = td.string

    if count == 34:
        data["courses"].append(currCourse)
        currCourse = {"name": ""}
        count = 0
    else:
        count += 1

with open('data.json', 'w') as outfile:
    json.dump(data, outfile)