let handler = async(m, { conn }) => {
  let pc = Object.entries(await conn.chats)
  let niorg = pc.filter(([jid]) => jid.endsWith('@s.whatsapp.net'))
  let thumbListpc = `https://telegra.ph/file/313426f0cf17fc95094ba.jpg`
  let txt = ''
  for (let [jid] of niorg)
    txt += `${htjava} ${await conn.getName(jid)}\n${'@' + jid.replace(/@.+/, '')}\n\n`
  return conn.reply(m.chat, '*Total:* ' + niorg.length + '\n\n' + txt.trim(), m, { mentions: conn.parseMention(txt) })
}

handler.help = ['listpc']
handler.tags = ['info']
handler.command = /^listpc|pclist|daftarpc|pc$/i
handler.owner = true

export default handler