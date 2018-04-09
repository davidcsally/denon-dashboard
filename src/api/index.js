/* eslint import/prefer-default-export: 0 no-console: 0 */
/**
 * Mute or unmute the device. Returns the mute status
 * @returns {boolean}
 */
export const mute = async () => {
  try {
    const response = await fetch('http://localhost:2222/volume/mute', {
      method: 'POST',
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return console.log('[mute]: error: ', e);
  }
};

/**
 * Set the volume between 0.0 and 100.0.
 * Returns the new volume
 * @param {number} vol
 */
export const volume = async (vol) => {
  try {
    const response = await fetch(`http://localhost:2222/volume/${vol}`, {
      method: 'POST',
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return console.log('[volume]: error: ', e);
  }
};

/**
 * Nudge the volume up
 */
export const volUp = async () => {
  try {
    const response = await fetch('http://localhost:2222/volume/up', {
      method: 'POST',
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return console.log('[volUp]: error: ', e);
  }
};

/**
 * Nudge the volume down
 */
export const volDown = async () => {
  try {
    const response = await fetch('http://localhost:2222/volume/down', {
      method: 'POST',
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return console.log('[volDown]: error: ', e);
  }
};

/**
 * Turn the device on
 */
export const powerOn = async () => {
  try {
    const response = await fetch('http://localhost:2222/power/on', {
      method: 'POST',
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return console.log('[powerOn]: error: ', e);
  }
};

/**
 * turn the device off
 */
export const powerOff = async () => {
  try {
    const response = await fetch('http://localhost:2222/power/off', {
      method: 'POST',
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return console.log('[powerOff]: error: ', e);
  }
};
