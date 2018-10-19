
To extract findings and study information from the abstracts we use a couple
of steps:

First, convert all the pdf files to text:

```
for X in *.pdf; do pdftotext -enc UTF-8 -nopgbrk $X; done 
```

Second, find the lines that contain the desired information (like "p=", or
"95%" or "n=") and save these lines in a file called `results`. (Sadly, we
don't report point estimates in a standardized way.)

```
grep -E 'p[[:blank:]]?>[[:blank:]]?|p[[:blank:]]?<[[:blank:]]?|p[[:blank:]]?=[[:blank:]]?|95%|n[[:blank:]]?=[[:blank:]]?' *.txt  > results
```

Remove unicode characters that look weird.

```
sed -i.bak "s/$(echo -ne '\u200b')//g" results
```

Then a small python program finds text between parentheses and writes it to a
csv file.

```
python findres.py
```

