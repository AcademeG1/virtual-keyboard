const keys = [
  {
    code: 'Backquote', default: '§', capsLock: '§', shift: '±', rus: '§', capsLockRus: '§', rusShift: '<',
  },
  {
    code: 'Digit1', default: '1', capsLock: '1', shift: '!', rus: '1', capsLockRus: '1', rusShift: '!',
  },
  {
    code: 'Digit2', default: '2', capsLock: '2', shift: '@', rus: '2', capsLockRus: '2', rusShift: '"',
  },
  {
    code: 'Digit3', default: '3', capsLock: '3', shift: '#', rus: '3', capsLockRus: '3', rusShift: '№',
  },
  {
    code: 'Digit4', default: '4', capsLock: '4', shift: '$', rus: '4', capsLockRus: '4', rusShift: '%',
  },
  {
    code: 'Digit5', default: '5', capsLock: '5', shift: '%', rus: '5', capsLockRus: '5', rusShift: ':',
  },
  {
    code: 'Digit6', default: '6', capsLock: '6', shift: '^', rus: '6', capsLockRus: '6', rusShift: ',',
  },
  {
    code: 'Digit7', default: '7', capsLock: '7', shift: '&', rus: '7', capsLockRus: '7', rusShift: '.',
  },
  {
    code: 'Digit8', default: '8', capsLock: '8', shift: '*', rus: '8', capsLockRus: '8', rusShift: ';',
  },
  {
    code: 'Digit9', default: '9', capsLock: '9', shift: '(', rus: '9', capsLockRus: '9', rusShift: '(',
  },
  {
    code: 'Digit0', default: '0', capsLock: '0', shift: ')', rus: '0', capsLockRus: '0', rusShift: ')',
  },
  {
    code: 'Minus', default: '-', capsLock: '-', shift: '_', rus: '-', capsLockRus: '-', rusShift: '_',
  },
  {
    code: 'Equal', default: '=', capsLock: '=', shift: '+', rus: '=', capsLockRus: '=', rusShift: '+',
  },
  {
    code: 'Backspace', default: 'Backspace', capsLock: 'Backspace', shift: 'Backspace', rus: 'Backspace', capsLockRus: 'Backspace', rusShift: 'Backspace',
  },
  {
    code: 'Tab', default: 'Tab', capsLock: 'Tab', shift: 'Tab', rus: 'Tab', capsLockRus: 'Tab', rusShift: 'Tab',
  },
  {
    code: 'KeyQ', default: 'q', capsLock: 'Q', shift: 'Q', rus: 'й', capsLockRus: 'Й', rusShift: 'Й',
  },
  {
    code: 'KeyW', default: 'w', capsLock: 'W', shift: 'W', rus: 'ц', capsLockRus: 'Ц', rusShift: 'Ц',
  },
  {
    code: 'KeyE', default: 'e', capsLock: 'E', shift: 'E', rus: 'у', capsLockRus: 'У', rusShift: 'У',
  },
  {
    code: 'KeyR', default: 'r', capsLock: 'R', shift: 'R', rus: 'к', capsLockRus: 'К', rusShift: 'К',
  },
  {
    code: 'KeyT', default: 't', capsLock: 'T', shift: 'T', rus: 'е', capsLockRus: 'Е', rusShift: 'Е',
  },
  {
    code: 'KeyY', default: 'y', capsLock: 'Y', shift: 'Y', rus: 'н', capsLockRus: 'Н', rusShift: 'Н',
  },
  {
    code: 'KeyU', default: 'u', capsLock: 'U', shift: 'U', rus: 'г', capsLockRus: 'Г', rusShift: 'Г',
  },
  {
    code: 'KeyI', default: 'i', capsLock: 'I', shift: 'I', rus: 'ш', capsLockRus: 'Ш', rusShift: 'Ш',
  },
  {
    code: 'KeyO', default: 'o', capsLock: 'O', shift: 'O', rus: 'щ', capsLockRus: 'Щ', rusShift: 'Щ',
  },
  {
    code: 'KeyP', default: 'p', capsLock: 'P', shift: 'P', rus: 'з', capsLockRus: 'З', rusShift: 'З',
  },
  {
    code: 'BracketLeft', default: '[', capsLock: '[', shift: '{', rus: 'х', capsLockRus: 'Х', rusShift: 'Х',
  },
  {
    code: 'BracketRight', default: ']', capsLock: ']', shift: '}', rus: 'ъ', capsLockRus: 'Ъ', rusShift: 'Ъ',
  },
  {
    code: 'IntlBackslash', default: '`', capsLock: '`', shift: '~', rus: ']', capsLockRus: ']', rusShift: '[',
  },
  {
    code: 'CapsLock', default: 'CapsLock', capsLock: 'CapsLock', shift: 'CapsLock', rus: 'CapsLock', capsLockRus: 'CapsLock', rusShift: 'CapsLock',
  },
  {
    code: 'KeyA', default: 'a', shift: 'A', capsLock: 'A', rus: 'ф', capsLockRus: 'Ф', rusShift: 'Ф',
  },
  {
    code: 'KeyS', default: 's', shift: 'S', capsLock: 'S', rus: 'ы', capsLockRus: 'Ы', rusShift: 'Ы',
  },
  {
    code: 'KeyD', default: 'd', shift: 'D', capsLock: 'D', rus: 'в', capsLockRus: 'В', rusShift: 'В',
  },
  {
    code: 'KeyF', default: 'f', shift: 'F', capsLock: 'F', rus: 'а', capsLockRus: 'А', rusShift: 'А',
  },
  {
    code: 'KeyG', default: 'g', shift: 'G', capsLock: 'G', rus: 'п', capsLockRus: 'П', rusShift: 'П',
  },
  {
    code: 'KeyH', default: 'h', shift: 'H', capsLock: 'H', rus: 'р', capsLockRus: 'Р', rusShift: 'Р',
  },
  {
    code: 'KeyJ', default: 'j', shift: 'J', capsLock: 'J', rus: 'о', capsLockRus: 'О', rusShift: 'О',
  },
  {
    code: 'KeyK', default: 'k', shift: 'K', capsLock: 'K', rus: 'л', capsLockRus: 'Л', rusShift: 'Л',
  },
  {
    code: 'KeyL', default: 'l', shift: 'L', capsLock: 'L', rus: 'д', capsLockRus: 'Д', rusShift: 'Д',
  },
  {
    code: 'Semicolon', default: ';', capsLock: ';', shift: ':', rus: 'ж', capsLockRus: 'Ж', rusShift: 'Ж',
  },
  {
    code: 'Quote', default: '\'', capsLock: '\'', shift: '"', rus: 'э', capsLockRus: 'Э', rusShift: 'Э',
  },
  {
    code: 'Backslash', default: '\\', capsLock: '\\', shift: '|', rus: 'ё', capsLockRus: 'Ё', rusShift: 'Ё',
  },
  {
    code: 'Enter', default: 'Enter', capsLock: 'Enter', shift: 'Enter', rus: 'Enter', capsLockRus: 'Enter', rusShift: 'Enter',
  },
  {
    code: 'ShiftLeft', default: 'Shift', capsLock: 'Shift', shift: 'Shift', rus: 'Shift', capsLockRus: 'Shift', rusShift: 'Shift',
  },
  {
    code: 'KeyZ', default: 'z', shift: 'Z', capsLock: 'Z', rus: 'я', capsLockRus: 'Я', rusShift: 'Я',
  },
  {
    code: 'KeyX', default: 'x', shift: 'X', capsLock: 'X', rus: 'ч', capsLockRus: 'Ч', rusShift: 'Ч',
  },
  {
    code: 'KeyC', default: 'c', shift: 'C', capsLock: 'C', rus: 'с', capsLockRus: 'С', rusShift: 'С',
  },
  {
    code: 'KeyV', default: 'v', shift: 'V', capsLock: 'V', rus: 'м', capsLockRus: 'М', rusShift: 'М',
  },
  {
    code: 'KeyB', default: 'b', shift: 'B', capsLock: 'B', rus: 'и', capsLockRus: 'И', rusShift: 'И',
  },
  {
    code: 'KeyN', default: 'n', shift: 'N', capsLock: 'N', rus: 'т', capsLockRus: 'Т', rusShift: 'Т',
  },
  {
    code: 'KeyM', default: 'm', shift: 'M', capsLock: 'M', rus: 'ь', capsLockRus: 'Ь', rusShift: 'Ь',
  },
  {
    code: 'Comma', default: ',', shift: '<', capsLock: ',', rus: ',', capsLockRus: 'Б', rusShift: 'Б',
  },
  {
    code: 'Period', default: '.', shift: '>', capsLock: '.', rus: '.', capsLockRus: 'Ю', rusShift: 'Ю',
  },
  {
    code: 'Slash', default: '/', shift: '?', capsLock: '/', rus: '/', capsLockRus: '/', rusShift: '?',
  },
  {
    code: 'ShiftRight', default: 'Shift', capsLock: 'Shift', shift: 'Shift', rus: 'Shift', capsLockRus: 'Shift', rusShift: 'Shift',
  },
  {
    code: 'ControlLeft', default: 'control', capsLock: 'control', shift: 'control', rus: 'control', capsLockRus: 'control', rusShift: 'control',
  },
  {
    code: 'AltLeft', default: 'option', capsLock: 'option', shift: 'option', rus: 'option', capsLockRus: 'option', rusShift: 'option',
  },
  {
    code: 'MetaLeft', default: 'command', capsLock: 'command', shift: 'command', rus: 'command', capsLockRus: 'command', rusShift: 'command',
  },
  {
    code: 'Space', default: 'Space', capsLock: 'Space', shift: 'Space', rus: 'Space', capsLockRus: 'space', rusShift: 'Space',
  },
  {
    code: 'MetaRight', default: 'command', capsLock: 'command', shift: 'command', rus: 'command', capsLockRus: 'command', rusShift: 'command',
  },
  {
    code: 'AltRight', default: 'option', capsLock: 'option', shift: 'option', rus: 'option', capsLockRus: 'option', rusShift: 'option',
  },
  {
    code: 'ArrowLeft', default: 'ArrowLeft', capsLock: 'ArrowLeft', shift: 'ArrowLeft', rus: 'ArrowLeft', capsLockRus: 'ArrowLeft', rusShift: 'ArrowLeft',
  },
  {
    code: 'ArrowUp', default: 'ArrowUp', capsLock: 'ArrowUp', shift: 'ArrowUp', rus: 'ArrowUp', capsLockRus: 'ArrowUp', rusShift: 'ArrowUp',
  },
  {
    code: 'ArrowDown', default: 'ArrowDown', capsLock: 'ArrowDown', shift: 'ArrowDown', rus: 'ArrowDown', capsLockRus: 'ArrowDown', rusShift: 'ArrowDown',
  },
  {
    code: 'ArrowRight', default: 'ArrowRight', capsLock: 'ArrowRight', shift: 'ArrowRight', rus: 'ArrowRight', capsLockRus: 'ArrowRight', rusShift: 'ArrowRight',
  },
];

export default keys;
