const { request } = require("express");
const messageController = require("../controllers/messageController");

module.exports = (app) => {

    app.get("/message/:text", messageController.sendMessage);

}