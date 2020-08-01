# Extensions
Handy browser scripts for chrome and qutebrowser

## Contents
### [Available Extensions](#available-extensions)
#### [doiselected](#doiselected)
#### [doiselectedfeelinglucky](#doiselectedfeelinglucky)
#### [ezproxy](#ezproxy)
### [Installation](#installation)
#### [Chrome /  Chromium](#chrome/chromium)
#### [qutebrowser](#qutebrowser)

## Avaiable Extensions
### doiselected
Looks for a valid doi object in the current selection (PRIMARY) and navigates to
the associated url.  
In Chrome, the default keybinding is `Ctrl+Shift+2'. Alternatively, click on the
extension's icon in the toolbar.
### doiselectedfeelinglucky
Like *doiselected*, but if no doi is found in the current selection (e.g. it is 
empty) the current webpage is searched for a doi. 
### ezprozy
Inserts `.ezproxy.institution-domain-name` into the current url and reloads the page.  
In Chrome, the default keybinding is `Ctrl+Shift+1'. Alternatively, click on the
extension's icon in the toolbar.
The initial `instution-domain-name` is `st-andrews.ac.uk`. To change this, edit
the variable `insitutionDomain` in `background.js` and `ezproxy.js` (Chrome). 

## Installation
### Chrome / Chromium
Navigate to `chrome://extensions`. Switch on *developer mode* using the slider in the top right hand corner. Click 'Load unpacked' and select the `extension-name/chrome` directory (this should be placed somewhere 'safe' i.e. permanent on your firesystem). Key bindings can be adjusted from `chrome://extensions/shortcuts`.
### qutebrowser

