const display = document.getElementById('display');
const buttons = document.querySelector('.buttons');

const MAX_LENGTH = 40;

function setDisplay(val){
  display.value = val;
}

function appendToDisplay(char){
  if(display.value === '0' && char !== '.') {
    setDisplay(char);
  } else if (display.value.length < MAX_LENGTH) {
    setDisplay(display.value + char);
  }
}

function clearAll(){
  setDisplay('0');
}

function backspace(){
  if(display.value.length <= 1){
    setDisplay('0');
  } else {
    setDisplay(display.value.slice(0, -1));
  }
}

function safeEvaluate(expr){
  // replace visual operators with JS ones
  const jsExpr = expr.replace(/×/g, '*').replace(/÷/g, '/');
  // only allow digits, operators, parentheses, decimal point and spaces
  if(!/^[0-9+\-*/().\s]+$/.test(jsExpr)) throw new Error('Invalid input');
  // Evaluate in a safe Function scope
  // eslint-disable-next-line no-new-func
  return Function('"use strict";return (' + jsExpr + ')')();
}

function calculate(){
  try {
    const result = safeEvaluate(display.value);
    setDisplay(String(result));
  } catch(e){
    setDisplay('Error');
    setTimeout(() => clearAll(), 900);
  }
}

buttons.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if(!btn) return;

  const action = btn.dataset.action;
  const value = btn.dataset.value;

  if(action === 'clear') { clearAll(); return; }
  if(action === 'back') { backspace(); return; }
  if(action === 'equals') { calculate(); return; }

  if(value){
    appendToDisplay(value);
  }
});

// Keyboard support
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if(/^[0-9]$/.test(key)) appendToDisplay(key);
  else if(key === '.') appendToDisplay('.');
  else if(key === 'Enter') { e.preventDefault(); calculate(); }
  else if(key === 'Backspace') backspace();
  else if(key === 'Escape') clearAll();
  else if(key === '+') appendToDisplay('+');
  else if(key === '-') appendToDisplay('-');
  else if(key === '*') appendToDisplay('×');
  else if(key === '/') appendToDisplay('÷');
  else if(key === '(' || key === ')') appendToDisplay(key);
});