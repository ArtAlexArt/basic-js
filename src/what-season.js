const { NotImplementedError } = require('../extensions/index.js');
const {checkForThrowingErrors} = require( "../extensions" );

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) throw new Error("Invalid date!");
  let m=date.getMonth()
  const ar=['winter','winter','spring','spring','spring','summer','summer','summer','fall','fall','fall','winter']
  return ar[m];
}

module.exports = {
  getSeason
};
