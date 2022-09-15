Array.prototype.map = function (callback, context) {
  const res = [];
  const this1 = this;
  const callback2 = callback.bind(context);
  for (let i = 0; i < this1.length; i++) {
    res.push(
      !(i in this1)
        ? undefined
        : context
        ? callback2(this1[i], i, this1)
        : callback(this1[i], i, this1),
    );
  }
  return res;
};
