let handler = async m => m.reply(`
  ^    ^    ^    ^      
 /S\  /U\  /S\  /I\   
<___><___><___><___>

Si quieres hablar con la dueña personalmente:

https://wa.me/50373619339


                                        
`.trim()) 
handler.help = ['susi']
handler.tags = ['info']
handler.command = /^susi$/i

module.exports = handler
