const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  if (typeof str !== 'string') {
    str = String(str);
  }

  if (options !== undefined &&
    options.addition !== undefined &&
    typeof options.addition !== 'string') {
    options.addition = String(options.addition);
  }

  let _separator, _additionSeparator;

  if (options !== undefined && options.separator !== undefined) {
    _separator = options.separator;
  } else {
    _separator = '+';
  }

  if (options !== undefined && options.additionSeparator !== undefined) {
    _additionSeparator = options.additionSeparator;
  } else {
    _additionSeparator = '|';
  }

  let _repeatTimes, _additionRepeatTimes

  if (options !== undefined && options.repeatTimes !== undefined) {
    _repeatTimes = options.repeatTimes;
  } else {
    _repeatTimes = 1;
  }

  if (options !== undefined && options.additionRepeatTimes !== undefined) {
    _additionRepeatTimes = options.additionRepeatTimes;
  } else {
    _additionRepeatTimes = 1;
  }

  let _addition = '';

  if (options !== undefined && options.addition !== undefined) {
    _addition += (options.addition + _additionSeparator).repeat(_additionRepeatTimes - 1);
    _addition += options.addition;
  }

  let result = '';

  result += (str + _addition + _separator).repeat(_repeatTimes - 1);
  result += str + _addition;

  return result;
}

module.exports = {
  repeater
};
