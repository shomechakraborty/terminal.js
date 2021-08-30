const _ = {
  clamp(number, lower, upper) {
    if (number < lower) {
      return lower;
    } else if (number > upper) {
      return upper;
    } else {
      return number;
    }
  },
  inRange(number, start, end) {
    if (end !== undefined) {
      if (start <= end) {
        if (number >= start && number < end) {
          return true;
        } else {
          return false;
        }
      } else {
        const originalEnd = end;
        end = start;
        start = originalEnd
        if (number >= start && number < end) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      end = start;
      start = 0;
      if (number >= start && number < end) {
        return true;
      } else {
        return false;
      }
    }
  },
  words(string) {
    const words = string.split(' ');
    return words;
  },
  pad(string, length) {
    if(length <= string.length) {
      return string;
    }
    const startPadding = Math.floor((length - string.length) / 2);
    const endPadding = length - string.length - startPadding;
    const paddedString = ' '.repeat(  startPadding) + string + ' '.repeat(endPadding);
    return paddedString;
  },
  has(object, key) {
    if(object[key] !== undefined) {
      return true;
    } else {
      return false;
    }
   },
   invert(object) {
     let invertedObject = {};
     for(let key in object) {
       const originalValue = object[key];
       invertedObject = {originalValue: key};
     }
    return invertedObject;
   }
}






// Do not write or modify code below this line.
module.exports = _;
