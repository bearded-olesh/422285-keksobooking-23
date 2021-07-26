const generateElement = (templateSelector, elementUpdate, data) => {
  const template = document.querySelector(templateSelector).content.children[0];
  const element = template.cloneNode(true);
  if (elementUpdate) {
    elementUpdate(element, data);
  }

  return element;
};

export {generateElement};
