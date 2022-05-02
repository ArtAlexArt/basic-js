const {NotImplementedError} = require( '../extensions/index.js' );

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

    let s = ""
    let count = 1
    str = [ ...str ]
    str.reduce( (_, cel, ind) => {
        if (!ind) return
        if (str[ind - 1] === cel) count++
        else (count === 1) ? s += str[ind - 1] : (s += +count + str[ind - 1], count = 1)
        if (ind === str.length - 1) (count === 1) ? s += cel : s += +count + cel
    }, "" )
    return s
}

// let s = encodeLine( "aabbbca" )
// console.log( s )
module.exports = {
    encodeLine
};
