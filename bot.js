
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Officer Mukhld`,"http://twitch.tv/idk")
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
  console.log('╔[══════════════════════════════════════════════════════════════════════════]╗')
  console.log('[═════════════════════════════Login By YouSick_═══════════════════════════════')
  console.log('╚[══════════════════════════════════════════════════════════════════════════]╝')
});




 client.on("message", message => {
    var prefix = ".";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You Dont Have Permission ``Manage_Messages``');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | ClearChat",
        color: 0x06DF00,
        description: ";)",
        footer: {
          text: "©Funny :)"
        }
      }}).then(msg => {msg.delete(10000)});
                          }   
}); 




client.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith('.bc')) {
if(!message.channel.guild) return message.channel.send('**This Commands For Server** <3').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('You Dont Have Permission `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "Dragon";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**Write a Word To Send it**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});



client.on('message', message => {
    if (message.author.id === client.user.id) return;
            if (message.content.startsWith(prefix + "ping")) {
        message.channel.sendMessage(':white_check_mark: Pong! In `' + `${client.ping}` + ' ms`');
    }
});




client.on('message', message => {

    if (message.content === ".cchannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You Dont Have Permission ``Manage_Message``');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("Closed Chat :white_check_mark: ")
           });
             }
//YouSick_#1533
if (message.content === ".ochannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You Dont Have Permission``Manage_Message``');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("Opened Chat:white_check_mark:")
           });
             }



});




client.on('message', message => {
if (message.content.startsWith(".ban")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("Mention him");

    mention.ban("By: " + message.author.tag);
    
    message.channel.send("was banned from the server" + mention_tag);
};
});




client.on('message', message => {
if (message.content.startsWith(".kick")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("Mention him");

    mention.kick("By: " + message.author.tag);
    
    message.channel.send("was kick from the server" + mention.tag);
};
});

client.on('message', message => {
if(message.content.startsWith(prefix + "invite")) { 
message.author.send(`This Is Invite Link: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2080374975`);
message.reply("✅ | Done | Check Your DirectMessages")
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



client.on('message', message => {
  if (message.content.startsWith(prefix + "deafen")) {
    if (!message.member.hasPermission('DEAFEN_MEMBERS')) return;
  { message.member.setDeaf(true);
    }
  }
    });
client.on('message', message => {
  if (message.content.startsWith(prefix + "vmute")) {
    if (!message.member.hasPermission('MUTE_MEMBERS')) return;
  { message.member.setMute(true);
   
    }
  }
    });
client.on('message', message => {
  if (message.content.startsWith(prefix + "undeafen")) {
    if (!message.member.hasPermission('DEAFEN_MEMBERS')) return;
  { message.member.setDeaf(false);
    }
  }
    });
client.on('message', message => {
  if (message.content.startsWith(prefix + "vunmute")) {
    if (!message.member.hasPermission('MUTE_MEMBERS')) return;
  { message.member.setMute(false);
    }
  }
    });

client.on('message', function(msg) {
    const prefix = '^'
    if(msg.content.startsWith ('.server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** server type**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __Roles__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ Members Number__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ Members Number who online__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ Text Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ voice Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ The Owner__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ Server ID__**',`**${msg.guild.id}**`,true)
      .addField('📅**__The date when the server created __**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

client.on('message', message => {

     if (message.author.bot) return;
    if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'members')) {
        if (!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(message.author.avatarURL)
            .setFooter(message.author.username, message.author.avatarURL)

        .setDescription(`**:battery: حالة اعضاء السيرفر**
    
**:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
**:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
**:heart: DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
**:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)

        message.channel.send()

        message.channel.sendEmbed(embed)
    }
});
  
client.on('message', message => {
  if(message.content == ".help"){
    var embed = new Discord.RichEmbed() 
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .setFooter(`Requested By | ${message.author.username}`)
    .setColor("RANDOM")
    .addField(`${prefix}help`, "**Show This List**")
    .addField(`${prefix}clear`, "**Clear the Chat**")
    .addField(`${prefix}server`, "**Show Informision The Server**")
    .addField(`${prefix}cchannel`, "**Close The Chat**")
    .addField(`${prefix}ochannel`, "**Open The Chat**")
    .addField(`${prefix}members`, "**Show Member Status List**")
    .addField(`${prefix}hchannel`, "**Hide The Channel**")
    .addField(`${prefix}schannel`, "**SHow The Channel**")
    .addField(`${prefix}report`, "**Report Someone**")
    .addField(`${prefix}sug`, "**Suggentions Help Your Server**")
    .addField(`${prefix}kick`, "**kick Someone**")
    .addField(`${prefix}ban`, "**Ban Someone**")
    .addField(`${prefix}avatar`, "**Show Your Avatar**")
    .addField(`${prefix}temp on`, "**Tempority rooms On**")
    .addField(`${prefix}temp off`, "**Tempority rooms Off**")
    .addField(`${prefix}temptime <time>`, "** Set temp rooms time 1000=1sec**")
    .addField(`${prefix}message <@iduser>`, "**Send message to person with ur name**")
    .addField(`${prefix}msg <@iduser>`, "**Send message to person without ur name**")
    message.channel.send(`✅ | Done | Check Your DirectMessages <@${message.author.id}>`)
    message.author.send({embed})
  } 
});

 client.on('message', message => {
        var  user = message.mentions.users.first() || message.author;
    if (message.content.startsWith(".avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});
const temp = {};
client.on('message', async message => {
 if(message.channel.type === "dm") return;
  if(message.author.bot) return;
   if(!temp[message.guild.id]) temp[message.guild.id] = {
    time: "3000",
     category : 'temp channels',
      channel : 'Join to create room'
       }
        if(message.content.startsWith('.temp on')){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
          var ggg= message.guild.createChannel('temp channels', 'category').then(cg => {
           var ccc =message.guild.createChannel('Join to create room', 'voice').then(ch => {
            ch.setParent(cg)
             message.channel.send('**Done ,**')
              client.on('message' , message => {
               if(message.content === '.temp off') {
                if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                 cg.delete()
                  ch.delete()
                   message.channel.send('**Done ,**')
                    }
                     });
                      const time = temp[message.guild.id].time
                       client.on('message' , message => {
                        if (message.content.startsWith(prefix + "temptime")) {
                         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                          let newTime= message.content.split(' ').slice(1).join(" ")
                          if(!newTime) return message.reply(`**${prefix}temptime <time>  \`1000 = 1s\`**`)
	                 if(isNaN(newTime)) return message.reply(`** The Time Be Nambers :face_palm: **`);
	                if(newTime < 1) return message.reply(`**The Time Be Up \`3000s\`**`)
                       temp[message.guild.id].time = newTime
                      message.channel.send(`**Temp Rooms Time Change To \`${newTime}\`**`);
                     }
                    });
                   client.on('voiceStateUpdate', (old, neww) => {
                  let newUserChannel = neww.voiceChannel
                 let oldUserChannel = old.voiceChannel
                temp[message.guild.id].category = cg.id
               temp[message.guild.id].channel = ch.id
              let channel = temp[message.guild.id].channel
             let category = temp[message.guild.id].category
            if(oldUserChannel === undefined && newUserChannel !== undefined && newUserChannel.id == channel) {
           neww.guild.createChannel(neww.displayName , 'voice').then(c => {
          c.setParent(category)
         let scan = setTimeout(()=>{
        if(!neww.voiceChannel) {
       c.delete();
      client.channels.get(channel).overwritePermissions(neww, {
     CONNECT:true,
    SPEAK:true
   })
  }
 }, temp[neww.guild.id].time);
  c.overwritePermissions(neww, {
   CONNECT:true,
    SPEAK:true,
     MANAGE_CHANNEL:true,
      MUTE_MEMBERS:true,
       DEAFEN_MEMBERS:true,
	MOVE_MEMBERS:true,
	 VIEW_CHANNEL:true
	  })
	   neww.setVoiceChannel(c)
            })
             client.channels.get(channel).overwritePermissions(neww, {
	      CONNECT:false,
	       SPEAK:false
		})
               }
              })
             })
           })
          }
      });

