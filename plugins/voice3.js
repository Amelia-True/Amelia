import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return m.reply(`Example: ${usedPrefix}${command} siapa presiden Indonesia`)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.yanzbotz.my.id/api/ai/gptvoice?query=${text}`
  conn.sendFile(m.chat, res, `openaiv.mp3`, '', m, true);
}
handler.help = ['aivoice3 <teks>']
handler.tags = ['tools']
handler.command = /^aiv|aivoice3$/i
handler.limit = true
handler.premium = false
export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}