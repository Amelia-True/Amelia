import fetch from 'node-fetch'
import fs from 'fs'

let handler = m => m
handler.all = async function (m) {
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/600c4ed679deb07d63c99.jpg')	
	
    global.purr = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: amel, mediaType: 'VIDEO', description: '' + amel, title: '', body: '', thumbnailUrl: pp, sourceUrl: amel }}}
 
    global.mputt = {
		key: { participant : this.user.jid},
		message: {
			extendedTextMessage: {
				text: '❌ Jangan Spam Command Bot Ya Kak',
				title: timeh,
				jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
			}
		}
	}
};   
export default handler