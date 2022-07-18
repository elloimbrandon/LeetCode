const isHappy = function (n) {
  let temp = 0;

  if (n == 1) {
    return true;
  }

  if (n < 10) {
    temp = n * n;
    if (temp < 10) return false;
  }

  const arrayOfDigits = Array.from(String(n), Number);

  if (n > 0 && arrayOfDigits.length > 1) {
    for (let i = 0; i < arrayOfDigits.length; i++) {
      temp = temp + arrayOfDigits[i] * arrayOfDigits[i];
      if (temp == 1) {
        return true;
      } else {
        isHappy(temp);
      }
      return false;
    }
  }
  return true;
};

console.log(isHappy(10));
