![Status](https://img.shields.io/badge/status-development-orange) 
# TranslateJs

Translator module CLI

## Description

Javascript text translation module made with puppeteer using google translator

## Getting Started

### Dependencies

* NodeJs
* Yarn or NPM
* Puppeteer
* Readline-sync

### Installing

* Clone repository
```
git clone https://github.com/adrien4g/translatejs
```
* Change directory
```
cd translatejs
```
* Install
```
yarn install or npm install
```

## Usage
### Example code

```
const Translate = require('./translate')
;(async()=>{
    const browser = new Translate
    await browser.setLanguage()
    await browser.start()
    while( 1 == 1 ){
        let text = await browser.inputTranslate()
        let translatedText = await browser.translate(text)
        console.log(translatedText)
    }   
})()
```
### Define custom messages
```
const Translate = require('./translate')
;(async()=>{
    const browser = new Translate
    
    browser.inputLanguage = 'Set a language\n> '
    errorInputLanguage = 'Invalid Language.'
    errorEmptyLanguage = 'Please, select a language.'
    inputText = 'Write your text.\n> '
    errorEmptyInput = 'Please, type a text'
    
    await browser.setLanguage()
    await browser.start()
    while( 1 == 1 ){
        let text = await browser.inputTranslate()
        let translatedText = await browser.translate(text)
        console.log(translatedText)
    }   
})()
```
* The available languages are in the ISO6391 file
### Author
Adrien
@oi_sou_Adrien





