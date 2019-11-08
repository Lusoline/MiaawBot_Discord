import { Client } from "discord.js";
import { sadcat } from "./commands/sadcat.js";
var bot = new Client();

bot.login(process.env.MIAAW_LOGIN).catch(console.error);

bot.on("ready", function() {
  console.log("Je suis connecté !");
});

bot.on("message", message => {
  if (message.content === "/sadcat") {
    sadcat(message);
  }
});
