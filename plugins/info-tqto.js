// Terima Kasih Telah Menggunakan Script Victoria
// Tolong jangan di hapus creditnya silakan saja isi nama kalian
import fs from 'fs'

let handler = async (m, { conn }) => {
	let tqto = `
Thanks Too :
> Nurutomo (sepuh)
> BochilGaming (sepuh)
> Xnuvers007 (sepuh)
> ImYanXiao (base)
> Marsandi (support)
> Fxzz マ (support)
> alisa dev (support)
> Penyedia Apikey
> Amelia (My Love)
> PutraModz (Recode)

Script AmeliaBotz Di Recode Oleh: *PutraModz*
`;

conn.sendMessage(m.chat, {
	text: tqto,
	contextInfo: {
	externalAdReply: {
	showAdAttribution: true,
	title: 'Credit Bot Whatsapp',
	body: 'Jangan Di Hapus Atau ERROR',
	thumbnailUrl: global.thumb,
	sourceUrl: 'https://youtube.com/@Putra_Modz_?si=_Pn4AhnFLROBCSWV',
	mediaType: 1,
	renderLargerThumbnail: true
	}}}, { quoted: fkontak})
  
}
handler.help = ['tqto']
handler.tags = ['main']
handler.command = /^(tqto)$/i;

export default handler;
