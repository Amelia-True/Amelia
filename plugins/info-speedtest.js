import { exec } from 'child_process';
import { promisify } from 'util';

const handler = async (m, { conn }) => {
    await conn.reply(m.chat, 'Please Wait', m);
    let o;
    try {
        o = await promisify(exec)('python3 speed.py --share --secure');
    } catch (e) {
        o = e;
    } finally {
        const { stdout, stderr } = o;
        if (stdout.trim()) {
            conn.relayMessage(m.chat, {
                extendedTextMessage: {
                    text: stdout,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: '',
                            mediaType: 1,
                            previewType: 0,
                            renderLargerThumbnail: true,
                            thumbnailUrl: 'https://telegra.ph/file/ec8cf04e3a2890d3dce9c.jpg',
                            sourceUrl: '',
                        },
                    },
                    mentions: [m.sender],
                },
            }, {});
        }
        if (stderr.trim()) m.reply(stderr);
    }
};

handler.help = ['speedtest'];
handler.tags = ['info'];
handler.command = /^(speedtest|ookla)$/i;
handler.premium = false;

export default handler;
