var tmi = require('tmi.js');

var options = {
  options: {
    debug: true
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },
  identity: {
    username: "RIA_bot",
    password: "oauth:x9ym6x73yq7j044848w0h32yjnqjys"
  },
  channels: ["fatsack51"]
};

var client = new tmi.client(options);
client.connect();

client.on('chat', function(channel, user, message, self) {
  if(message === "!ria") {
    client.action("fatsack51", "RIA is a remote intelligence agent, a chat bot for all your streaming needs.");
  }
});

client.on('connected', function(address, port) {
  console.log("Address: " + address + "Port: " + port);
  client.action("fatsack51", "RIA is now connected to Fatsack Gaming.")
});
