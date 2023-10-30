import api from 'api-dylux'

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    throw `*Example*: .fb2 https://www.facebook.com/xxxxxxx`;
  }

  try {
    var response = await api.fbdl(text);
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    conn.sendFile(m.chat, response.videoUrl, 'fb.mp4', response.title, m);
  } catch (error) {
    console.log(error);
    m.reply('There seems to be a problem downloading the video.');
  }
};
handler.help = ['facebook2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook2|fb2)(downloder2|dl2)?)$/i
handler.limit = true
export default handler