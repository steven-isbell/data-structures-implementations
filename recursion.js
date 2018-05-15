// function resolution chain

function giveMe4() {
  return 4;
}

function giveMe3() {
  return giveMe4();
}

const three = giveMe3();

// POINTLESS LOOP EXAMPLE

const arr = [1, 2, 3, 4, 5];

function access(count) {
  if (count === arr.length) return 0;
  console.log(arr[count]);
  count++;
  return access(count);
}

access(0);

//////////////// fibonacci sequence ////////////////

// const fibonacci = n => n < 2 ? 1 : fibonacci(n-2) + fibonacci(n-1);

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

fibonacci(50);
/////////////// factorial ///////////////////////

// const factorial = n => n === 0 ? 1 : n * factorial(n - 1);

function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

const value = factorial(5);
console.log(value); // 2

// Example Stack
// const stack = [factorial(5), factorial(4), factorial(3), factorial(2), factorial(1), factorial(0)]

// 1
// 1 * 1 = 1
// 2 * 1 = 2
// 3 * 2 = 6
// 4 * 6 = 24
// 5 * 24 = 120

//////////// Traversing an Object //////////////////

let animals = {
  dog: {
    labrador: {
      american: 'http://dogpics.com/7423.png',
      english: 'http://dogpics.com/5274.png'
    },
    akita: {
      japanese: 'http://dogpics.com/3486.png',
      american: 'http://dogpics.com/4843.png',
      coolDog: {
        name: 'Josh'
      }
    },
    poodle: {
      standard: {
        french: 'http://dogpics.com/8484.png',
        barbone: 'http://dogpics.com/1268.png'
      },
      minature: 'http://dogpics.com/1350.png',
      toy: 'http://dogpics.com/884.png'
    }
  },
  cat: 'http://grumpycat.com/mrGrumpy.png',
  ants: ['A1', 'B2', 'C3', 'D4', 'E5', 'F6']
};

function objectSpy(obj, depth = 0) {
  let spaces = ' '.repeat(depth * 4);
  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      for (let key in obj) {
        objectSpy(obj[key], depth);
      }
    } else {
      for (let key in obj) {
        console.log(spaces + key);
        objectSpy(obj[key], depth + 1);
      }
    }
  } else {
    console.log(spaces + obj);
  }
}

objectSpy(animals);

///////////////// DOM Traversal /////////////////

// Paste this in the console of your browser.

function walkTheDOM(node, func) {
  func(node);
  node = node.firstChild;
  while (node) {
    walkTheDOM(node, func);
    node = node.nextSibling;
  }
}

// Example usage: Process all Text nodes on the page

walkTheDOM(document.body, function(node) {
  if (node.nodeType === 3) {
    // Is it a Text node?
    var text = node.data.trim();
    if (text.length > 0) {
      console.log(text);
    }
  }
});

////////////// Max Call Stack Size Of Engine ///////////////

// const computeMaxCallStackSize = () => {
//   try {
//     return 1 + computeMaxCallStackSize();
//   } catch(e) {
//     // console.log(e);
//     return 1;
//   }
// }

function computeMaxCallStackSize() {
  try {
    return 1 + computeMaxCallStackSize();
  } catch (e) {
    // Call stack overflow
    return 1;
  }
}

computeMaxCallStackSize();

/////////// No Base Case Example ///////////

function songThatWillNeverEnd() {
  alert(
    "This is the song that never ends.  Yes it goes on and on my friends.  Some people started singing it not knowing what is was.  And they'll continue singing it forever just because..."
  );
  songThatWillNeverEnd();
}

songThatWillNeverEnd();
