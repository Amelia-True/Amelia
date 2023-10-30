import fetch from 'node-fetch'

let handler = async (m, { args, usedPrefix, command , text }) => {
	if (!text) throw `Texnya Mana Kak?`
	let reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ja' + '&dt=t&q=' + text)
	let res = await reis.json()
	conn.sendFile(m.chat, `https://api.clayzaaubert.my.id/api/others/voicevox2?q=${res[0][0][0]}&apikey=${global.putra}`, "victoria.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
}
handler.help = ['ai-voice2', 'voice2']
handler.tags = ['premium', 'ai']
handler.command = /^(ai-voice2|voice2)$/i
handler.limit = true
handler.premium = true
export default handler
