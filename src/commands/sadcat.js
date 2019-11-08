//import fs from "fs";

export const sadcat = message => {
  message.channel
    .send({
      embed: {
        image: {
          url: "attachment://sadcat.jpg"
        }
      },
      files: [
        {
          attachment: `src/pictures/sadcat/sadcat${Math.floor(
            Math.random() * (4 - 1 + 1) + 1
          )}.jpg`,
          name: "sadcat.jpg"
        }
      ]
    })
    .catch(console.error);
};

/*fs.readdir("../pictures/sadcat", (err, files) => {
  if (err) {
    return console.error(err);
  }
});*/

/*{
  files: [
    `src/pictures/sadcat/sadcat${Math.floor(
      Math.random() * (3 - 1 + 1) + 1
    )}.jpg`
  ]
}*/
