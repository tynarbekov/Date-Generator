function perm(xs) {
  let ret = [];

  for (let i = 0; i < xs.length; i = i + 1) {
    let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));

    if(!rest.length) {
      ret.push([xs[i]])
    } else {
      for(let j = 0; j < rest.length; j = j + 1) {
        ret.push([xs[i]].concat(rest[j]))
      }
    }
  }
  return ret;
}

function generateMax(digits) {
  const permutations = perm(digits);
  let possible = false;
  let candidate = [];
  let maxSeconds = 0;
  permutations.forEach((digitsArr) => {

    const hours = (digitsArr[0] + digitsArr[1]) * 60 * 60;
    const minutes = (digitsArr[2] + digitsArr[3]) * 60;
    const seconds = (digitsArr[4] + digitsArr[5]);

    const number = digitsArr[0] * 100000 + digitsArr[1] * 10000 +
      digitsArr[2] * 1000 + digitsArr[3] * 100 +
      digitsArr[4] * 10 + digitsArr[5];

    const total = hours + minutes + seconds;

    if ((digitsArr[0] * 10 + digitsArr[1]) < 24 && total >= maxSeconds && (number.toString().length === 6)) {
      maxSeconds = total;
      candidate = digitsArr;
      possible = true;
    }

  });

  if (!possible) {
    console.log('IMPOSSIBLE')
    return 'IMPOSSIBLE';
  }
  let timer = candidate[0]+ '' +candidate[1]+':'+candidate[2]+''+candidate[3]+':'+candidate[4]+''+candidate[5];
  console.log(timer);
  return timer;
}

function tests() {

  let failed = false;

  const testsArr = [
    { actual: generateMax([1,2,3,4,5,6]),
      expected: '16:54:32'
    },
    { actual: generateMax([1,2,2,4,5,6]),
      expected: '16:54:32'
    },
    { actual: generateMax([1,2,3,4,5,6]),
      expected: '16:54:32'
    },
    { actual: generateMax([5,5,5,5,5,6]),
      expected: '16:54:32'
    },
    { actual: generateMax([1,2,3,4,5,6]),
      expected: '16:54:33'
    }
  ];

  console.log('--------')

  testsArr.forEach((testResult) => {
    if (testResult.actual !== testResult.expected) {
      console.log('test failed!!!');
      console.log('actual: ' + testResult.actual);
      console.log('expected: ' + testResult.expected);
      console.log('--------')
    }
  });

  if(!failed) {
    console.log('tests failed');
  } else {
    console.log('tests passed');
  }

}

tests();
