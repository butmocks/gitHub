const urls = ['https://server.com/us', 'https://server.com/eu', 'https://server.com/au'];

const getRandomDelay = (from, to) => from + Math.random() * (to - from);

const request = url =>
  new Promise(resolve => {
    const delay = getRandomDelay(1000, 3000);
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, delay);
  });

const getUserASAP = userId => {
  const userUrls = urls.map(serverUrl => `${serverUrl}/${userId}`);
  const requests = userUrls.map(url => request(url));

  return Promise.race(requests);
};

getUserASAP('id-123').then(res => console.log(res));


// ================

const request = url =>
  new Promise(resolve => {
    const randomDelay = getRandomNumber(1000, 3000);
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, randomDelay);
  });

const servers = [
  'https://server.com/us/userld',
  'https://server.com/eu/userld',
  'https://server.com/au/userld',
];

export const getUserASAP = userId => {
  const userUrls = servers.map(serverUrl => `${serverUrl}`);
  console.log(userUrls);

  const requests = userUrls.map(userUrl => request(userUrl));

  return Promise.race(requests);
};