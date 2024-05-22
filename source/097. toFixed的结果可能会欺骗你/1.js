import { Decimal } from 'decimal.js';
Number.prototype.myToFixed = function (fractionDigits) {
  // 1: Let x be thisNumberValue(this value).
  let x = Number(this);
  // 2: Let f be toIntegerOrInfinity(fractionDigits).
  let f = Number(fractionDigits);
  // 3: Assert: If fractionDigits is undefined, then f is 0.
  if (f === undefined) {
    f = 0;
  }
  // 4. If f is not finite, throw a RangeError exception.
  // 5. If x is not finite, return Number::toString(x, 10).
  if (!Number.isFinite(x)) {
    return x.toString(10);
  }
  // 6. If f < 0 or f > 100, throw a RangeError exception.
  if (f < 0 || f > 100) {
    throw new RangeError('Invalid fraction digits');
  }
  // 7. Set x to ℝ(x). (omitted)
  x = new Decimal(x.toPrecision(100));
  // 8. Let s be the empty String.
  let s = '';
  // 9. If x < 0, then
  if (x.isNegative()) {
    // a. Set s to "-".
    s = '-';
    // b. Set x to -x.
    x = x.times(-1);
  }
  let m;
  // 10. If x ≥ 10^21, then
  if (x.gte(Math.pow(10, 21))) {
    //  Let m be ! ToString(𝔽(x)).
    m = x.toString();
  } else {
    // 11. Else,
    // 11.1. Let n be an integer for which n / 10f - x is as close to zero as possible. If there are two such n, pick the larger n.
    const n = x.times(Math.pow(10, f)).round();
    // 11.2. If n = 0, let m be "0". Otherwise, let m be the String value consisting of the digits of the decimal representation of n (in order, with no leading zeroes).
    if (n.isZero()) {
      m = '0';
    } else {
      m = n.toString();
    }
    // 11.3. If f ≠ 0, then
    if (f !== 0) {
      // 11.3.1. Let k be the number of characters in m.
      let k = m.length;
      // 11.3.2. If k ≤ f, then
      if (k <= f) {
        // a. Let z be the String consisting of f+1−k occurrences of the character "0".
        const z = '0'.repeat(f + 1 - k);
        // b. Let m be the concatenation of Strings z and m.
        m = z + m;
        // c. Let k be f+1.
        k = f + 1;
      }
      // 11.3.3. Let a be the first k-f characters of m, and let b be the remaining f characters of m.
      const a = m.slice(0, k - f);
      const b = m.slice(k - f);
      // 11.3.4. Let m be the concatenation of Strings a and b.
      m = a + '.' + b;
    }
  }
  // Return the string-concatenation of s and m.
  return s + m;
};

const number = 0.45;
console.log(number.myToFixed(20));
console.log(number.toFixed(20));
