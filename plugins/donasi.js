let handler = async m => m.reply(`
╭─〘 𝗦𝘂𝘀𝗶𝟲𝟲𝟲 〙
│ • 𝑃𝑎𝑦𝑝𝑎𝑙 [paypal.me/smonterroza12]
│ • Pero con que me sigas en instagram me basta:)
│ https://www.instagram.com/susana_monterroza_/
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi ˢᶦᵍᵘᵉᵐᵉ ᵉⁿ ᶦⁿˢᵗᵃᵍʳᵃᵐ']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
