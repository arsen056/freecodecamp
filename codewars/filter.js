/* You code goes here */
Array.prototype.filter = function (callback, context) {
  const res = [];
  const length = this.length;
  const callback2 = callback.bind(context);

  for (let i = 0; i < length; i++) {
    if (!context) {
      if (callback(this[i], i, this)) {
        res.push(this[i]);
      }
    } else {
      if (callback2(this[i], i, this)) {
        res.push(this[i]);
      }
    }
  }
  return res;
};
