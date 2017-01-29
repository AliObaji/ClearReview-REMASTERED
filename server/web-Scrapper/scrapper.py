import urllib.request
from bs4 import BeautifulSoup

wiki = "https://www-banner.aub.edu.lb/catalog/schd_A.htm"

page = urllib.request.urlopen(wiki)
soup = BeautifulSoup(page,"html.parser")
print(soup.prettify())