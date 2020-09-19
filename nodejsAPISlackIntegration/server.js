const express = require("express");
const { WebClient } = require("@slack/web-api");
const app = express();

require("dotenv").config();

app.use(express.json());

const list = require("./listOfChats");
const allowedFormats = ["jpg", "jpeg", "png"];

console.log("Getting started");

app.post("/sendImage/:chat", (req, res) => {
  const chatName = req.params.chat;
  const imageURL = req.body.imageURL;

  if (!chatName && !imageURL) {
    res
      .status(404)
      .send({ message: "chat name or image url were not provided" });
  }

  if (list.listOfChats.indexOf(chatName) === -1) {
    res.status(404).send({
      message:
        "chat name that you provided is not in the list of existed chats",
    });
  }

  function checkForAllowedFormat() {
    return allowedFormats.some((format) => imageURL.includes(format));
  }

  if (
    imageURL.indexOf("http") === -1 ||
    imageURL.indexOf("://") === -1 ||
    !checkForAllowedFormat()
  ) {
    res.status(403).send({
      message: "image url is not valid",
    });
  }

  const web = new WebClient(process.env.SLACK_TOKEN);

  (async () => {
    try {
      // Use the `chat.postMessage` method to send an image from this app
      await web.chat.postMessage({
        channel: chatName,
        attachments: [
          {
            fallback: "Plain-text summary of the attachment.",
            image_url: imageURL,
          },
        ],
      });
      res.status(200).send({ message: "The image was sent" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "internal error on the server" });
    }

    console.log("Message posted!");
  })();
});

module.exports = app;
