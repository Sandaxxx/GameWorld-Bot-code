const Discord = require("discord.js");

const { SlashCommandBuilder } =require("@discordjs/builders");
const { copyFileSync, link } = require("fs");

const Client = new Discord.Client({intents:
   [Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
Discord.Intents.FLAGS.GUILD_MESSAGES
]});

const prefix = "!";

//↑↑↑  pour me repérer je mets tous les constantes ci-dessus ↑↑↑

//__________Console log quand le bot est online__________

Client.on("ready", () => {
console.log("⭐------bot est allumé-------⭐");
});

//========================= / Statut Du bot ( les statuts change toutes les 2 a 5 secondes ) / =========================

Client.on("ready", () => {

    Client.application.commands.create(data);

    function randomStatut() {
         let statut = ["𝐓𝐰𝐢𝐭𝐜𝐡.𝐭𝐯/𝐒𝐚𝐧𝐝𝐚𝐱 🟣 ","💻・Dev For Sandax", "🌟 𝐆𝐚𝐦𝐞𝐖𝐨𝐫𝐥𝐝 🌟","!𝐡𝐞𝐥𝐩 "] //↩ les statuts du bot
         let rstatut = Math.floor(Math.random() * statut.length)

         Client.user.setActivity(statut[rstatut],{type: "PLAYING" , url: "https://twitch.tv/Sandax"});

    }; setInterval(randomStatut, 2000)
});

//========================= Message de Bienvenue & Photo quand une personne rejoind le serv =========================


Client.on('guildMemberAdd', member => {
    let embed = new Discord.MessageEmbed()
        .setDescription(`𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐮𝐞<@!${member.user.id}> ${member.guild.name} 𝐌𝐞𝐫𝐜𝐢  𝐝𝐞  𝐥𝐢𝐫𝐞   𝐚𝐭𝐭𝐞𝐧𝐭𝐢𝐯𝐞𝐦𝐞𝐧𝐭   𝐥𝐞  𝐫𝐞̀𝐠𝐥𝐞𝐦𝐞𝐧𝐭<#767827800521834506> ❗ ❗ ❗  𝐏𝐚𝐬𝐬𝐞 𝐮𝐧 𝐚𝐠𝐫𝐞́𝐚𝐛𝐥𝐞 𝐦𝐨𝐦𝐞𝐧𝐭 🚀`)
        .setFooter("𝑵𝒐𝒖𝒔 𝒔𝒐𝒎𝒎𝒆𝒔 𝒎𝒂𝒊𝒏𝒕𝒆𝒏𝒂𝒏𝒕 : " +member.guild.memberCount)
        .setColor("#ffffff")
        .setImage("https://cdn.discordapp.com/attachments/888731037658656768/888823275793297449/Capture_decran_2021-09-18_182337.png")
        .setTimestamp()
    const channel = member.guild.channels.cache.get('830772128596623371');
    if (!channel) return console.log(`Impossible de trouver le salon de bienvenue`);
    channel.send({ embeds: [embed] });
});


//=====================================// COMMANDES Slash ( en cours d'edit )=================================================////////////////////////////



const data = new SlashCommandBuilder()
      .setName("twitch")
      .setDescription("Envoie les twitch des Streamers")
      

Client.on("ready", () => {

    Client.guilds.cache.get("751735618509471744").commands.create(data);

    console.log(" - commandes slash OK !")
})

Client.on("interactionCreate", Interaction =>{
    if(Interaction.isCommand()){
        if(Interaction.commandName === "twitch"){
          

    
        }
    }
})


//===================================/Commande qui envoie mon epic games /====================================

Client.on("messageCreate", message => {
    if(message.content === prefix + "epicgames"){
        message.reply("𝑴𝒐𝒏 𝑬𝒑𝒊𝒄 𝑮𝒂𝒎𝒆𝒔 🎮 : 𝑻𝒘𝒊𝒕𝒄𝒉-𝑺𝒂𝒏𝒅𝒂𝒙")
    
    }
    else if(message.content === prefix + "epicgames"){
        message.channel.send("**!help**\n - /epicgames : renvoie epicgames");
    }
});

//==================================/envoie les YouTube des youtubers dans mon serveur discord /=================================

