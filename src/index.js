import { Client } from "discord.js";
var bot = new Client();

bot.login("NjMxOTg0NTE5MjkyOTExNjI5.XZ-0AQ.v4zpvKG5RJw6rD8-c0JfRmwjh9M");

bot.on("ready", function() {
  console.log("Je suis connecté !");
});

bot.on("message", message => {
  if (message.content === "ping") {
    message.reply("test !");
  }
});
