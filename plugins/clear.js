let handler = async (m, { conn, command, args }) => {
  let chats = args.length > 0 && /group|gc/i.test(args[0]) ? conn.chats.array.filter(v => v.jid.endsWith('g.us') && !v.pin).map(v => v.jid) : [m.chat]
  let isDelete = /^(clear|delete)/i.test(command)
  for (let id of chats) {
    if (isDelete) await conn.modifyChat(id, 'delete').catch(console.log)
    await conn.modifyChat(id, 'mute', -Math.floor(new Date / 1e3) * 1e3 - 1e3).catch(console.log)
  }
  conn.reply(m.chat, chats.length + ' 𝙎𝙚 𝙝𝙖𝙣 𝙡𝙞𝙢𝙥𝙞𝙖𝙙𝙤' + (isDelete ? '𝙜𝙧𝙪𝙥𝙤𝙨' : '𝑺𝒊𝒍𝒆𝒏𝒄𝒊𝒂𝒅𝒐'), m)
}
handler.help = ['deletechat ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵉˢ ᵉˣᶜˡᵘˢᶦᵛᵒ ᵖᵃʳᵃ ᵉˡ ᵇᵒᵗ', 'deletechat group ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵉˢ ᵉˣᶜˡᵘˢᶦᵛᵒ ᵖᵃʳᵃ ᵉˡ ᵇᵒᵗ', 'mutechat ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵉˢ ᵉˣᶜˡᵘˢᶦᵛᵒ ᵖᵃʳᵃ ᵉˡ ᵇᵒᵗ', 'mutechat group ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵉˢ ᵉˣᶜˡᵘˢᶦᵛᵒ ᵖᵃʳᵃ ᵉˡ ᵇᵒᵗ']
handler.tags = ['owner']
handler.command = /^(clear|delete|mute)chat$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