Client.on("messageCreate", message =>{
    if (message.author.bot)return;

if(message.content ===prefix + "youtube"){

   const embed = new Discord.MessageEmbed()
        .setDescription(" Youtube : https://bit.ly/3DN9cix")
        .setColor("#ffffff")
        .setTitle("𝑴𝒐𝒏 𝒀𝒐𝒖𝑻𝒖𝒃𝒆 💻")
        .setURL("https://bit.ly/3DN9cix")
        .setAuthor(" ✨ GameWorld ✨", "https://cdn.discordapp.com/attachments/859014813354033152/898853952739762196/1.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/859014813354033152/898856878375850014/youtube.png")


       message.channel.send({ embeds: [embed]});
}

});

//=============================/message Embed !twitch ( envoie le twitch des streamers qui ont le rolde dans mon serveur /=================================

Client.on("messageCreate", message =>{
    if (message.author.bot)return;

if(message.content ===prefix + "twitch"){

   const embed = new Discord.MessageEmbed()
        .setDescription("𝐌𝐨𝐧 𝐭𝐰𝐢𝐭𝐜𝐡 🟣 :  http://twitch.tv/sandax \n ━━━━━━━━━━━━━━━ \n 𝐭𝐰𝐢𝐭𝐜𝐡 **N3odrim** 🟣 :  http://twitch.tv/n3odrim")
        .setColor("#ffffff")
        .setTitle("//-𝐭𝐰𝐢𝐭𝐜𝐡 🟣-\\")
        .setURL("https://twitch.tv/sandax")
        .setAuthor(" ✨ GameWorld ✨", "https://cdn.discordapp.com/attachments/859014813354033152/898853952739762196/1.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/859014813354033152/898856882263969823/twitch.png")
        .MessageButton("https://twitch.tv/sandax")
        //.setFooter('Twitch : sandax', 'https://media.discordapp.net/attachments/859014813354033152/898856882263969823/twitch.png');
       // .setImage("https://cdn.discordapp.com/attachments/859014813354033152/899158287147233300/Sans_titre_1.png")
        
       message.channel.send({ embeds: [embed]});
}});

//============================== /quand une personne dit "salut" le bot dit "salut !"/ ==============================

Client.on("messageCreate", message => {
    if (message.author.bot) return;
    if(message.content === "salut" ){
        message.reply("Salut !")
    
    }
    }
);

//============================== /quand une personne dit "yo" le bot dit "salut !" / ==============================

Client.on("messageCreate", message => {
    if (message.author.bot) return;
    if(message.content === "yo" ){
        message.reply("Salut !")
    
    }
    }
);

//============================== /quand une personne dit "bonjour" le bot dit "salut !" / ==============================

Client.on("messageCreate", message => {
    if (message.author.bot) return;
    if(message.content === "bonjour" ){
        message.reply("Salut !")
    
    }
    }
);

//============================== /quand une personne dit "salut" le bot reagis avec "👋" / ==============================

Client.on("messageCreate", message => {
    if (message.author.bot) return;
    if(message.content === "salut" ){
        message.react("👋")
    
    }
    }
);

//================================/Message Embed !help /=======================================

Client.on("messageCreate", message =>{
    if (message.author.bot)return;

if(message.content ===prefix + "help"){

   const embed = new Discord.MessageEmbed()
        .setColor("#ffffff")
        .setTitle("𝑳𝒆𝒔 𝑪𝒐𝒎𝒎𝒂𝒏𝒅𝒆𝒔 📃")
        .setURL("https://twitch.tv/sandax")
        .setAuthor(" ✨ GameWorld ✨", "https://cdn.discordapp.com/attachments/859014813354033152/898853952739762196/1.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/859014813354033152/898856880305242142/help.png")
        .addField("**__!twitch__**", "🟣 : (𝐚𝐟𝐟𝐢𝐜𝐡𝐞 𝐥𝐞𝐬 𝐓𝐰𝐢𝐭𝐜𝐡 𝐝𝐞𝐬 𝐒𝐭𝐫𝐞𝐚𝐦𝐞𝐫𝐬)")
        .addField("__!youtube__","▶️ : ( 𝐚𝐟𝐟𝐢𝐜𝐡𝐞 𝐥𝐞𝐬 𝐲𝐨𝐮𝐭𝐮𝐛𝐞 𝐝𝐞𝐬 𝐘𝐨𝐮𝐭𝐮𝐛𝐞𝐫𝐬)")
        .addComponents("")
        

    

       message.channel.send({ embeds: [embed]});
}

});

//.setColor("#ffffff") white // blue turquoise #534aff



























//-----------------------------------------------------------------

Client.login("")
