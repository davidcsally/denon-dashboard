/** all the fun sources that we can switch too */
const sources = {
  tuner: 'SITUNER',
  dvd: 'SIDVD',
  bd: 'SIBD',
  tv: 'SITBV',
  sat: 'SISAT/CBL',
  cbl: 'SISAT/CBL',
  mplay: 'SISMPLAY',
  game: 'SIGAME',
  aux: 'SIAUX1',
  aux1: 'SIAUX1',
  net: 'SINET',
  pandora: 'SIPANDORA',
  sirius: 'SISIRIUSXM',
  siriusxm: 'SISIRIUSXM',
  lastfm: 'SILASTFM',
  flickr: 'SIFLICKR',
  favorites: 'SIFAVORITES',
  iradio: 'SIIRADIO',
  server: 'SISERVER',
  'usb/ipod': 'SIUSB/IPOD', // select input
  usb: 'SIUSB', // select and play playback
  ipd: 'SIIPD', // ipod direct playback
  ipod: 'SIIPD', // ipod direct playback
  iphone: 'SIIPD', // ipod direct playback
  apple: 'SIIPD', // ipod direct playback
  irp: 'SIIRP', // select network and start internet radio playback,
  fvp: 'SIFVP', // select favorites and start playback,
  status: 'SI?', // return status
};

/**
 * middleware to change the source (eg dvd, tv, ipod, usb).
 * Source is selected from the sources object
 */
exports.changeSource = (req, res) => {
  const { denon } = res.locals;
  const { source } = req.params;
  const newSource = sources[source];
  if (newSource) denon.command(newSource);
  res.end();
};
