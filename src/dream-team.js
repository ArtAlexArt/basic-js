const {NotImplementedError} = require( '../extensions/index.js' );

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (Array.isArray( members )) {
        let res = ""
        members
            .filter( el => typeof el == 'string' )
            .reduce( (_, el) => {
                res += el.trim()[0].toUpperCase()
                return res
            }, 0 )
        return res.split( '' ).sort().join( '' );
    }
    return false;
}

// createDreamTeam( [ 'Peter', 'Adam', 'Gary', 'Bobby', 'Philip', 'Andrea', 'Evelyn', 'Evelyn', 'Kimberly', 'Denise' ] )
//, 'AABDEEGKPP'
module.exports = {
    createDreamTeam
};
