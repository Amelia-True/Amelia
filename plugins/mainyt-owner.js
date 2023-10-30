import fs from'fs'
import fetch from 'node-fetch'
 let handler = async(m, { conn }) => { 

         let caption = `*Mʏ Yt Oғғɪᴄɪᴀʟ*`
  conn.reply(m.chat, caption, fvn, {
      contextInfo: {
        externalAdReply: {
        showAdAttribution: true,
          title: "Jangan Lupa Subs ya",
          body: wm,
          thumbnailUrl: 'https://telegra.ph/file/c31c8c8fc349a5371348d.jpg',
          sourceUrl: syt,
          mediaType: 1,
          renderLargerThumbnail: true
          }}}, { quoted: null})
 }
handler.help = ['ytbot', 'ytowner']
handler.tags = ['main']
handler.command = /^(ytbot|ytowner)$/i

export default handler
