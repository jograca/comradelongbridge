# comradelongbridge
comradelongbridge.com

DISCLAIMER: The odd theme of this project is intended to be a joke about how the Sarah Long Bridge replacement currently being built in Portsmouth, NH closely resembles Soviet-era architecture. It all came about as an inside joke without any specific intention and is still treated as such. You can read up on this bridge reconstruction here: http://maine.gov/mdot/sml/

With that out of the way:

GLORY TO WORKERS! GLORY TO CONCRETE!

This is a description of how comradelongbridge.com automation works.

Work on this README is still in progress as of Feb 27th 2017.

BASICS:

The goal of this automation project is to take a "share" submission via email from http://www.nytimes.com/puzzles for the daily NYT MINI crossword, pump it into a Google Sheets spreadsheet, and display it on a drupal site as an iframe. Currently the Share function from NYT is only available on iOS.

USER WORKFLOW:

IFTTT GOOGLE SHEETS APPLET:

IFTTT GOOGLE TWITTER APPLET:

GOOGLE SHEETS - INTEGRATION WITH IFTTT:

GOOGLE SHEETS - ALL-TIME LEADERBOARD:

GOOGLE SHEETS - WEEKLY SHEETS:

GOOGLE SHEETS - JAVASCRIPT:

PLATFORM:

comradelongbridge receives so little traffic that it is able to run on a single t2.nano AWS EC2 instance in a region close to its user base. The EC2 instance runs a LAMP stack with a drupal installation to feed user content. Pages are served as iframes referencing google sheets.