//! KinG66S.❤#0045
var KinG66S = {};//! KinG66S.❤#0045
client.on('guildMemberRemove', member => {//! KinG66S.❤#0045
KinG66S[member.id] = {roles: member.roles.array()};//! KinG66S.❤#0045
});
//! KinG66S.❤#0045 //! KinG66S.❤#0045 //! KinG66S.❤#0045 
client.on('guildMemberAdd', member => {//! KinG66S.❤#0045
if(!KinG66S[member.user.id]) return;//! KinG66S.❤#0045
console.log(KinG66S[member.user.id].roles.length);//! KinG66S.❤#0045
for(let i = 0; i < KinG66S[member.user.id].roles.length + 1; i++) {//! KinG66S.❤#0045
member.addRole(KinG66S[member.user.id].roles.shift());//! KinG66S.❤#0045
}//! KinG66S.❤#0045
});//! KinG66S.❤#0045

  client.on("guildBanAdd", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor(exec)
        .setThumbnail(myUser.avatarURL)
        .addField('- Banned User:',`**${myUser.username}**`,true)
        .addField('- Banned By:',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});

const developers = ["404610434063269908","411306953185296390","343069080917377034"]
const adminprefix = "^";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client.on('message', msg => {
  //Code By : YouSick_#9909
  if(msg.content.startsWith('.vote')) {
    if(!msg.channel.guild) return msg.reply('**This Command For Server Only**');
    if(!msg.guild.channels.find('name', 'vote')) return msg.reply('Create ``vote`` Chat');
    let args = msg.content.split(" ").slice(1);
    if(!args[1]) return msg.reply('.vote [text')
    //غيره على حسب اسم روم الاقتراحات او سوي مثل اسم الروم الموجود هنا
    if(msg.guild.channels.find('name', 'vote')) {
      //غيره هنا كمان اذا غيرت فوق
      msg.guild.channels.find('name', 'vote').send(`
     Vote create by : ${msg.member}
  ➠ ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
      `)
      .then(function (message) {
        message.react('✅')
        message.react('❌')
      })
      }
    }

});

  client.on('message',async message => {
  function timeCon(time) {
  let days = Math.floor(time % 31536000 / 86400);
  let hours = Math.floor(time % 31536000 % 86400 / 3600);
  let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60);
  let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60);
  days = days > 9 ? days : '0' + days;
  hours = hours > 9 ? hours : '0' + hours;
  minutes = minutes > 9 ? minutes : '0' + minutes;
  seconds = seconds > 9 ? seconds : '0' + seconds;
  return `${days > 0 ? `${days} Days ` : ''}${(hours || days) > 0 ? `${hours} Hours ` : ''}${minutes} Mins ${seconds} Secs`;
  }
  
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + "bot")) {
    let ramUsage = (process.memoryUsage().rss / 1048576).toFixed();
    let upTime = timeCon(process.uptime());
    let createdAt = moment(client.user.createdAt).fromNow();

let m = await message.channel.send(`\`\`\`asciidoc\n= Normal Information =
Creator :: ${client.users.get("470282325083815956").username} - ${createdAt}
Ping :: ${client.pings[0]} ms
UpTime :: ${upTime}

= Servers Information =
Servers :: ${client.guilds.size}
Users :: ${client.users.size}
Channels :: ${client.channels.size}

= Developer Information =
NodeJS :: ${process.version}
DiscordJS :: ${Discord.version}
Arch :: ${process.arch}
Platform :: ${process.platform}

= Host Information =
UsedHeap :: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100} MB
Heap :: ${Math.round(process.memoryUsage().heapTotal / 1024 / 1024 * 100) / 100} MB
Ram :: ${ramUsage} MB
Rss :: ${Math.round(process.memoryUsage().rss / 1024 / 1024 * 100) / 100} MB
\`\`\``);
  }
});

