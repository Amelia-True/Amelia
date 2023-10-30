import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya?\nExample: *.igdl https://www.instagram.com/reel/CsC2PQCNgM1/?igshid=NTc4MTIwNjQ2YQ==*`
m.reply(wait)
try {
  let res = await fetch(`https://api.xyroinee.xyz/api/downloader/instagram?url=${text}&apikey=4H9NY8Uz5j`)
  let json = await res.json()
  let cap = `_© 2023 AmeliaBotz_`
  conn.sendMessage(m.chat, { video: { url: json.data[0].url }, caption: cap }, m)
  } catch (e) {
m.reply(`Terjadi Kesalahan, Tidak Dapat Mengambil Data Dari Url/Link Yang Kamu Masukan`)
}
}
handler.help = ['ig2', 'instagram2']
handler.tags = ['downloader']
handler.command = /^(instagram2|igdl2|ig2|instagramdl2)$/i
handler.limit = true

export default handler