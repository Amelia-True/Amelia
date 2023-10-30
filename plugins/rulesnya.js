import { generateWAMessageFromContent } from '@adiwajshing/baileys';
import fetch from 'node-fetch';
import fs from 'fs';
import { apivisit } from './amelia.js';
import { pickRandom} from '../lib/other-function.js'

const p1 = './putra/1.jpg';
const p2 = './putra/2.jpg';
const p3 = './putra/3.jpg';
const p4 = './putra/4.jpg';
const p5 = './putra/5.jpg';
const prn = `${pickRandom([p1, p2, p3, p4, p5])}`;
const imek = fs.readFileSync(prn);
const ewe = 'https://telegra.ph/file/d4cab80ee946ef26b2a6c.jpg';

const handler = async (m, { conn }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let ppUrl = await conn.profilePictureUrl(who, 'image').catch((_) => "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png");
    let pp = await (await fetch(ppUrl)).buffer();
    let res = await fetch('https://raw.githubusercontent.com/Chandra-XD/cn-grabbed-result/main/text/bot/rules.txt');
    let txt = await res.text();
    let rulesnya = `*Hai kak ${conn.getName(m.sender)}, dibaca ya rulesnya*\n\n${txt}`;

    conn.sendMessage(m.chat, {
        image: await (await fetch(ppUrl)).buffer(),
        mimetype: 'image/jpeg',
        caption: rulesnya,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 256,
            isForwarded: true,
            externalAdReply: {
                title: `ɪᴛꜱ ᴍʏ ʀᴜʟᴇꜱ`,
                body: 'ʙᴏᴛᴢ ᴀᴍᴇʟɪᴀ-ᴍᴅ ʙʏ ᴘᴜᴛʀᴀᴍᴏᴅᴢ',
                sourceUrl: wame,
                mediaType: 1,
                thumbnail: imek,
                thumbnailUrl: ewe,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
    await apivisit();
};

handler.help = ['rules'];
handler.tags = ['main'];
handler.command = /^(rules|peraturan)$/i;
export default handler;