client.on("message", function(message) {
let messageArray = message.content.split(" ");
let command = messageArray[0];
let anarg = message.content.split(" ").slice(2);
let toSend = message.mentions.users.first();
        
         var currentTime = new Date(),
          hours = currentTime.getHours() + 2 ,
          minutes = currentTime.getMinutes(),
          seconds = currentTime.getSeconds(),
          Year = currentTime.getFullYear() - 2000,
          Month = currentTime.getMonth() + 1,
          Day = currentTime.getDate();
          var suffix = 'AM';
          if (hours >= 12) {
             suffix = 'PM';
              hours = hours - 12;
         }
          if (hours == 0) {
              hours = 12;
          }
let xFive = new Discord.RichEmbed()
    .setColor("BLUE")
    .setAuthor(message.author.username,message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setFooter("SenioR TeaM. || "+"- "+Month+"."+Year+"."+Day+" -"+hours+":"+minutes+" "+suffix)
    .addField("**•Message**","**"+anarg+"**")
    .addField("**•Send By**","<@"+message.author.id+">")
    .addField("**•Data**",Day+"/"+Month+"/"+Year+" | "+hours+":"+minutes+":"+seconds+" "+suffix)
if(command === `${prefix}message`) {
    if(toSend.bot) return message.reply("**# You cannot send a message to a bot!** 🎇");
    if(anarg < 1) return message.reply("**# Please , Specify a valid arguments!** 🎇");
    //if(toSend === message.author) return message.reply("**# You cannot send a message to yourself**");
    toSend.send({embed:xFive});
    message.reply("** ✅ , Sent a Message to **<@"+toSend.id+">")
 }
});

client.on("message", function(message) {
let messageArray = message.content.split(" ");
let command = messageArray[0];
let anarg = message.content.split(" ").slice(2);
let toSend = message.mentions.users.first();
        
         var currentTime = new Date(),
          hours = currentTime.getHours() + 2 ,
          minutes = currentTime.getMinutes(),
          seconds = currentTime.getSeconds(),
          Year = currentTime.getFullYear() - 2000,
          Month = currentTime.getMonth() + 1,
          Day = currentTime.getDate();
          var suffix = 'AM';
          if (hours >= 12) {
             suffix = 'PM';
              hours = hours - 12;
         }
          if (hours == 0) {
              hours = 12;
          }
let xFive = new Discord.RichEmbed()
    .setColor("BLUE")
    .setAuthor(message.author.username,message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setFooter("SenioR TeaM. || "+"- "+Month+"."+Year+"."+Day+" -"+hours+":"+minutes+" "+suffix)
    .addField("**•Message**","**"+anarg+"**")
    .addField("**•Data**",Day+"/"+Month+"/"+Year+" | "+hours+":"+minutes+":"+seconds+" "+suffix)
if(command === `${prefix}msg`) {
    if(toSend.bot) return message.reply("**# You cannot send a message to a bot!** 🎇");
    if(anarg < 1) return message.reply("**# Please , Specify a valid arguments!** 🎇");
    //if(toSend === message.author) return message.reply("**# You cannot send a message to yourself**");
    toSend.send({embed:xFive});
    message.reply("** ✅ , Sent a Message to **<@"+toSend.id+">")
 }
});

client.login(process.env.BOT_TOKEN); 
