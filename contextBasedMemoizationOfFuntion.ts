//context based memoization of a calculation extensive function
//

//common fun to convert a any to memoize function
const memoizeFunction = (fn, context) => {
  const cacheObject = {};
  return (...args) => {
    const cacheObjectKey = JSON.stringify(args);
    if (!cacheObject[cacheObjectKey]) {
      cacheObject[cacheObjectKey] = fn.call(context || this, ...args);
      console.log(cacheObject);
    }
    return cacheObject[cacheObjectKey];
  };
};

var a = {
  clumsy: "clumsy",
};
var b = {
  clumsy: "plumsy",
};

// function to be memoized
function calcIntensiveFun(n1, n2) {
  for (let i = 0; i < 999999999; i++) {}
  console.log(this.clumsy);
  return n1 * n2;
}

const memoizedCalcIntensiveFunForA = memoizeFunction(calcIntensiveFun, a);
const memoizedCalcIntensiveFunForB = memoizeFunction(calcIntensiveFun, b);

// for context a
console.time("startA");
console.log(memoizedCalcIntensiveFunForA(500, 600));
console.timeEnd("startA");
console.time("secondA");
console.log(memoizedCalcIntensiveFunForA(500, 600));
console.timeEnd("secondA");

// for context b
console.time("startB");
console.log(memoizedCalcIntensiveFunForB(5000, 6000));
console.timeEnd("startB");
console.time("secondB");
console.log(memoizedCalcIntensiveFunForB(5000, 6000));
console.timeEnd("secondB");
