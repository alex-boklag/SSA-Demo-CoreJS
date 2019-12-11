import { printChessBoard } from './src/task1.js';
import { analizeEnvelopes } from './src/task2.js';
import { sortTriangles } from './src/task3.js';
import { isPalindrome } from './src/task4.js';
import { happyTickets } from './src/task5.js';
import { numericSequence } from './src/task6.js';
import { fibonacciForRange } from './src/task7.js';

(function addShowHideEventListeners() {
  const tasks = ['chess', 'envelopes', 'triangles', 'palindrome', 'tickets', 'sequence', 'fibonacci'];

  tasks.forEach(task => {
    document.querySelector(`.${task} > button`).addEventListener('click', (ev) => {
      const inputsBlock = document.querySelector(`.${task} > .inputs`);

      if (inputsBlock.classList.contains('hidden')) {
        tasks.forEach(task => {
          const inputsBlock = document.querySelector(`.${task} > .inputs`);
          inputsBlock.classList.add('hidden');
          document.querySelector(`.${task} > button`).innerText = 'Show inputs';
        })
        inputsBlock.classList.remove('hidden');
        ev.target.innerText = 'Hide inputs';
      }
      else {
        inputsBlock.classList.add('hidden');
        ev.target.innerText = 'Show inputs';
      }
    })
  })
})();

(function addApplyChessListener() {
  document.querySelector('.chess > .inputs > .apply').addEventListener('click', (ev) => {
    const height = Number(document.querySelector('.chess .inputs .height').value);
    const width = Number(document.querySelector('.chess .inputs .width').value);
    const symbol = document.querySelector('.chess .inputs .symbol').value;

    document.querySelector('.output > .output-area').innerText = printChessBoard(height, width, symbol);
  })
}());

(function addApplyEnvelopesListener() {
  document.querySelector('.envelopes > .inputs > .apply').addEventListener('click', (ev) => {
    const e1 = {
      a: Number(document.querySelector('.envelopes .inputs .a').value),
      b: Number(document.querySelector('.envelopes .inputs .b').value)
    }
    const e2 = {
      c: Number(document.querySelector('.envelopes .inputs .c').value),
      d: Number(document.querySelector('.envelopes .inputs .d').value)
    }

    document.querySelector('.output > .output-area').innerHTML = analizeEnvelopes(e1, e2);
  })
}());

(function addApplyTrianglesListener() {
  document.querySelector('.triangles > .inputs > .apply').addEventListener('click', (ev) => {
    let tempTriangle = document.querySelector('.triangles .inputs .first').value.split(',');
    let [vertice1, vertice2, vertice3] = tempTriangle[0].toLowerCase().split('');
    const first = {
      vertices: tempTriangle[0],
      [vertice1]: Number(tempTriangle[1]),
      [vertice2]: Number(tempTriangle[2]),
      [vertice3]: Number(tempTriangle[3]),
    }

    tempTriangle = document.querySelector('.triangles .inputs .second').value.split(',');
    [vertice1, vertice2, vertice3] = tempTriangle[0].toLowerCase().split('');
    const second = {
      vertices: tempTriangle[0],
      [vertice1]: Number(tempTriangle[1]),
      [vertice2]: Number(tempTriangle[2]),
      [vertice3]: Number(tempTriangle[3]),
    }

    tempTriangle = document.querySelector('.triangles .inputs .third').value.split(',');
    [vertice1, vertice2, vertice3] = tempTriangle[0].toLowerCase().split('');
    const third = {
      vertices: tempTriangle[0],
      [vertice1]: Number(tempTriangle[1]),
      [vertice2]: Number(tempTriangle[2]),
      [vertice3]: Number(tempTriangle[3]),
    }

    document.querySelector('.output > .output-area').innerHTML = sortTriangles([first, second, third]);
  })
}());

(function addApplyPalindromeListener() {
  document.querySelector('.palindrome > .inputs > .apply').addEventListener('click', (ev) => {
    const number = Number(document.querySelector('.palindrome .inputs .number').value);

    document.querySelector('.output > .output-area').innerHTML = isPalindrome(number);
  })
}());

(function addApplyTicketsListener() {
  document.querySelector('.tickets > .inputs > .apply').addEventListener('click', (ev) => {
    const min = document.querySelector('.tickets .inputs .min').value;
    const max = document.querySelector('.tickets .inputs .max').value;

    const result = happyTickets({ min, max });
    if (typeof result === 'string') {
      document.querySelector('.output > .output-area').innerHTML = result;
    }
    else {
      document.querySelector('.output > .output-area').innerHTML =
        `{winner: ${result.winner}, simple: ${result.simple}, hard: ${result.hard}}`;
    }
  })
}());

(function addApplySequenceListener() {
  document.querySelector('.sequence > .inputs > .apply').addEventListener('click', (ev) => {
    const n = Number(document.querySelector('.sequence .inputs .n').value);
    const m = Number(document.querySelector('.sequence .inputs .m').value);

    document.querySelector('.output > .output-area').innerHTML = numericSequence(n, m);
  })
}());

(function addApplyFibonacciListener() {
  document.querySelector('.fibonacci > .inputs > .apply').addEventListener('click', (ev) => {
    const min = Number(document.querySelector('.fibonacci .inputs .minmax').value.split(',')[0]);
    const max = Number(document.querySelector('.fibonacci .inputs .minmax').value.split(',')[1]);
    const length = Number(document.querySelector('.fibonacci .inputs .length').value);

    document.querySelector('.output > .output-area').innerHTML = fibonacciForRange({ min, max, length });
  })
}());