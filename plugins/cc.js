const axios = require('axios')
let handler = async(m, { conn }) => {
    let samu = await axios.get('https://videfikri.com/api/ccgenerator/')
           await conn.reply(m.chat, 'Data: `${susi.data.network}`\nnúmero: `${susi.data.number}`', m)
  } 

handler.help = ['cc ᴺᵒ ᵘˢᵃʳ ᵉˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ']
handler.tags = ['tools']
handler.command = /^(cc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true
handler.exp = 500
module.exports = handler
