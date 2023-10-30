import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import {
    promises,
    readFileSync
} from "fs"
import {
    join
} from "path"
import os from "os"
import fs from 'fs'

let handler = async (m, { conn, text, args, command }) => {
let p1 = './putra/1.jpg'
let p2 = './putra/2.jpg'
let p3 = './putra/3.jpg'
let p4 = './putra/4.jpg'
let p5 = './putra/5.jpg'
let prn = `${pickRandom([p1,p2,p3,p4,p5])}`
const imek = fs.readFileSync(prn); 
const ewe = 'https://telegra.ph/file/5184d425902ddf6a12583.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let caption = `📮 *L I N K :*
${link}
📊 *S I Z E :* ${media.length} Byte
📛 *E x p i r e d :* ${isTele ? 'No Expiry Date' : 'Unknown'}

*S H O R T :* ${await shortUrl(link)}`

/*conn.reply(m.chat, caption, m, { contextInfo: {
          externalAdReply :{
    mediaUrl: sgh,
    mediaType: 2,
    title: wm,
    body: botdate,
    thumbnail: await(await fetch(link)).buffer(),
    sourceUrl: link
     }}
  })*/

conn.sendMessage(m.chat, { 
        image: await (await fetch(ewe)).buffer(),
        mimetype: 'image/jpeg',
        fileLength: 10630044057600000000000000000000000000000000000000000000000000,
        caption: caption,
        contextInfo: {
	mentionedJid: [m.sender],
	forwardingScore: 256,
	isForwarded: true,
        externalAdReply: {
            title: `ファイル ・「ムファル」。`,
	body: '처녀 사냥꾼',
	sourceUrl: link,
	mediaType: 1,
	thumbnail: imek,
	thumbnailUrl: link,
	renderLargerThumbnail: true
                }}}, { quoted: fpayment })

}
handler.help = ['tourl']
handler.tags = ['tools']
handler.command = /^(tourl|upload)$/i
export default handler

async function shortUrl(url) {
	let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
	return await res.text()
}
