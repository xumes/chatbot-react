const functions = require('firebase-functions');
const watson = require('watson-developer-cloud/assistant/v1')
require('dotenv').config()

const cors = require('cors')({ origin: true });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Chatbot!");
// });

const chatbot = new watson({
    username: process.env.USERNAME,
    password: process.env.PASSW0RD,
    version: process.env.VERSION,
});

const workspace_id = process.env.WORKSPACE_ID;

exports.conversa = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        let payload = {
            workspace_id,
            context: req.body.context || {},
            input: req.body.input || {}
        };

        chatbot.message(payload, (err, data) => {
            if (err) {
                return res.status(err.code || 500).json(err);
            }

            return res.json(trataResposta(payload, data));
        })
    })
})

const trataResposta = (payload, resposta) => {
    console.log('watson disse: ', resposta.output.text[0]);
    return resposta;
}