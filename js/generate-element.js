const generateElement = (templateSelector, elementUpdate, data) => {
  const template = document.querySelector(templateSelector).content.children[0];
  const clonedTemplate = template.cloneNode(true);
  if (elementUpdate) {
    elementUpdate(clonedTemplate, data);
  }

  return clonedTemplate;
};

export {generateElement};
