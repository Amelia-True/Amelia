let handler = async (m, { conn, groupMetadata, text, command }) => {
    if (command === 'groupid') {
        let groupId = m.isGroup ? m.chat : m.sender;
        conn.sendMessage(m.sender, `ID grup ini adalah: ${groupId}`);
        return;
    }

    if (command.startsWith('pushkontakv2')) {
        let parts = text.split('|');
        if (parts.length !== 2) return m.reply('Format yang Anda masukkan salah. Pastikan menggunakan format: .pushkontakv2 pesan|idgroup');
        let pushMessage = parts[0].trim();
        let groupJid = parts[1].trim();
        let groupMembers = await conn.groupMetadata(groupJid).catch(() => null);
        if (!groupMembers) return m.reply('Grup tidak ditemukan. Pastikan ID grup benar.');
        groupMembers = groupMembers.participants.map(member => member.jid);
        let count = groupMembers.length;
        let sentCount = 0;
        m.reply(wait);
        for (let i = 0; i < groupMembers.length; i++) {
            setTimeout(function() {
                if (pushMessage) {
                    conn.sendMessage(groupMembers[i], {
                        text: pushMessage
                    });
                }
                count--;
                sentCount++;
                if (count === 0) {
                    m.reply(`Berhasil Push Pesan ke setiap anggota grup:\nJumlah Pesan Terkirim: *${sentCount}*`);
                }
            }, i * 5000); // delay setiap pengiriman selama 5 detik
        }
    }
}
handler.command = handler.help = ["pushkontakv2", "groupid"]
handler.tags = ["owner"]
handler.owner = true
handler.group = false
export default handler
