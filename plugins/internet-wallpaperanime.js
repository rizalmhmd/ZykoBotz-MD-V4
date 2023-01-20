import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.ibeng.tech/api/wallpaper/anime?apikey=ibeng'
	conn.sendButton(m.chat, 'Nih', botdate, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.help = ['wallpaperanime']
handler.tags = ['internet']
handler.command = /^(wallpaper|wp)anime$/i
handler.limit = true
export default handler
