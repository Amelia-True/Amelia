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
let handler = async (m, { conn, isROwner, text, args, command  }) => {
let p1 = './putra/1.jpg'
let p2 = './putra/2.jpg'
let p3 = './putra/3.jpg'
let p4 = './putra/4.jpg'
let p5 = './putra/5.jpg'
let prn = `${pickRandom([p1,p2,p3,p4,p5])}`
const imek = fs.readFileSync(prn); 
const tt = 'https://telegra.ph/file/e283865cf62d0b803988e.jpg'  
const ttgede = 'https://telegra.ph/file/aa76cce9a61dc6f91f55a.jpg'
    const delay = time => new Promise(res => setTimeout(res, time))
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    var pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'teksnya?'
    m.reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 0.5 } detik`)
    for (let i of anu) {
    await delay(1500)
   /* conn.relayMessage(i, {
extendedTextMessage:{
                text: pesan, 
                contextInfo: {
                     externalAdReply: {
                        title: wm,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/aa76cce9a61dc6f91f55a.jpg',
                        sourceUrl: ''
                    }
                }, mentions: [m.sender]
}}, {}).catch(_ => _)
    }*/
   conn.sendMessage(i, { 
        image: await (await fetch(tt)).buffer(),
        mimetype: 'image/jpeg',
        fileLength: 10630044057600000000000000000000000000000000000000000000000000,
        caption: pesan,
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
	thumbnailUrl: ttgede,
	renderLargerThumbnail: true
                }}}, { quoted: fgif });     }

  m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
handler.help = ['bcgcbot <teks>']
handler.tags = ['owner']
handler.command = /^((broadcastgc|bcgc)bot)$/i

handler.owner = true

export default handler
