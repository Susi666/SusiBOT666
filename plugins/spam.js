let handler = async (m, { conn }) => {
  let link = "https://chat.whatsapp.com/EBdL5J8IuGTH8uXC1bShPE"
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  for (let i=0;i<50;i++){
    conn.reply(m.chat, `👑Susi👑 ⚠⚠⚠⚠Group⚠⚠⚠⚠ !\n\n${link}`)
    await sleep(1250)
  }
}
handler.help = ['spam ᵀᵉ ʰᵃᵍᵒ ˢᵖᵃᵐ ᵈᵉ ᵐᶦ ᵍʳᵘᵖᵒ']
handler.tags = []
handler.command = /^(spam)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler
