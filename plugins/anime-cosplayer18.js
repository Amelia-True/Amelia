import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.clayzaaubert.my.id/api/sfw/cosplay18?apikey=${global.putra}`
	conn.sendFile(m.chat, url, '', '_Cih Sangean..._', m)
}
handler.command = /^(cosplay18|cp18)$/i
handler.tags = ['anime', 'premium']
handler.help = ['cosplay18']
handler.limit = true
handler.premium = true
export default handler
