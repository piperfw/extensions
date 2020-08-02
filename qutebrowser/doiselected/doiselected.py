#!/usr/bin/env python3
import re, os, sys
all_html_file = os.getenv('QUTE_HTML', '')
#all_text_file = os.getenv('QUTE_TEXT', '')
if all_html_file:
    with open(all_html_file, 'r') as f:
        all_text = f.read()
else:
    all_text = ''
selection = os.getenv('QUTE_SELECTED_TEXT', '')
regex = re.compile(r"\b(10[.][0-9]{4,}(?:[.][0-9]+)*\/(?:(?![\"&';:?*\[\]\\\^@])\S)+)\b")
match = regex.search(selection)
if not match:
    match = regex.search(all_text)
if not match:
    sys.exit('No doi found in selection or page.')
doi = match.group()
url = 'https://doi.org/' + doi
fifo = os.getenv('QUTE_FIFO', '')
if fifo:
    with open(fifo, 'a') as outf:
        outf.write('open {}\n'.format(url))

