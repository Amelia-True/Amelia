let handler  = async (m, { conn }) => {
var putra = {

 "key": {

"fromMe": false,

"participant": "0@s.whatsapp.net",

...({"remoteJid":''})

},

  "message": {

  "groupInviteMessage": {

"groupJid": "120363025461390219@g.us",

"inviteCode": "z0JcSBd3mAhIfSSY",

"inviteExpiration": ` ꪶ𝐅𝐞𝐥𝐢𝐜𝐢𝐚𝐃𝐞𝐯⿻ꫂ`,

"groupName": `ꪶ𝐅𝐞𝐥𝐢𝐜𝐢𝐚𝐃𝐞𝐯⿻ꫂ`,

"caption": `ꪶ𝐅𝐞𝐥𝐢𝐜𝐢𝐚𝐃𝐞𝐯⿻ꫂ`

 }

   }

}

await conn.reply(m.chat, `AmeliaBotz`, putra)
}
handler.help = ['buggc']
handler.tags = ['premium', 'virtex']
handler.command = /^buggc$/

handler.owner = true

export default handler