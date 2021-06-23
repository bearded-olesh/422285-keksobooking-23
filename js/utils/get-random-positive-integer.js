const getRandomPositiveInteger = (limA, limB) => {
  const lower = Math.ceil(Math.min(Math.abs(limA), Math.abs(limB))),
    upper = Math.floor(Math.max(Math.abs(limA), Math.abs(limB))),
    result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export {getRandomPositiveInteger};
