---
layout: '@/templates/BasePost.astro'
title: Python csv Utilities
description: A handful of useful python functions.
pubDate: 2024-01-11T02:34:45.000Z
imgSrc: '/assets/images/Alacritty.jpeg'
imgAlt: 'Alacritty'
---

## Phython and csvs

Python has a very useful csv library, but I found that these
functions made working with csvs much more efficient.  The 
functions are mainly for import and outputting operations with csv files.  
The most common use cases are pulling csvs into different data
structures in Python and outputting them to either a log file or a csv.

## imports
```python
import csv
from csv import DictReader
import pandas as pd

```

## Csv => key & value pair

```python
def readKeyValues(inputCsvFile,keyColumn,ValueColumn):
	#input file reader
  infile = open(inputCsvFile, "r")
  read = csv.reader(infile)
  headers = next(read) # skip header
	
  returnDictionary={}
	
	#for each row
  for row in read:
      returnDictionary[row[keyColumn]] = row[ValueColumn]

  return returnDictionary

```

## Csv => dict

```python
def readFileToDict(inputCsvFile):
    with open(inputCsvFile, 'r') as f:
        dict_reader = DictReader(f)
        return list(dict_reader)

```


## dict => csv
```python
def outputDictToFile(file, dict):
    pd.DataFrame(dict).to_csv(file, index=False)

```

## log
```python
def log(file, string):
    file = open(file, 'a')
    file.write(string)
    file.close()

```

# Example Use Case

Here is our first csv with some data for people.  This example is a bit
trite, but let's imagine that we need to change the age from a number
to a string, so 23 => 'twenty three'.

### people.csv
```csv
id,name,age
1,phil,23
2,jack,34
3,jill,31
4,jody,24
```

One way to achieve this is to create a key value match csv like this:
### pivot.csv
```csv
age,age
23,'twenty three'
34,'thirty four'
31,'thirty one'
24,'twenty four'
```

Next we need to import both of these into a python script.

```python
import utility #all of the above functions are stored in this file

people = utility.readFileToDict('./people.csv')
pivot = utility.readKeyValues('./pivot.csv',0,1)

for person in people:
  age = person.get('age')
  person['age'] = pivot[age] 

utility.outputDictToFile('./output.csv',people)
```











