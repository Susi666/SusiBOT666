  
const axios = require('axios')
let handler = async(m, { conn }) => {
    let susi = await axios.get('https://videfikri.com/api/ccgenerator/')
           await conn.reply(m.chat, 'Data:' + ` ${susi.result.network}` + '\nnúmero:' + ` ${susi.result.number}`, m)
  } 

handler.help = ['cc']
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
