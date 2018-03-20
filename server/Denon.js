const { Socket } = require('net');

// hard coded
const port = 23;
const address = '192.168.0.20';

module.exports = class Denon {
  constructor() {
    const socket = new Socket({ allowHalfOpen: true });
    socket.setTimeout(250);
    socket.setEncoding('utf8');

    this.socket = socket;
    this.on = socket.on.bind(socket);
    this.end = socket.end.bind(socket);
  }

  connect() {
    return new Promise(resolve =>
      this.socket.connect(port, address, resolve));
  }

  command(cmd) {
    return Promise.resolve(this.socket.write(`${cmd}\r`));
  }
};
