
#!/usr/local/bin/python3

import re
import codecs
# import pandas
import csv

thefile = codecs.open('results', 'rU','utf-8')   # open file for reading text data
## contents = thefile.readlines()         ## read the file line by line
contents = thefile.read().splitlines()
thefile.close()                   # close the file
## print(contents)  		          # print contents

## test = re.findall(r'\((.*?)\)',contents[1])

## Get a list of the lines in the file
lines = []
for line in contents:
    lines.append(re.findall(r'\((.*?)\)',line))

print(lines[1])

## Get the study ids
studies = []
for line in contents:
    studies.append(line.split(":",1)[0])

print(studies[0])

results = []
for i in range(len(lines)):
    results.append([studies[i],lines[i]])

print(results[1])

with open("results.csv","w") as resultFile:
    wr = csv.writer(resultFile) #,dialect='excel')
    wr.writerows(results)

resultFile.close()

