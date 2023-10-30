// Made By Aguz Familia/@FokusDotId (Fokus ID)
// Github: https://github.com/fokusdotid
// Ori By ImYanXiao
// Recode By PutraModz

import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
import knights from 'knights-canvas'

let handler = m => m
handler.all = async function (m) {
    let d = new Date(new Date + 3600000)
	let timeh = `🕰️ ${d.toLocaleTimeString('id', { hour: 'numeric', minute: 'numeric', second: 'numeric' }).replaceAll('.',':')}`
    let name = await conn.getName(m.sender)
    let who = m.mentionedJid && m.mentionedJid[0] ? m.       mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
 let put = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let Org = pickRandom(["0", "6283863728401", "6283845350570", "6283863727399"])
 let Parti = pickRandom([Org + "@s.whatsapp.net", Org + "@c.us"])
    let Remot = pickRandom(["status@broadcast", "120363047752200594@g.us"])
    let Amelia = pickRandom(["           「 ♥ ΛMΣᄂIΛBӨƬZ ♥ 」", "ΛMΣᄂIΛBӨƬZ", "ₐₘₑₗᵢₐBₒₜz", "ＡｍｅｌｉａＢｏｔｚ　グ凹ょ", "꧁༺ 卂爪乇ㄥ丨卂 爪ᗪ ༻꧂"])
    let Hai = pickRandom(["Apa kabar, ", "Halo, ", "Hai, "])
    let Sarapan = "👋 " + ucapan() + Hai + name
	let pp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	try {
		pp = await this.profilePictureUrl(m.sender, 'image')
	} catch (e) {
	} finally {
		
                //global.bg = await (await fetch(img)).buffer()
		global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf", "application/vnd.android.package-archive", "application/zip"])
		global.pic = hwaifu.getRandom()
		global.fla = flaaa.getRandom()
		global.pppkecil = AraChu2.getRandom()
		global.timeh = `🕰️ ${d.toLocaleTimeString('id', { hour: 'numeric', minute: 'numeric', second: 'numeric' }).replace(/./,':')}`
                global.social = pickRandom([global.sgh, global.sig, global.snh, global.sgc, global.wame, global.call, global.saluran]) 

		// Module 
		global.fetch = (await import('node-fetch')).default
		global.bochil = await import('@bochilteam/scraper')
		
                // Function
                global.pickRandom = function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

                global.getBuffer = async function getBuffer(url, options) {
	try {
		options ? options : {}
		var res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

		const _uptime = process.uptime() * 1000
        
		// ucapan ini mah
		global.ucapan = ucapan()
		
		// pesan sementara
        conn.sendPresenceUpdate(['composing', 'recording'].getRandom(), m.chat) 
		// klo ga mau as auto recording kasih tanda ( // ) 
		global.ephemeral = '86400' // 86400 = 24jam, kalo ingin di hilangkan ganti '86400' jadi 'null' atau ''
		
         
     		// externalAdReply atau text with thumbnail. gatau bahasa Inggris? coba translate!
		global.adReply = {
			contextInfo: {
				forwardingScore: 9999,
				isForwarded: false, // ini biar ada tulisannya diteruskan berkali-kali, jika ingin di hilangkan ganti true menjadi false
				externalAdReply: { // Bagian ini sesuka kalian berkreasi :'v
                                        showAdAttribution: true,
					title: Amelia,
					body: Sarapan,
					mediaUrl: sgc,
					description: wm3,
					previewType: "PHOTO",
					thumbnail: await (await fetch(put)).buffer(),
					sourceUrl: global.social,			
				}
			}
		}
                global.flocation = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    locationMessage: {
                    name: 'Japan`s',
                    jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
                          }
                        }
                      }
		global.fpayment = {
				"key": {
					"remoteJid": "0@s.whatsapp.net",
					"fromMe": false,
					"id": "BAE595C600522C9C",
					"participant": "0@s.whatsapp.net"
				},
				"message": {
					"requestPaymentMessage": {
						"currencyCodeIso4217": wm,
						"amount1000": fsizedoc,
						"requestFrom": "0@s.whatsapp.net",
						"noteMessage": {
							"extendedTextMessage": {
								"text": "Hai Kak " + name
							}
						},
						"expiryTimestamp": fsizedoc,
						"amount": {
							"value": fsizedoc,
							"offset": fsizedoc,
							"currencyCode": wm
						}
					}
				}
			}
		global.fakeig = {
         contextInfo: { externalAdReply: { showAdAttribution: true,
            mediaUrl: global.sig,
            mediaType: "VIDEO",
            description: global.sig, 
            title: wm3,
            body: wm,
            thumbnailUrl: pp,
            sourceUrl: sig
    }
    } }
global.fakefb = {
         contextInfo: { externalAdReply: { showAdAttribution: true,
            mediaUrl: "https://Facebook.com/zuck",
            mediaType: "VIDEO",
            description: "https://www.Facebook.com/zuck", 
            title: wm3,
            body: wm,
            thumbnailUrl: pp,
            sourceUrl: sgc
    }
    } }
		// Fake ðŸ¤¥
		global.ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 2023, status: 1, thumbnail: await conn.resize(await getBuffer(thumb),300,150), surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
		global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
        global.fvn = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6285736178354-1625305606@g.us" } : {}) 
                       },
            message: { 
               "audioMessage": {
                        "mimetype":"audio/ogg; codecs=opus",
                        "seconds": "999999999999",
                        "ptt": "true"
                               }
                             } 
                            }
               
                global.ftextt = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6285736178354-1625305606@g.us" } : {}) 
                       },
            message: { 
               "extendedTextMessage": {
                        "text":wm,
                        "title": wm,
                        'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                               }
                             } 
                            }
               
                  global.fliveLoc = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(m.chat  ? 
            { remoteJid: "status@broadcast" } : {}) },
            message: { "liveLocationMessage": { "caption":"Made By: " + global.nameown ,"h": `${wm}`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
               
                  global.fliveLoc2 = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "status@broadcast" } : {}) },
            message: { "liveLocationMessage": { "title": "ImYanXiao","h": wm, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
               
                   global.ftoko = {
       key: {
                   fromMe: false,
                   participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "17608914335@s.whatsapp.net" } : {})
               },
               message: {
                   "productMessage": {
                       "product": {
                           "productImage":{
                               "mimetype": "image/jpeg",
                               "jpegThumbnail": fs.readFileSync('./thumbnail.jpg') //Gambarnye
                           },
                           "title": wm, //Terserah Di Isi apa
                           "description": wm3, 
                           "currencyCode": "USD",
                           "priceAmount1000": "20000000",
                           "retailerId": "Ghost",
                           "productImageCount": 1
                       },
                           "businessOwnerJid": `0@s.whatsapp.net`
               }
           }
       }
               
                     global.fdocs = {
           key : {
                  participant : '0@s.whatsapp.net'
                               },
              message: {
                           "documentMessage": {
                           "title": wm, 
                           "jpegThumbnail": fs.readFileSync('./thumbnail.jpg')
                                 }
                               }
                             }
               
                    global.fgclink = {
           "key": {
               "fromMe": false,
               "participant": "0@s.whatsapp.net",
               "remoteJid": "0@s.whatsapp.net"
           },
           "message": {
               "groupInviteMessage": {
                   "groupJid": "6285736178354-1625305606@g.us",
                   "inviteCode": "null",
                   "groupName": "Kawan Elaina", 
                   "caption": wm, 
                   'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
               }
           }
       }
       global.fimg = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				imageMessage: {
					url: pic,
					mimetype: 'image/jpeg',
					fileLength: fsizedoc,
					height: 306,
					width: 366,
					jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
				}
			}
		}
		global.fimgv = {
				key: {
					participant: '0@s.whatsapp.net'
				},
				message: {
					imageMessage: {
						url: pic,
						mimetype: 'image/jpeg',
						fileLength: fsizedoc,
						height: 306,
						width: 366,
						jpegThumbnail: fs.readFileSync('./thumbnail.jpg'),
						viewOnce: true
					}
				}
			}
       
                    global.fgif = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6285736178354-1625305606@g.us" } : {}) 
                       },
            message: { 
                        "videoMessage": { 
                        "title": wm,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': wm,
                        'jpegThumbnail': fs.readFileSync('./media/thumbnail.jpg')
                               }
                              }
                             }
            //fake openai                 
                             global.fopenai = {
		key: { participant : this.user.jid},
		message: {
			extendedTextMessage: {
				text: '⚗️ Automatic Chatbot by Open AI',
				title: timeh,
				jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
			}
		}
	}
	
	global.fpoll = {
        key: {
            participant: Parti,
            remoteJid: Remot,
        },
        message: {
            pollCreationMessage: {
                name: Sarapan,
            }
        }
    }
    global.ppkecil = {
            contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: 'アメリア医学博士',
                body: Sarapan,
                thumbnail: await fs.readFileSync("./thumbnail.jpg"),
                thumbnailUrl: pppkecil,
                sourceUrl: social,
                //previewType: "PHOTO",
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    }
                                      // Random Pick Fake
                             let pft = [global.fimg, global.flocation, global.fimgv, global.fpayment, global.ftroli, global.fkontak, global.fvn, global.fvid, global.ftextt, global.fliveLoc, global.fliveLoc2, global.ftoko, global.fdocs, global.fgclink, global.fgif, global.fopenai, global.fpoll]
			                   // Get Random
		                     global.fakes = pft.getRandom()
		        
	}
}

