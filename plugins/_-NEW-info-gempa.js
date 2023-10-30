
//by PutraModz

/*import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"

import fs from 'fs'
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
m.reply('Sedang Mendeteksi Getaran....')
let res = await fetch(`https://saipulanuar.ga/api/info/gempa`)
let data = await res.json()
let json = data.result
let deteksi = `Wᴀsᴘᴀᴅᴀ ɢᴇᴍᴘᴀ ᴛᴇʀᴅᴇᴛᴇᴋsɪ!!
🗓️ᴛᴀɴɢɢᴀʟ : ${json.tanggal}
⌚ᴊᴀᴍ : ${json.jam}
⌛ᴅᴀᴛᴇᴛɪᴍᴇ : ${json.datetime}
🗾ᴄᴏᴏʀᴅɪɴᴀᴛᴇs : ${json.coordinates}
🌏ʟɪɴᴛᴀɴɢ : ${json.lintang}
🌐ʙᴜᴊᴜʀ : ${json.bujur}
📳ᴍᴀɢɴɪᴛᴜᴅᴇ : ${json.magnitude}
🚧ᴋᴇᴅᴀʟᴀᴍᴀɴ : ${json.kedalaman}
❗ᴘᴏᴛᴇɴsɪ : ${json.potensi}
♨️ᴅɪʀᴀsᴀᴋᴀɴ : ${json.dirasakan}
`
let map = json.shakem

conn.sendButton(m.chat, '༺ *ᚯӃᶱᶮᶽᶲメ฿Ø₮™* ༻', deteksi, await (await fetch(json.shakemap)).buffer(), [
                ['Owner', `${usedPrefix}owner`],
                ['Donasi', `${usedPrefix}donasi`],
                ['Menu', `${usedPrefix}menu`]
            ], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'ᚯӃᶱᶮᶽᶲメ',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
/*forwardingScore: fsizedoc, 
externalAdReply: { 
body: null, 
containsAutoReply: true, 
mediaType: 1, 
mediaUrl: hwaifu.getRandom(), 
renderLargerThumbnail: true, 
showAdAttribution: true, 
sourceId: null, 
sourceType: 'PDF', 
previewType: 'PDF', 
sourceUrl: null, 
thumbnail: await (await fetch(json.shakemap)).buffer(),
 thumbnailUrl: sgc,
 title: json.wilayah }}})
}
handler.help = ['infogempa']
handler.tags = ['info']
 handler.command = /^(infogempa|gempa)$/i
export default handler*/

//-------------------------------NEW------------------------------------

// Atas segala hormat, saya Turut berduka cita kepada seseorang yang mendapatkan musibah ini ❤ Semoga diberikan ketabahan kepada Tuhan Yang Maha Esa❤

import fetch from 'node-fetch'
import sharp from 'sharp'

const link = 'https://data.bmkg.go.id/DataMKG/TEWS/'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    let res = await fetch(link + 'autogempa.json')
    let anu = await res.json()
    anu = anu.Infogempa.gempa
    let txt = `Tanggal : ${anu.Tanggal}\n`
    txt += `Waktu : ${anu.Jam}\n`
    txt += `Potensi : *${anu.Potensi}*\n`
    txt += `Magnitude : ${anu.Magnitude}\n`
    txt += `Kedalaman : ${anu.Kedalaman}\n`
    txt += `Wilayah : ${anu.Wilayah}\n`
    txt += `Lintang : ${anu.Lintang} & Bujur: ${anu.Bujur}\n`
    txt += `Koordinat : ${anu.Coordinates}\n`
    txt += anu.Dirasakan ? `Dirasakan : ${anu.Dirasakan}\n\n\nFollow me on *https://github.com/Lucife-Putra*\nyou can Scan me on DANA https://ndraeee25.000webhostapp.com/dana/DanaXnuvers007.jpeg` : ''

    let imgBuffer = await (await fetch(link + anu.Shakemap)).buffer()
    let img = await sharp(imgBuffer).png().toBuffer()

    await conn.sendFile(m.chat, img, 'shakemap.png', txt, m)
  } catch (e) {
    console.log(e)
    m.reply(`[!] Fitur Error.`)
  }
}

handler.help = ['gempa']
handler.tags = ['internet', 'info']
handler.command = /^(gempa|gempabumi|infogempa)$/i

handler.premium = false
handler.limit = false

export default handler
