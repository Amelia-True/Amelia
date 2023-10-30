import moment from 'moment-timezone'
import {
    promises,
    readFileSync
} from "fs"
import {
    join
} from "path"
import os from "os"
import fetch from "node-fetch"
import fs from 'fs'

let handler = async (m, { conn, text, args, command }) => {
let p1 = './putra/1.jpg'
let p2 = './putra/2.jpg'
let p3 = './putra/3.jpg'
let p4 = './putra/4.jpg'
let p5 = './putra/5.jpg'
let prn = `${pickRandom([p1,p2,p3,p4,p5])}`
const imek = fs.readFileSync(prn); 
const ewe = 'https://telegra.ph/file/c3b53404616566939910e.jpg'          
//━━━━━━━━[ TIMER ]━━━━━━━━//
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
  let chats = Object.keys(await conn.chats)
    let pesan = m.quoted && m.quoted.text ? m.quoted.text : text
  conn.reply(m.chat, `Mengirim Broadcast Ke ${chats.length} Chat ${chats.length} `, m)

  for (let id of chats) {
let bcbg = hwaifu.getRandom()

       await delay(1500)
/*conn.sendMessage(id, {
text: `${pesan}`,
contextInfo: {
externalAdReply: {
title: 'ΛMΣᄂIΛBӨƬZ',
thumbnailUrl: brocas,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
     }*/
conn.sendMessage(id, { 
        image: await (await fetch(ewe)).buffer(),
        mimetype: 'image/jpeg',
        fileLength: 10630044057600000000000000000000000000000000000000000000000000,
        caption: `${pesan}`,
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
	thumbnailUrl: brocas,
	renderLargerThumbnail: true
                }}}, { quoted: fgif });     }

  m.reply(`Suksess Broadcastke ${chats.length} `)

}

handler.help = ['broadcast','bcchat'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastchat|bcchat|bcc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }