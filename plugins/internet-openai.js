import fetch from "node-fetch";
import { generateWAMessageFromContent } from "@adiwajshing/baileys";
import fs from 'fs';
import { Configuration, OpenAIApi } from 'openai';
import moment from 'moment-timezone'
import {
    promises,
    readFileSync
} from "fs"
import {
    join
} from "path"
import os from "os"

const configuration = new Configuration({ organization: 'org-6SLLfE7QrbKf6g5UCtVIry2F', apiKey: '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' }); //KEY-OPENAI-APIKEY-KAMU = https://platform.openai.com/account/api-keys , KEY-ORG-KAMU = https://platform.openai.com/account/org-settings
const openai = new OpenAIApi(configuration);

let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) throw (`Chat dengan AI.\n\nContoh:\n${usedPrefix}${command} Halo?`);
let loadd = [
 '《██▒▒▒▒▒▒▒▒▒▒▒》10%',
 '《████▒▒▒▒▒▒▒▒▒》30%',
 '《███████▒▒▒▒▒▒》50%',
 '《██████████▒▒▒》70%',
 '《█████████████》100%',
 '_Informasi Di Dapatkan_...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'}, {quoted: m})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key }, {quoted: m})}
let p1 = './putra/1.jpg'
let p2 = './putra/2.jpg'
let p3 = './putra/3.jpg'
let p4 = './putra/4.jpg'
let p5 = './putra/5.jpg'
let prn = `${pickRandom([p1,p2,p3,p4,p5])}`
const imek = fs.readFileSync(prn); 
let mek = 'https://telegra.ph/file/4baf2abd1cccf464f5ec9.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let ppUrl = await conn.profilePictureUrl(who, 'image').catch((_) => "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png");
let name = await conn.getName(who)
let pp = await (await fetch(ppUrl)).buffer();   
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: text }],
    });

    const ai = response.data.choices[0].message.content; /*fopenai, {
      contextInfo: {
        externalAdReply : {
            showAdAttribution: true,
            mediaType: 2,
            title: 'Openai - AmeliaBotz',
            body: date,
            thumbnail: await (await fetch('https://telegra.ph/file/4baf2abd1cccf464f5ec9.jpg')).buffer(),
            renderLargerThumbnail: true,
            mediaUrl: sig,
            sourceId: true,
            sourceUrl: sgc,*/
    try {   
        conn.sendMessage(m.chat, { 
        image: await (await fetch(ppUrl)).buffer(),
        mimetype: 'image/jpeg',
        fileLength: 107374182400,
        caption: ai,
        contextInfo: {
	mentionedJid: [m.sender],
	forwardingScore: 256,
	isForwarded: true,
        externalAdReply: {
            title: `Openai - AmeliaBotz`,
	body: date,
	sourceUrl: syt,
	mediaType: 1,
	thumbnail: imek,
	thumbnailUrl: mek,
	renderLargerThumbnail: true
                }}}, { quoted: fopenai })
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      conn.reply(m.chat, `${error.response.status}\n\n${error.response.data}`, m);
    } else {
      conn.reply(m.chat, `${error.message}`, m);
    }
  }
}

handler.command = /^(ai|openai|chatgpt)$/i;
handler.help = ["ai", "openai", "chatgpt"].map(v => v + " <teks>");
handler.tags = ["internet"];
handler.fail = null;

handler.limit = true;
handler.exp = 0;

export default handler;
