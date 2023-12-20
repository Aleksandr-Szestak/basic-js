const { NotImplementedError } = require('../extensions/index.js');

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
// function renameFiles(/* names */) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
// }
function renameFiles(names) {

  console.log(names);

  for (let i=1; i<names.length; i++) {
    
    for (j=i-1; j>=0; j--) {

//    console.log(i, names[i],'---',j, names[j]);
      
      
      if (names[i] === names[j]) {
        
        idx=0;
        /*
        b1=names[j].lastIndexOf('(')
        if (b1 !== -1){
          b2=names[j].lastIndexOf(')')
          if (b2 !== -1){
            //console.log (names[j].slice(b1+1,b2));
            idx=Number(names[j].slice(b1+1,b2))
          }
        }
        */

        names[i] = `${names[i]}(${idx+1})`

      }

    }
  }

  console.log(names);
}

module.exports = {
  renameFiles
};
