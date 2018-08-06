
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Listen To YouSick_ Orders`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




 client.on("message", message => {
    var prefix = ".";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('? | **لا يوجد لديك صلاحية لمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم مسح الشات",
        color: 0x06DF00,
        description: "تم مسح الرسائل ",
        footer: {
          text: "©Ghost"
        }
      }}).then(msg => {msg.delete(10000)});
                          }   
}); 




client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('00100')){
        message.delete()
    return message.reply(`**Dont Sweraing!**`)
   message.delete()
    }
});




client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});




client.on('message', message => {
    if (message.author.id === client.user.id) return;
            if (message.content.startsWith(prefix + "ping")) {
        message.channel.sendMessage(':white_check_mark: Pong! In `' + `${client.ping}` + ' ms`');
    }
});




client.on('message', message => {
    if (message.content.startsWith(".avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var Hamada = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${Hamada.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});




client.on('message', message => {

    if (message.content === ".cchannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
//YouSick_#1533
if (message.content === ".ochannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }



});




client.on('message', message => {
if (message.content.startsWith(".ban")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.ban("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء باند الى : " + mention.tag);
};
});




client.on('message', message => {
if (message.content.startsWith(".kick")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.kick("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء كيك الى : " + mention.tag);
};
});




client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('ks')){
        message.delete()
    return message.reply(`**Dont Sweraing!**`)
   message.delete()
    }
});


client.on('message', message => {
    if (message.content.startsWith(".invites")) {

    message.guild.fetchInvites()
    .then(invites => message.channel.send(`**:busts_in_silhouette:  اتيت ب     [${invites.find(invite => invite.inviter.id === message.author.id)}]    :calling:   عضو لهذا السيرفر    `))
         
    }
});
client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = '.';
     
    if(cmd === `${prefix}report`){
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Idk who 2 report ??");
        let reason = args.join(" ").slice(22);
        if(!reason) return message.channel.send("What is the reason ??");
    
        let reportEmbed = new Discord.RichEmbed()
        .setTitle("User just reported...")
        .setColor("#f7abab")
        .addField("- Reported User :", `${rUser} (${rUser.id})`)
        .addField("- Reported By :", `${message.author} (${message.author.id})`)
        .addField("- Reported In :", message.channel)
        .addField("- Report Time :", message.createdAt.toLocaleString(),true)
        .addField("- Reason :", reason);
    
        let reportschannel = message.guild.channels.find(`name`, "reports");
        if(!reportschannel) return message.channel.send("You should to make `reports` channel.");
    
    
        message.delete().catch(O_o=>{});
        message.channel.send(`<@${rUser.id}>, Reported Successfully!!`)
        reportschannel.send(reportEmbed);
    };
});


const Discord = require("discord.js");
const client = new Discord.Client();
///by-hosam(galaxy-bot-dev)🚫
client.on('message', message => {
    if (message.content.startsWith(prefix + "c.role")) {
     if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
     message.guild.createRole({
  name: 'King',
  color: 'RANDOM',
  position: (1),
  permissions: 'ADMINISTRATOR'
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Prince',
    color: 'RANDOM',
    position: (2),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
        'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
         'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Commander',
    color: 'RANDOM',
     position: (3),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES']
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Admin',
    color: 'RANDOM',
    postion: (4),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Vip',
    color: 'RANDOM',
    postion: (5),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Active',
    color: '#030303',
    postion: (6),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.channel.send('**تم انشاء الرتب بنجاح**') ///by-hosam(galaxy-bot-dev)🚫
.catch(console.error);
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "c.t")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
     message.guild.createChannel('rules', 'text')
	 message.guild.createChannel('welcome', 'text') ///by-hosam(galaxy-bot-dev)🚫
	 message.guild.createChannel('bo7', 'text')
     message.guild.createChannel('youtubers', 'text')
	 message.guild.createChannel('giveaway', 'text') ///by-hosam(galaxy-bot-dev)🚫
	 message.guild.createChannel('shop', 'text')
	 message.guild.createChannel('pic', 'text')
	 


     

message.channel.sendMessage('**Channel Was Succsesfluy Created**')
}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "c.v")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
message.guild.createChannel('╔╣MUSIC╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Public╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣MineCraft╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Fortnite╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Call Of Duty╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣League Of Legends╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Battle Field╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Cs : Go╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
.catch(console.error);
    }
});

client.login(process.env.BOT_TOKEN);
