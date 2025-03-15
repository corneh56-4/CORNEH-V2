
const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*🧍🏽‍♂️Hello ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs Corneh-V2*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ 𝟣 Corneh Tech²⁵⁴*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ 𝟤 Sir Him²⁵⁴*
*│  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ➠ Bᴜᴛ Corneh.*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ Corneh*
*│  ◦* *ᴀɢᴇ➠ ❌*
*│  ◦* *ᴄɪᴛʏ➠ Nairobi*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘÉʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • CORNEH－𝖵2 - TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢➠Corneh Tech²⁵⁴*
*│  ◦* *▢➠Sir Him²⁵⁴*
*│  ◦* *▢➠ɴᴏᴛʜɪɴɢ*
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ Córñeh 𝖳𝖾𝖼𝗁
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
