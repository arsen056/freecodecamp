function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  } else {
    const resArr = rangeOfNumbers(startNum, endNum - 1);
    resArr.push(endNum);
    return resArr;
  }
}

rangeOfNumbers(1, 5);
