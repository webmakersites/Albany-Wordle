# Custom Wordle

## Description
Like the millions of other daily players, I really enjoyed playing Wordle. I only wished I could play it more than once a day (like when on the train going to work)! So I decided to make a similar version of the game for myself without the one word per day restriction which I have hosted on http://cpaa.servicomp.net.au (since 29 Jan 2022... mere days before the announcement the New York Times had purchased Wordle). One other custom feature I added was to provide the definition of the chosen word using Free Dictionary API (https://dictionaryapi.dev) in case I did not already know the meaning of the word.

## Code / Features
This is a quick summary and explanation of my code and features:
* Used Wordle's array of words but used a random number generator to pick a word allowing for a new game every time I loaded the page.
* Used hodgef's simple-keyboard (https://github.com/hodgef/simple-keyboard) for the on-screen keyboard which I manipulated using jQuery.
* Used Free Dictionary API (https://dictionaryapi.dev) to provide definitions for the chosen word.
* Made a light / dark theme using jQuery
