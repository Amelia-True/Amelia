//By Putra
//Jangn di hapus
import fs from 'fs'

let handler = async (m, { conn, text, usedPrefix, command }) => {

	let pfft = `*Amelia - MD V.7.25.1*
	
*Source Code Type:*
 • Base : Plugins ( ESM )
 • Language : NodeJs
 • Bailey : @adiwajshing/baileys
 • Bailey Supp : @whiskeysockets/baileys

Jika anda menginginkan Script ini silahkan hubungi nomor dibawah ini:

Owner Contact:
wa.me/6283863727401
`;
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: `ＰｕｔｒａＭｏｄｚ`,
      body: global.author,
      thumbnailUrl: `https://telegra.ph/file/4ccd8b1334d7d65884b3f.jpg`,
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, { quoted: m})
    
}
handler.help = ['sc', 'script']
handler.tags = ['info', 'main']
handler.command =  /^(script|sc)$/i

export default handler
