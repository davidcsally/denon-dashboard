/* eslint import/prefer-default-export: 0 */
export const mute = async () => {
  try {
    const response = await fetch('http://localhost:2222/volume/mute', {
      method: 'POST',
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return console.log('error: ', e);
  }
};

export const volume = async (volume) => {
  try {
    const response = await fetch(`http://localhost:2222/volume/${volume}`, {
      method: 'POST',
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return console.log('error: ', e);
  }
};
