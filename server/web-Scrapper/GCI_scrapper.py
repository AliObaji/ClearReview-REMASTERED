import urllib.request
from bs4 import BeautifulSoup
from string import ascii_uppercase
import json

data = {}
data["courses"] = []

for i in ascii_uppercase:
    wiki = "https://www-banner.aub.edu.lb/catalog/schd_" + i + ".htm"
    page = urllib.request.urlopen(wiki)
    soup = BeautifulSoup(page, "html.parser")
    all_tables = soup.find_all('td')
    print("CURRENTLY SCRAPING PAGE " + i)
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


# unique = { each['title'] : each for each in data["courses"] }.values()
# data['courses'] = unique

with open('general_course_info.json', 'w') as outfile:
    json.dump(data, outfile)

