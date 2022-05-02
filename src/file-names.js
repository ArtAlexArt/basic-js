const {NotImplementedError} = require( '../extensions/index.js' );

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {

    const count = names.reduce( (acc, el) => {
        acc.hasOwnProperty( el ) ? acc[el]++ : acc[el] = 1
        return acc;
    }, {} )

    for (let i = names.length - 1; i >= 0; i--) {
        if (count[names[i]] + 1) count[names[i]]--
        names[i] = `${names[i]}${(!count[names[i]]) ? '' : '(' + count[names[i]] + ')'}`;
    }

    const temp = new Set( names )
    if (temp.size !== names.length)  renameFiles( names )
    return names

}

// const ttt = renameFiles( [ 'doc', 'doc', 'image', 'doc(1)', 'doc' ] )
// console.log( ttt )
module.exports = {
    renameFiles
};
