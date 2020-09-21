class Translate{
    constructor(){
        //System
        this.readline = require('readline-sync')
        this.puppeteer = require('puppeteer')

        this.languages = require('fs').readFileSync('ISO6391', 'utf8').split('\n')

        this.browser
        this.page
        this.link

        this.selectedLanguage

        this.input = ''
        this.lastInput = ''
        this.output = ''
        
        this.msg = {
            inputLanguage: 'Set a language\n> ',
            errorInputLanguage: 'Invalid Language.',
            errorEmptyLanguage: 'Please, select a language.',

            inputWord: 'Write your sentence.\n> ',
            errorEmptyInput: 'Please, type a word',
        }
}

    async setLanguage(){
        while ( 1 == 1 ){
             this.selectedLanguage = this.readline.question(this.msg.inputLanguage)
            if (this.languages.includes(this.selectedLanguage)){
                break
            }
            console.log(this.msg.errorInputLanguage)
        }
        this.link = `https://translate.google.com/#view=home&op=translate&sl=auto&tl=${this.selectedLanguage}`
        if (this.page != null){
            await this.page.goto(this.link)
        }
    }

    async start(){
        this.browser = await this.puppeteer.launch({headless:false})
        this.page = await this.browser.newPage()
        try{
            await this.page.goto(this.link)
        }catch(err){
            console.log(this.msg.errorEmptyInput)
            process.exit(1)
        }
    }

    async inputTranslate(){
        try{
            this.input = await this.readline.question(this.msg.inputWord)
        }catch{
            console.log(this.msg.errorEmptyInput)
            return inputTranslate()
        }
        return this.input
    }
    async translate(msg){
        if (msg.toLowerCase().trim() == this.lastInput.toLowerCase().trim()){
            return this.output
        }
        await this.page.waitForSelector('#source')
        await this.page.evaluate((input)=>{document.querySelector('#source').value = input}, msg)
        await this.page.waitForSelector('.translation')
        this.output = await this.page.evaluate(()=>{return document.querySelector('.translation').innerText})
        await this.page.evaluate(()=>{document.querySelector('#source').value = ''})
        await this.page.waitForSelector('.translation', {hidden: true});
        return this.output
    }
}
module.exports = Translate
