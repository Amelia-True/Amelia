/*import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let d = new Date(new Date + 3600000);
  let locale = 'id';
  let date = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💌 Developer Bot `, `Amelia Putri Septiany`, `al3271525@gmail.com`, `🇮🇩 Indonesia`, `📍 https://github.com/Lucife-Putra`, `👤 ᴏᴡɴᴇʀ ΛMΣᄂIΛBӨƬZ`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🎈 ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ`, `📵 ᴅᴏɴᴛ sᴘᴀᴍ/ᴄᴀʟʟ ᴍᴇ 😢`, `ɴᴏᴛʜɪɴɢ`, `🇮🇩 Indonesia`, `📍 https://youtube.com/@Putra_Modz_`, `ʜᴀɴʏᴀ ʙᴏᴛ ʙɪᴀsᴀ ʏᴀɴɢ ᴋᴀᴅᴀɴɢ sᴜᴋᴀ ᴇʀᴏʀ ☺`]
  ], fkontak)
  /*const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })*/
/*let caption = `👋 Hai *@${who.split("@")[0]}*, Nih Owner Saya kak`
    await conn.reply(m.chat, `ʜᴇʟʟᴏ @${m.sender.split(`@`)[0]} ᴛʜᴀᴛs ᴍʏ ᴏᴡɴᴇʀ ᴅᴏɴᴛ sᴘᴀᴍ ᴏʀ ʏᴏᴜ ᴡɪʟʟ ʙᴇ ʙʟᴏᴄᴋᴇᴅ`, m, { contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            mediaType: 1,
            title: 'My Owner Klick Aja Kak >< - AmeliaBotz',
            body: date,
            thumbnail: await (await fetch('https://telegra.ph/file/e0d58375470f9df525842.jpg')).buffer(),
            renderLargerThumbnail: true,
            mediaUrl: sig,
            sourceId: true,
            sourceUrl: amel,
          }
        }
      });
  } 
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler*/

import fetch from "node-fetch"
import fs from "fs"
import { pickRandom } from "../lib/other-function.js"

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let aa = pickRandom(global.AraChu2)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
await conn.sendContact(m.chat, [[`${nomorown}` + `@s.whatsapp.net`, wm]], m, {
 contextInfo: { 
 externalAdReply: {  
 title: 'Owner Sudah Punya Pasangan', 
 body: timeh,
 sourceUrl: social,
 thumbnail: await fs.readFileSync("./thumbnail.jpg"),
 thumbnailUrl: aa, 
 mediaType: 1,
 showAdAttribution: true, 
 renderLargerThumbnail: true 
 }
   }
     },
       {
         quoted: m,
         ephemeralExpiration: ephemeral
}
           )
} 
handler.help = ['owner']
handler.tags = ['main']

handler.command = /^(owner)$/i

export default handler