# Extensions
Handy browser scripts for chrome and qutebrowser

## Contents
### [Chrome](#chrome2)
- [doiselected](#doiselected)
- [ezproxy](#ezproxy)
### [qutebrowser](#qutebrowser2)
- [continuoushinting](#continuoushinting)
- [doiselected](#doiselected2)
- [ezproxy](#ezproxy2)
### [Installation](#installation2)
- [Chrome /  Chromium](#chromechromium2)
- [qutebrowser](#qutebrowser3)

## <a name="chrome2"></a> Chrome
#### <a name="doiselected"></a> doiselected
Looks for a valid doi object in the current selection (PRIMARY) and navigates to
the associated url.  If the selection is empty, or no valid doi string is found,
the text from the current webpage is searched.

The default keybinding is `Ctrl+Shift+2`. Alternatively, click on the
extension's icon in the toolbar.
#### <a name="ezproxy"></a>  ezprozy
Inserts `.ezproxy.institution-domain-name` into the current url and reloads the page.  
The default keybinding is `Ctrl+Shift+1`. Alternatively, click on the
extension's icon in the toolbar.
The initial value of `institution-domain-name` is `st-andrews.ac.uk`. To change this, edit
the variable `institutionDomain` in `background.js` _and_ `ezproxy.js`. 

## <a name="qutebrowser2"></a> qutebrowser
#### <a name="continuoushinting"></a> continuoushinting
Replicates the `Ctrl+Click` behaviour of a mouse on links with keyboard hints.
To use this extension, both `starthinting` and `keephinting` scripts must be placed
in your userscript directory. Then, to start a continuous chain of hints on the current
page use `:spawn --userscript starthinting`. Press escape when you want to stop
hinting.

#### <a name="doiselected2"></a> doiselected 
Looks for a valid doi object in the current selection (PRIMARY) and navigates to
the associated url.  If the selection is empty, or no valid doi string is found,
the current webpage is searched. A suggested key binding is `zd`. This script
is written in python3.

#### <a name="ezproxy2"></a> ezproxy
Inserts `.ezproxy.institution-domain-name` into the current url and reloads the page.
Suggested key bindings are `ze` or `ez`. Your institution's domain name should be set in
`ezproxy`. This script is written in bash and uses `sed`.

## <a name="installation2"></a> Installation
### <a name="chromechromium2"></a> Chrome / Chromium
Navigate to `chrome://extensions`. Switch on *developer mode* using the slider in the top right hand corner. Click 'Load unpacked' and select the `extension-name/chrome` directory (this should be placed somewhere 'safe' i.e. permanent on your filesystem). Key bindings can be adjusted from `chrome://extensions/shortcuts`.
### <a name="qutebrowser3"></a> qutebrowser
Make `extension-name/qutebrowser/script-name` executable (`chmod +x`) and either
place this file in `~/.local/share/qutebrowser/userscripts` and evoke in
qutebrowser with `:spawn --userscript script-name` or simply evoke with an
absolute path e.g. `:spawn --userscript
/home/user/extensions/extension-name/qutebrowser/script-name`. Key bindings can be set in qutebrowser's `config.py` file in the usual way.
