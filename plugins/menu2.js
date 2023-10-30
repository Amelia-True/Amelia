//ya elah mau ngapainn bang bikin sendiri lah

import fetch from 'node-fetch'
const { generateWAMessageFromContent, proto } = (await import('@adiwajshing/baileys')).default
import moment from 'moment-timezone'
import fs from 'fs'
import os from 'os'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let { limit, role, level, exp, premiumDate } = db.data.users[m.sender]
let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
let uptime = clockString(_uptime)
let d = new Date(new Date + 3600000) 
   let locale = 'id' 
let week = d.toLocaleDateString(locale, { weekday: 'long' }) 
let date = new Date().toLocaleDateString('en-US', {timeZone: 'Asia/Jakarta'})
let time = new Date().toLocaleTimeString('en-US', {timeZone: 'Asia/Jakarta', hour: 'numeric', minute: 'numeric', hour12: true})
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let ppUrl = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/65c43c76b126a2e1a8409.png");
  let pp = await (await fetch(ppUrl)).buffer();
  let name = await conn.getName(m.sender)
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let ucpn = `${ucapan()}`
  let totalStorage = Math.floor(os.totalmem() / 1024 / 1024) + 'MB'
  let freeStorage = Math.floor(os.freemem() / 1024 / 1024) + 'MB'
  let cpuModel = os.cpus()[0].model
  let cpuSpeed = os.cpus()[0].speed / 1000
  let cpuCount = os.cpus().length
    readmore: readMore
  let menyu = `
 【﻿Ａｍｅｌｉａ　ＭＤ】


 乂 I N F O R M A T I O N

◦ Name : ${name}
◦ Runtime : ${uptime}
◦ Mode : Public
◦ Date : ${week}, ${date}
◦ Time : ${time}
◦ Library : Baileys MD
◦ Platform : Linux

乂 Your Bot Specifications

• Total Storage : ${totalStorage}
• Free Storage : ${freeStorage}
• CPU Model : ${cpuModel}
• CPU Speed : ${cpuSpeed} GHz
• Number of CPU Cores : ${cpuCount}

🇵‌🇮‌🇳‌🇳‌🇪‌🇩
ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ^ω^
  
⌬━━━『 ALL SUBS-MENU 』━━━⌬

❏ .Allmenu 
❏ .Menumain 
❏ .Menuinfo 
❏ .Menuowner 
❏ .Menugames
❏ .Menufun 
❏ .Menusticker 
❏ .Menumaker 
❏ .Menuanime 
❏ .Menugroup 
❏ .Menudownloader
❏ .Menuinternet 
❏ .Menutools 
❏ .Menubug 
❏ .Menuaudio 
❏ .Menumangkane
❏ .Menusound 
❏ .Menurpg 
❏ .MenuXp 
❏ .Menuquotes 
❏ .Menustalking 
❏ .Menuabsen 
❏ .Menupremium 
❏ .Menuanonymous 
❏ .Menunulis 
❏ .Menuislami 
❏ .Menuhost 
❏ .Menuadvanced 
❏ .Menuvoting 
❏ .Menuasupan 
❏ .Menudatabase 
❏ .Menukerang 
❏ .Menuprimbon
❏ .Menugenshin
❏ .Menunews (Berita)
❏ .Menuai

🚩 to go to all commands type .allmenu, Kebijakan Bot ketik .rules untuk mengetahui kebijakan Bot kami,`

const scheduledCallCreationMessage = generateWAMessageFromContent(m.from, proto.Message.fromObject({
  "scheduledCallCreationMessage": {
    "callType": "2",
    "scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
    "title": menyu,
  }
}), { userJid: m.from, quoted: m });

conn.relayMessage(m.chat, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id });

}
handler.help = ['menu', 'help']
handler.tags = ['main']
handler.customPrefix = /^(menu|.menu|help|.help)$/i
handler.command = new RegExp
handler.register = true;
handler.limit = false;

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Good morning"
  if (time >= 4) {
    res = "Good morning"
  }
  if (time >= 10) {
    res = "Good afternoon"
  }
  if (time >= 15) {
    res = "Good afternoon"
  }
  if (time >= 18) {
    res = "Good night"
  }
  return res
}