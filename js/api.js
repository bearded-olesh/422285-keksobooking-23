import {URL_GET, URL_POST} from './const.js';

const getData = (onSuccess, onFail) => {
  fetch(URL_GET)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail();
    });
};

const sendData = (onSuccess, onFail, formData) => {
  fetch(
    URL_POST,
    {
      method: 'POST',
      body : formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
      onFail();
    });
};

export {getData, sendData};
