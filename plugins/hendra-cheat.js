let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        global.db.data.users[m.sender].money = 1000
        global.db.data.users[m.sender].limit = 1000
        global.db.data.users[m.sender].exp = 1000
        global.db.data.users[m.sender].level = 50
        m.reply(`*Selamat Kamu Mendapatkan*:\n*money:* 2000\n*Limit:* 200\n*level:* 200`)
}
handler.command = /^(HendraaAnakBaik)$/i
handler.owner = false
handler.premium = true
export default handler