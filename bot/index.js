const fs = require('fs');

const TelegramBot = require('node-telegram-bot-api');
const token = '1559454263:AAE-yfmt_p4JFRXx0u7Rnb7WEc93RQtE1-Y';

const bot = new TelegramBot(token, { polling: true });

const idAdmin = 441705395;

const keyboardspb = [
  [
    {
      text: 'Coris - метро Черная речка',
      callback_data: 'coris',
    }
  ],
  [
    {
      text: 'Поэма здоровья - метро Проспект просвящения и Озерки',
      callback_data: 'health-1'
    }
  ],
  [
    {
      text: 'Поэма здоровья - метро Звездная',
      callback_data: 'health-2'
    }
  ]
];


bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const first_name = msg.chat.first_name;

  if (msg.text) {

    const text = msg.text.toLowerCase();

    if (~text.indexOf("привет")) {
      bot.sendMessage(chatId, 'Приветик, ' + first_name + '!');
    } else if (~text.indexOf("start")) {
    } else if (~text.indexOf("закрыть")) {
      bot.sendMessage(chatId, 'Клавиатура закрыта', {
        reply_markup: {
          remove_keyboard: true
        }
      });
    } else if (~text.indexOf("клав")) {
      openKlava(chatId);
    }
    else if (~text.indexOf("старт")) {
      openKlava(chatId);
    }
    else if (~text.indexOf("start")) {
      openKlava(chatId);
    } else if (~text.indexOf("здраст")) {
      bot.sendMessage(chatId, 'Здравствуй, здравствуй, ' + first_name + '!');
    } else if (~text.indexOf("здравст")) {
      bot.sendMessage(chatId, 'Здравствуй, здравствуй, ' + first_name + '!');
    } else if (~text.indexOf("дур")) {
      bot.sendMessage(chatId, '' + first_name + ', не ругайся, а то обижусь!');
    } else if (~text.indexOf("туп")) {
      bot.sendMessage(chatId, '' + first_name + ', не ругайся, а то обижусь!');
    } else if (~text.indexOf("клиники спб")) {
      bot.sendMessage(chatId, 'Выберите клинику', {
        reply_markup: {
          inline_keyboard: keyboardspb
        }
      });
    } else if (~text.indexOf("санкт-петербург")) {
      openKlavaspb(chatId);
    } else {
      bot.sendMessage(chatId, '' + first_name + ', я тебя не понимать!');
    }
  }
  bot.forwardMessage(chatId, idAdmin, msg.message_id);
});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Приветик, ' + msg.chat.first_name + '!');
  openKlava(chatId);
});

bot.on('contact', (msg) => {

  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Спасибо! Ваш заказ принят, мы с Вами свяжемся!');
  bot.forwardMessage(chatId, idAdmin, msg.message_id);
});


function openKlava(chatId) {
  bot.sendMessage(chatId, 'Клавиатура открыта', {
    reply_markup: {
      keyboard: [
        [
          {
            text: 'Санкт-Петербург',
          }, {
            text: 'Тверь',
          }
        ],
        [
          {
            text: 'Посетить сайт McBrothers',
            url: 'https://mcbrothers.ru/'
          }
        ],
        [
          {
            text: 'Закрыть',
          }
        ]
      ],
      one_time_keyboard: true
    }
  })
}

function openKlavaspb(chatId) {
  bot.sendMessage(chatId, 'Клавиатура открыта', {
    reply_markup: {
      keyboard: [
        [
          {
            text: 'Coris - метро Черная речка',
          }, {
            text: 'Поэма здоровья - метро Проспект просвящения и Озерки',
          },
        ],
        [
          {
            text: 'Закрыть',
          }
        ]
      ],
      one_time_keyboard: true
    }
  })
}
