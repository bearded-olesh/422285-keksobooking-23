const generateElement = (templateSelector, elementUpdate, data) => {
  const template = document.querySelector(templateSelector).content.children[0];
  const element = template.cloneNode(true);
  const message = document.createElement('div');
  if (elementUpdate) {
    elementUpdate(element, data);
  }

  message.appendChild(element);
  return message;
};

export {generateElement};
