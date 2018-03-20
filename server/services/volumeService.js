exports.volume = (req, res) => {
  const { denon } = res.locals;
  const { volume } = req.params;
  const num = parseInt(volume, 10);
  denon.command(`MV${num}`);
  res.end();
};

exports.volumeUp = (req, res) => {
  const { denon } = res.locals;
  denon.command('MVUP');
  res.end();
};

exports.volumeDown = (req, res) => {
  const { denon } = res.locals;
  denon.command('MVDOWN');
  res.end();
};

