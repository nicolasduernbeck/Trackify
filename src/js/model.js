import { getJson } from './helper';

export const state = {
  coords: {
    lat: '',
    lng: '',
  },
};

export const getApiData = async ip => {
  try {
    ip = ip.trim();
    const data = await getJson(`http://ip-api.com/json/${ip}`);
    if (data.status === 'fail') throw new Error('Invalid IP - Adress!');
    console.log(data);
    state.coords.lat = data.lat;
    state.coords.lng = data.lon;
  } catch (err) {
    throw err;
  }
};
