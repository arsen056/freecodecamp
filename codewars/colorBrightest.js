function brightest(colors) {
  let maxEl1 = colors[0];
  let maxEl2 = '';
  for (let i = 1; i < colors.length; i++) {
    if (max(maxEl1) < max(colors[i])) {
      maxEl1 = colors[i];
    } else if (max(maxEl1) === max(colors[i])) {
      maxEl2 = colors[i];
    }
  }
  return maxEl1;
}

const max = (str) => {
  const resArr = str
    .slice(1, 7)
    .match(/.{1,2}/g)
    .map((e) => parseInt(e, 16));

  return Math.max.apply(null, resArr);
};
