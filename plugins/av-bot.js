let handler = async (m, { conn, args, usedPrefix, command }) => {
  let name = conn.getName(m.sender);
  let av = `./src/mp3/${pickRandom(["criss", "andrea"])}.mp3`;
  let nanz = `Halo kak`;
  let bot = 'List Menu';
  const pollMessage = {
    name: nanz,
    values: ['List Menu', 'Menu2', 'Menu3'],
    multiselect: false,
    selectableCount: 1
  };

  const handlerCommand = (content) => {
    let command;
    switch (content) {
      case 'List Menu':
        command = '.menu';
        break;
      case 'Menu2':
        command = '.allmenu';
        break;
      case 'Menu3':
        command = '.menu3';
        break;
      default:
        break;
    }
    if (command) {
      conn.reply(m.chat, command, m);
    }
  };

  global.conn.on('chat-update', async (chatUpdate) => {
    if (chatUpdate.messages && chatUpdate.messages.first() && chatUpdate.messages.first().pollMessage && chatUpdate.messages.first().pollMessage.name === nanz) {
      const selectedOption = chatUpdate.messages.first().pollMessage.results.participants[0].selected;
      handlerCommand(selectedOption);
    }
  });

  await conn.sendMessage(m.chat, { poll: pollMessage });
};

handler.customPrefix = /^(kont)$/i;
handler.command = new RegExp();

export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}
