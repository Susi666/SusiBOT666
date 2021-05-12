let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  this.sendContact(m.chat, '4917281111117', 'Susi.li', m)
}
handler.help = ['owner ᴺᵘᵐᵉʳᵒ ᵈᵉ ˡᵃ ᶜʳᵉᵃᵈᵒʳᵃ ᵈᵉˡ ᵇᵒᵗ', 'creator ᴺᵘᵐᵉʳᵒ ᵈᵉ ˡᵃ ᶜʳᵉᵃᵈᵒʳᵃ ᵈᵉˡ ᵇᵒᵗ']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
