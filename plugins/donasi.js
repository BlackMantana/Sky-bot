let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085713643454]
│ • Xl [087877451059]
╰────
`.trim()) // Donasinya pake pulsa ya tod:v
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
