const OpenAI = require('openai')

const openai = new OpenAI({
    apiKey: "<OPEN AI API KEY>"
});

class GPT {
    compute(conversationHistory, model){
        return new Promise(async (resolve, reject) => {
            openai.chat.completions.create({
                messages: conversationHistory,
                model: model, // requires GPT-4
            }).then((chatCompletion) => {
                resolve(chatCompletion.choices[0].message.content)
            }).catch((error) => {
                console.log(error)
                reject(error.error.code)
            })
        })
    }  
}
module.exports = GPT