import fetch from 'node-fetch'
import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let url = await fetch(`https://saipulanuar.ga/api/download/tiktok2?url=${args[0]}`)
  let json = await url.json()
    if (url.status !== 200) throw await url.text()
    if (!json.status) throw json
  await m.reply(`*_${global.md}_*`)
let cap = `${ucapan()}\n\nNih ${name}\nCara Simpan\n\n1. Download Dulu Vidio Nya Kalau Sudah\n2. Masuk Ke Dalam Vidio Nya\n3. Lalu Tekan Titik3 Pojok Kanan Atas\n4. Lalu Pilih Yang Ada Bacaan  Simpan `
conn.sendFile(m.chat, json.result.video.link1, 'tiktok.mp4', cap, m)
}
handler.tags = ['downloader']
handler.command = /^(downloadertiktok)$/i
handler.limit = true

export default handler
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Siang Lord ☀️"
  }
  if (time >= 15) {
    res = "Sore Lord 🌇"
  }
  if (time >= 18) {
    res = "Malam Lord 🌙"
  }
  return res
}
