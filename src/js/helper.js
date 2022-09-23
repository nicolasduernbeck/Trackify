const timeout = s => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject('Timeout time exceed!');
    }, s * 1000);
  });
};

export const getJson = async url => {
  try {
    const res = await Promise.race([fetch(url), timeout(5)]);
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
