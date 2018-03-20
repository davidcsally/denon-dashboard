exports.powerOn = (req, res) => {
  const { denon } = res.locals;
  denon.command('PWON');
  res.send();
};

exports.powerOff = (req, res) => {
  const { denon } = res.locals;
  denon.command('PWSTANDBY');
  res.send();
};
