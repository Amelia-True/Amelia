let handler = async (m, { conn }) => {
    let wm = global.wm
    let _uptime = process.uptime() * 1000
    let uptimex = clockString(_uptime)

    let putra = `Awali Dengan Salam ya Kack`.trim()
conn.sendMessage(m.chat, {
text: putra,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: "",
body: uptimex,
thumbnailUrl: "https://telegra.ph/file/da5c48a33919583b034b3.jpg",
sourceUrl: 'https://whatsapp.com/channel/PutraModz',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
handler.help = ['mode']
handler.tags = ['main']
handler.customPrefix = /^(p|P)$/i 
handler.command = new RegExp
handler.limit = false

export default handler

function clockString(ms) {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " Hari " + hours + " Jam " + minutes + " Menit " + sec + " Detik";
}