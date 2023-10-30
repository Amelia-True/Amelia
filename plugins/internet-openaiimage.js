/*import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({ organization: 'org-z6sIzCiJAC8KGiP8TepQlWcD', apiKey: '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' }); //KEY-OPENAI-APIKEY-KAMU = https://platform.openai.com/account/api-keys , KEY-ORG-KAMU = https://platform.openai.com/account/org-settings
const openai = new OpenAIApi(configuration);

let handler = async (m, { conn, text, command }) => {
    try {
        if (!text) throw new Error(`Membuat gambar dari AI.\n\nContoh:\n.img Rumah kayu diatas gunung bersalju\n\n\n\nCreate image from AI\n\nExample:\n.img Wooden house on snow mountain`);
        
        await m.reply(wait)
        const response = await openai.createImage({
            prompt: text,
            n: 1,
            size: "1024x1024",
        });
        
        conn.sendButtonImg(m.chat, response.data.data[0].url, 'Done', wm, 'Menu', '.m', m)
        
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
        } else {
            console.log(error);
            m.reply(error.message);
        }
    }
}

handler.help = ['ai-image']
handler.tags = ['internet']
handler.exp = 0;
handler.command = /^(dalle|aiimg|aiimage|ai-img|openaiimage|ai-image|img|gambar)$/i
handler.limit = true 

export default handler*/

import { Configuration, OpenAIApi } from 'openai'

const mySecret = process.env['org-6SLLfE7QrbKf6g5UCtVIry2F'] // process.env['key-org'] ubah jadi key-org kamu di openai.com
const mySecret2 = process.env['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'] // process.env['key-apikey'] ubah jadi key-APIKEY kamu di openai.com

const configuration = new Configuration({ organization: mySecret, apiKey: mySecret2 });
// const configuration = new Configuration({ apiKey: mySecret2 });

const openai = new OpenAIApi(configuration);

const Nomor = '083863727401'

let handler = async (m, { conn, text, command }) => {
    try {
        if (!text) throw new Error(`Membuat gambar dari AI.\n\nContoh:\n.img Wooden house on snow mountain\n\n\nJika bot AI tidak dapat menjawab, silahkan donasi minimal 1k untuk menghidupkannya kembali.\n\n Dana: ${Nomor}\nGopay: ${Nomor}`);
        
        await m.reply(wait)
        const response = await openai.createImage({
            prompt: text,
            n: 1,
            size: "1024x1024",
        });
        
        conn.sendFile(m.chat, response.data.data[0].url, 'image.png', `Done\n\n\nJika bot AI tidak dapat menjawab, silahkan donasi minimal 1k untuk menghidupkannya kembali.\n\n Dana: ${Nomor}\nGopay: ${Nomor}`, m)
        // Or use conn.reply:
        // conn.reply(m.chat, `Done\n\n\nJika bot AI tidak dapat menjawab, silahkan donasi minimal 1k untuk menghidupkannya kembali.\n\n Dana: ${Nomor}\nGopay: ${Nomor}`, m);
        
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
        } else {
            console.log(error);
            m.reply(error.message);
        }
    }
}

handler.help = ['ai-image']
handler.tags = ['internet']
handler.exp = 0;
handler.command = /^(dalle|aiimg|aiimage|ai-img|openaiimage|ai-image|img)$/i 

export default handler;
    
