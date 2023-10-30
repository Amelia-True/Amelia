import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.clayzaaubert.my.id/api/sfw/cosplayercina?apikey=${global.putra}`
	conn.sendFile(m.chat, url, '', '_Random Cosplay_', m)
}
handler.command = /^(cosplayercina|cc)$/i
handler.tags = ['anime', 'premium']
handler.help = ['cosplayercina']
handler.limit = true
handler.premium = true
export default handler
