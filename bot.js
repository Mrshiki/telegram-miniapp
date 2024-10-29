const TelegramBot = require('node-telegram-bot-api');

const token = '7609765558:AAF8JGd7uDLljUGwzi4mhRU-X3gixGTfEEI';
const bot = new TelegramBot(token, { polling: true });

const webAppUrl = 'https://mrshiki.github.io/telegram-miniapp/';

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Открой миниапп:', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Открыть миниапп', web_app: { url: webAppUrl } }]
            ]
        }
    });
});

bot.on('web_app_data', (msg) => {
    const data = JSON.parse(msg.web_app_data.data);
    console.log('Получено от миниапа:', data);

    // Ответ пользователю
    bot.sendMessage(msg.chat.id, `Вы нажали кнопку!`);
});


