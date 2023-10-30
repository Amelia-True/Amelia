/*  

import didyoumean from 'didyoumean'
import similarity from 'similarity'
export async function before(m, { match, usedPrefix, command }) {
        let imgr = flaaa.getRandom()
	if ((usedPrefix = (match[0] || '')[0])) {
		let noPrefix = m.text.replace(usedPrefix, '')
		let args = noPrefix.trim().split` `.slice(1)
		let text = args.join` `
		let help = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
	if (help.includes(noPrefix)) return
		let mean = didyoumean(noPrefix, help)
		let sim = similarity(noPrefix, mean)
		let som = sim * 100
		let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
		let name = await conn.getName(who)
		let caption = `👋 Hallo @${who.split("@")[0]},\n\nApakah Kamu mencari *${usedPrefix + mean}* ?\n\nHasil Kemiripan ➲ *${parseInt(som)}%*\n\nBot by http://ī.am/༄ᶜ©putra☆࿐`
	if (mean) this.sendButton(m.chat, bottime, caption, `${imgr + 'Apakah Benar?'}`, [['IYA BENAR', `${usedPrefix + mean} ${text}`], ['TIDAK BENAR', usedPrefix + '?'], ['Creator', `${usedPrefix}owner`]], m, { mentions: this.parseMention(caption) })
	}
}
export const disabled = false*/

import didyoumean from 'didyoumean'
import similarity from 'similarity'

let handler = m => m
const userTag = (m) => {
    return `👋 Hai *@${m.sender.split("@")[0]}*, `
}

handler.before = function (m, { match, usedPrefix }) {
    if ((usedPrefix = (match[0] || '')[0])) {
        let noPrefix = m.text.replace(usedPrefix, '').trim();
        let alias = Object.values(global.plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1);
        let mean = didyoumean(noPrefix, alias);
        let sim = similarity(noPrefix, mean);
        let similarityPercentage = parseInt(sim * 100);

        if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
            let response = `• ${userTag(m)} Apakah kamu mencari menu berikut ini?\n\n◦ Nama command: *${usedPrefix + mean}*\n◦ Hasil kemiripan: *${similarityPercentage}%*`;

            this.reply(m.chat, response, m, {
                contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                        showAdAttribution: true,
                        title: namebot,
                        thumbnailUrl: 'https://telegra.ph/file/2ca658f4d29b50471d5c4.jpg',
                        sourceUrl: social,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            });
        }
    }
}

export default handler

/*
  * DannTeam
  * ig: @jkt48.danzz
*/