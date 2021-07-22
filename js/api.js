const fetchData = (onSuccess, onFail, url, config = {}) => {
  fetch(
    url,
    config,
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail();
    });
};

export {fetchData};
