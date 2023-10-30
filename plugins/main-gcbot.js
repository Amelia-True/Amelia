import fs from'fs'
import fetch from 'node-fetch'
 let handler = async(m, { conn }) => { 

         let caption = `*Mʏ Gᴄ Oғғɪᴄɪᴀʟ*`
  conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: {
          title: "2023 - 2025 © PutraModz",
          thumbnailUrl: 'https://telegra.ph/file/cfb6291a5b51b11a4607d.jpg',
          sourceUrl: sgc,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
 }
handler.help = ['gcbot']
handler.tags = ['main']
handler.command = /^(gcbot)$/i

export default handler