export default handler 

function ucapan() {
	const time = moment.tz('Asia/Jakarta').format('HH')
	let res = "Selamat malam 🌌,"
	if(time >= 1) {
		res = "Selamat Dini hari 🌌,"
	}
	if(time >= 4) {
		res = "Selamat pagi ⛅,"
	}
	if(time > 10) {
		res = "Selamat siang 🌅,"
	}
	if(time >= 15) {
		res = "Selamat sore 🌇,"
	}
	if(time >= 18) {
		res = "Selamat malam 🌃,"
	}
	return res
}
function amelia() {
	const time = moment.tz('Asia/Jakarta').format('HH')
	let res = "ΛMΣᄂIΛBӨƬZ"
	if(time >= 1) {
		res = "            「 ♥ ΛMΣᄂIΛBӨƬZ ♥ 」"
	}
	if(time >= 4) {
		res = "ₐₘₑₗᵢₐBₒₜz"
	}
	if(time > 10) {
		res = "ＡｍｅｌｉａＢｏｔｚ　グ凹ょ"
	}
	if(time >= 15) {
		res = "ΛMΣᄂIΛBӨƬZ"
	}
	if(time >= 18) {
		res = "ＡｍｅｌｉａＢｏｔｚ　グ凹ょ"
	}
	return res
}
function Pagi() {
    let waktunya = moment.tz("Asia/Jakarta").format("HH")
    let ucapin = "Selamat malam 🌙,"
    if (waktunya >= 1) {
        ucapin = "Selamat Pagi "
    }
    if (waktunya >= 4) {
        ucapin = "Selamat pagi "
    }
    if (waktunya > 10) {
        ucapin = "Selamat siang "
    }
    if (waktunya >= 15) {
        ucapin = "Selamat sore "
    }
    if (waktunya >= 18) {
        ucapin = "Selamat malam "
    }
    if (waktunya >= 24) {
        ucapin = "Selamat Begadang "
    }
    return ucapin
}
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
		 }
