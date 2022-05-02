const {NotImplementedError} = require( '../extensions/index.js' );
const {assert} = require( "chai" );

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
 * => '
 * STRING
     * PLUS00
     * PLUS00
     * PLUS**
 * STRING
     * PLUS00
     * PLUS00
     * PLUS**
 * STRING
     * PLUS00
     * PLUS00
     * PLUS'
 *
 */

function repeater(str, options) {
    const repeatTimes = options.hasOwnProperty( 'repeatTimes' ) ? options.repeatTimes : 1;
    const separator = options.hasOwnProperty( 'separator' ) ? options.separator : '+';
    const addition = options.hasOwnProperty( 'addition' ) ? options.addition : '';
    const additionRepeatTimes = options.hasOwnProperty( 'additionRepeatTimes' ) ? options.additionRepeatTimes : 1;
    const additionSeparator = options.hasOwnProperty( 'additionSeparator' ) ? options.additionSeparator : '|';

    let resA=addition
    for (let i = 1; i < additionRepeatTimes; i++)  resA += additionSeparator + addition;
    let res = str + resA;
    for (let i = 1; i < repeatTimes; i++) res += separator + str + resA;
    return res;
}

// repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionRepeatTimes: 3 })
     // 'REPEATABLE_STRINGADDITION|ADDITION|ADDITION+REPEATABLE_STRINGADDITION|ADDITION|ADDITION'
// repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionSeparator: '222', additionRepeatTimes: 3 })
     // 'REPEATABLE_STRINGADDITION222ADDITION222ADDITION+REPEATABLE_STRINGADDITION222ADDITION222ADDITION'
//repeater('REPEATABLE_STRING', { repeatTimes: 2, separator: '222', addition: 'ADDITION', additionRepeatTimes: 3 })
     // 'REPEATABLE_STRINGADDITION|ADDITION|ADDITION222REPEATABLE_STRINGADDITION|ADDITION|ADDITION'


module.exports = {
    repeater
};
