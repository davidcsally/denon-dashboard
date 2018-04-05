/* eslint import/prefer-default-export: 0 */
export const mute = async () => {
  console.log('mute');
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
