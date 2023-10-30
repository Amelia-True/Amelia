import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
const { generateWAMessageFromContent, proto } = (await import('@adiwajshing/baileys')).default

const defaultMenu = {
  before: `┏━━━━━ ΛMΣᄂIΛBӨƬZ ━━━➣
┃➣ *Name* : %name
┃➣ *Number* : %tag
┃➣ *Status* : %prems
┃➣ *Limit* : %limit
┃➣ *Money* : $.%money
┃➣ *Role* : %role
┃➣ *Level* : %level
┃➣ *Xp* : %exp / %maxexp
┃➣ *Total Xp* : %totalexp
┗━━━━━━━━━━━➣
━━━『 *ALL RPGMENU* 』━━━
%readmore
`.trimStart(),
  header: '⃟⃟☰⃟⃟ᭁ════╡ *%category* ╞═══࿐',
  body: '┃❏➣ %cmd %isPremium %islimit',
  footer:' `⃟⃟⃟⃟࿑⃟⃟⃟࿐═══════════════乡\n',
  after: `_2023 © AmeliaBotz_`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args, command}) => {
let loadd = [
 '『 ⎔ ʟᴏᴀᴅɪɴɢ... 』\n*[■□□□□□□□□□] 10%*',
 '『 ⎔ ʟᴏᴀᴅɪɴɢ... 』\n*[■■■□□□□□□□] 30%*',
 '『 ⎔ ʟᴏᴀᴅɪɴɢ... 』\n*[■■■■■□□□□□] 50%*',
 '『 ⎔ ʟᴏᴀᴅɪɴɢ... 』\n*[■■■■■■■□□□] 70%*',
 '『 ⎔ ʟᴏᴀᴅɪɴɢ... 』\n*[■■■■■■■■■■] 100%*',
 'ʟᴏᴀᴅɪɴɢ sᴜᴄᴄᴇssғᴜʟ'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '*ʟᴏᴀᴅɪɴɢ. . .*'}, {quoted: fliveLoc})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key }, {quoted: fliveLoc})}
let tags = {
'rpg': 'RPG Games',
}
 
  try {
  	// DEFAULT MENU
      let dash = global.dashmenu
  	let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
    //-----------TIME---------
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
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
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
    let usrs = db.data.users[m.sender]
      
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
    let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
 let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
 let fotonya = 'https://telegra.ph/file/313426f0cf17fc95094ba.jpg'
let p1 = './putra/1.jpg'
let p2 = './putra/2.jpg'
let p3 = './putra/3.jpg'
let p4 = './putra/4.jpg'
let p5 = './putra/5.jpg'
let pepek = `${pickRandom([p1,p2,p3,p4,p5])}`

const mt = [
    'application/pdf',
    'application/msword',
    'application/vnd.ms-excel',
    'application/vnd.ms-powerpoint',
    'application/zip',
    'application/x-rar-compressed',
    'application/x-tar',
    'application/x-7z-compressed',
    'application/epub+zip',
    'application/json'
];
// Memilih secara acak satu mimetype dari daftar
const ri = Math.floor(Math.random() * mt.length);
const rm = mt[ri];
 
      /*let vn = ucapan()*/

await conn.sendMessage(m.chat, {
	document: fs.readFileSync("./package.json"),
	fileName: getRandomBotTitle(),
	mimetype: rm,
	fileLength: 99999999999999,
	bpageCount: 10909143,	
	caption: text,
      contextInfo: {
      externalAdReply: {
	showAdAttribution: true,
	title: `ファイル ・「ムファル」。`,
	body: global.author,
	thumbnail: await fs.readFileSync(pepek),
	thumbnailUrl: getRandomImageURL(),
	sourceUrl: social,
	mediaType: 1,
	renderLargerThumbnail: true 
	}}}, { quoted: m,ephemeralExpiration: 86400});
      /*let vn = ucapan()*/
let menu = "menu"
let menu2 = "menu2"
let menu3 = "menu3"
let menu4 = "menu4"
let menu5 = "menu5"
let menu6 = "menu6"
let menu7 = "menu7"
let menu8 = "menu8"
let menu9 = "menu9"
let menu10 = "menu10"      
let meki = `${pickRandom([menu,menu2,menu3,menu4,menu5,menu6,menu7,menu8,menu9,menu10])}`
let audio = `https://raw.githubusercontent.com/Lucife-Putra/PutraSound/master/${meki}.mp3`
await conn.sendFile(m.chat, audio, 'anuu.mp3', null, mputt, true, { 
 type: 'audioMessage',  
 ptt: true, 
seconds: 9999,
fileLength: 99999,
 ptt: true, contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Masih Dalam Tahap Pengembangan ', body: 'Guanakan Bot Ini Dengan Bijak y', sourceUrl: social, thumbnail: await (await fetch('https://telegra.ph/file/b5598889c80142e596918.jpg')).buffer(),}}  
      })
      
  } catch (e) {
    conn.reply(m.chat, '❗Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menurpg']
handler.tags = ['rpg']
handler.command = /^(menurpg|Menurpg)$/i

handler.register = false
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "./vn/subuh.mp3"
    if (time >= 4) {
        res = "./vn/pagi.mp3"
    }
    if (time > 10) {
        res = "./vn/siang.mp3️"
    }
    if (time >= 15) {
        res = "./vn/yowaimo.mp3"
    }
    if (time >= 18) {
        res = "./vn/malam.mp3"
    }
    return res
}
function getRandomImageURL() {
  const imageUrls = [
    'https://telegra.ph/file/313426f0cf17fc95094ba.jpg',
    'https://telegra.ph/file/bdf371ad29251c556c6b4.jpg', 
    'https://telegra.ph/file/fe7f67e537fed581e6a97.jpg',
    'https://telegra.ph/file/81f6d16c204e091754f5c.jpg',
    'https://telegra.ph/file/31c1c8ad05cca482821da.jpg',
    'https://telegra.ph/file/614795504c032864d7ce1.jpg'
  ];
  
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
}
function getRandomBotTitle() {
const randomBotTitles = [
  '             「 ♥ ΛMΣᄂIΛBӨƬZ ♥ 」',
  '꒷˜”*°•.˜”*°• ΛMΣᄂIΛBӨƬZ •°*”˜.•°*”˜',
  'ＡｍｅｌｉａＢｏｔｚ　グ凹ょ',
  'ΛMΣᄂIΛBӨƬZ',
  '🎋 ┊ ₐₘₑₗᵢₐBₒₜz ᴡʜᴀᴛsᴀᴘᴘ',
  '꧁༺ 卂爪乇ㄥ丨卂 爪ᗪ ༻꧂'
];
 const randomIndex = Math.floor(Math.random() * randomBotTitles.length);
  return randomBotTitles[randomIndex];
}