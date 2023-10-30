const rewards = {
  limit: 10,
}
const cooldown = 86400000 // 24 jam dalam milidetik
let handler = async (m,{ conn} ) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) {
    let remainingTime = new Date(user.lastclaim + cooldown) - new Date()
    throw `You have already claimed this daily limit! Please wait for *1 Day* before claiming again.`
  }
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${reward}\n`
  }
  conn.reply(m.chat, text.trim(), m)
  user.lastclaim = new Date * 1
}
handler.help = ['claimlimit']
handler.tags = ['main']
handler.command = /^(claimlimit)$/i

handler.cooldown = cooldown

export default handler
