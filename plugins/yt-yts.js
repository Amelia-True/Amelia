
//By putra
import fetch from 'node-fetch';

const handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) throw `*_Masukkan Judul Video Yang Ingin Kamu Cari!_*\nperintah:\n${usedPrefix + command} Naruto Squad Reaction\n`;

  const videoUrl = `https://tr.deployers.repl.co/vid?name=${encodeURIComponent(text)}`;

  // User input for start and end indices
  const user_input_start = 0; // ini jangan diubah, boleh diubah kalo search nya dimulai dari yang kamu mau
  const user_input_end = 51; // biar Brutal search nya (max 51)

  try {
    const response = await fetch(videoUrl);
    if (!response.ok) throw 'Failed to fetch the video data.';
    const data = await response.json();
    const videoData = data.result;

    if (!videoData || videoData.length === 0) {
      await m.reply('No video data found.');
      return;
    }

    // Adjusting the start and end indices based on user input
    const start = Math.max(0, user_input_start); // Ensuring start is not negative
    const end = Math.min(videoData.length - 1, user_input_end); // Ensuring end is within the data length

    let replyText = '';
    for (let i = start; i <= end; i++) {
      const videoInfo = videoData[i];
      const name = videoInfo.channel.name;
      const link = videoInfo.channel.link;
      const title = videoInfo.title;
      const type = videoInfo.type;
      const link_Video = videoInfo.link;
      const duration = videoInfo.accessibility.duration;
      const views = videoInfo.viewCount.text;

      replyText += `Video ${i + 1}:\n`;
      replyText += `duration: ${duration}\n` +
        `title: ${title}\n` +
        `link: ${link}\n` +
        `name: ${name}\n` +
        `type: ${type}\n` +
        `link_Video: ${link_Video}\n` +
        `views: ${views}\n`;
      replyText += '-'.repeat(30) + '\n';
    }

    await m.reply(replyText);
  } catch (error) {
    console.error(error);
    await m.reply('Failed to fetch the video data.');
  }
};

handler.command = /^yts(earch)?$/i;;
handler.tags = ['internet'];
handler.help = ['video <nama_video>'];

export default handler;
