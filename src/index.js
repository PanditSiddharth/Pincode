const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '5648270520:AAE9rIACrzXPT6Bc5BBN-lvwK07PrjmsJwo';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  
async function getData() {
  try {
    // We are using fetch to get the response

  if (msg.text == '/start' || msg.text == '/help' ){
    bot.sendMessage(chatId, 'Hello! I am a bot that can answer if you send any pincode i will list all areas \nexample send : 226101')}
                
const url = 'https://api.postalpincode.in/pincode/'+ parseInt(msg.text);
    const response = await fetch(url);
    const data = await response.json();
    let k = data[0].PostOffice;

if(data[0].Status != 'Success' && msg.chat.type == 'private')
    bot.sendMessage(chatId, "Please Write correct pin");
    console.log(msg)
let fr = () => {for (let i = 0; i < k.length; i++) { 
bot.sendMessage(chatId, JSON.stringify(k[i].Name) + '\n' + JSON.stringify(k[i].District) + '\n' + JSON.stringify(k[i].Pincode));


if(i==k.length-1){
  bot.sendMessage(chatId, 'All PostOffice related to ' + msg.text + ' is listed')}
}
               }
    fr();

  } catch (error) {
    console.log(error);
  }
}
getData();
  // send a message to the chat acknowledging receipt of their message
  
});