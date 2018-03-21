const Denon = require('../server/Denon');

const denon = new Denon();

denon.connect();
denon.command('PWON')
  .then(() => {
    setTimeout(() => {
      process.exit(0);
    }, 2000);
  });
