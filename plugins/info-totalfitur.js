/*import fs from 'fs'
var handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendFile(m.chat, giflogo, 'file.mp4', `Total Fitur Bot Saat ini: ${totalf}\n`, m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'Total Cintaku Padamu',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
export default handler
*/
import {
    promises,
    readFileSync
} from "fs"
import {
    join
} from "path"
import {
    xpRange
} from "../lib/levelling.js"
import moment from "moment-timezone"
import os from "os"
import fetch from "node-fetch"
import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let p1 = './putra/1.jpg'
let p2 = './putra/2.jpg'
let p3 = './putra/3.jpg'
let p4 = './putra/4.jpg'
let p5 = './putra/5.jpg'
let prn = `${pickRandom([p1,p2,p3,p4,p5])}`                
const imek = fs.readFileSync(prn);
let arc = pickRandom(global.AraChu2)
let fitur = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
const images = 'https://telegra.ph/file/f2b502ce231e70681090b.jpg'
let memek = `Total Fitur Bot Saat ini: \n*🔖 Plugins :* ±${totalf} File Plugins\n*🔖 Fitur :* ±${fitur.length}`

conn.sendMessage(m.chat, { 
        image: await (await fetch(images)).buffer(),
        mimetype: 'image/jpeg',
        fileLength: 10630044057600000000000000000000000000000000000000000000000000,
        caption: memek,
        contextInfo: {
	mentionedJid: [m.sender],
	forwardingScore: 256,
	isForwarded: true,
        externalAdReply: {
            title: `ファイル ・「ムファル」。`,
	body: '처녀 사냥꾼',
	sourceUrl: `https//${global.author}`,
	mediaType: 1,
	thumbnail: imek,
	thumbnailUrl: arc,
	renderLargerThumbnail: true
                }}}, { quoted: m });
}
handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
export default handler