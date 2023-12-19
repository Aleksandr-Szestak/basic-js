const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
// throw new NotImplementedError('Not implemented');
// remove line with error and write your code here
let arrDomains;
let result = {};
let oneDomain, oneDomainStr;

domains.forEach((item) => {
  arrDomains = item.split('.');
  for (i=0; i<arrDomains.length; i++){
    oneDomain = [];
    oneDomain.unshift(arrDomains[i]);
    for (j=i+1; j<arrDomains.length; j++){
      oneDomain.unshift(arrDomains[j]);
    }
    oneDomainStr = '.' + oneDomain.join('.');
    if ( oneDomainStr in result) {
      result[oneDomainStr] = result[oneDomainStr] + 1;
    }
    else {
      result[oneDomainStr] = 1;
    }
  }
});
return result;
}

module.exports = {
  getDNSStats
};
