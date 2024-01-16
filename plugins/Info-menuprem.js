let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f5742305fdf673f056e91.jpg'
let sewa = ` ---『 *Menu User Premium* 』---
╔───────═❏ 
❏ .remini
❏ .lk21
❏ .xnxxsearch 
❏ .xnxxdl 
❏ .hdr
❏ .paptt
❏ .asupan
❏ .simpowner
❏ .ometv
❏ .nuklir 
❏ .vidiobokep
❏ .viral
❏ .wastalk 
❏ .modapk
❏ .stalktelegram
❏ .stikertelegram2
❏ .bonus
❏ .stikersearch 
❏ .nhentai
❏ .rule34
❏ .pixiv
❏ .removebg 
❏ .logogaming
❏ .logogaming2
╚───────═❏
 _2023 © Hendraa_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['menuprem']
handler.tags = ['premium']
handler.command = /^(menuprem)$/i

export default handler