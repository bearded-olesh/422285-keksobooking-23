const generateElement = (templateSelector, quantity, elementUpdate) => {
  const template = document.querySelector(templateSelector).content;
  const fragment = document.createDocumentFragment();

  for (let index = 1; index <= quantity; index++) {
    const element = template.cloneNode(true);
    if (elementUpdate) {
      elementUpdate(element, index);
    }

    fragment.appendChild(element);
  }

  return fragment;
};

export {generateElement};
