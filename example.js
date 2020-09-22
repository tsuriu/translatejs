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