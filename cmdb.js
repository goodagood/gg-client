/*
 * get command line options
 *
 */


var program  = require('commander');

var uploader = require("./upa.js");

 
program
.version('0.0.1')
.option('-f, --file <path>', 'specify full file path')
.option('-t, --target <path>', 'which folder to upload the file')

.parse(process.argv);

/*
console.log('-- you upload file: ');
if (program.file) console.log(program.file);
console.log('-- to: ');
console.log(program.target);
*/


if (program.file){
    var local_file = program.file;
    console.log('local_file:');
    console.log(local_file);
    if (program.target){
        var target_folder = program.target;
        console.log('target_folder:');
        console.log(target_folder);
        console.log('-- going to upload: ');
        uploader.upload(local_file, target_folder);
    }
}
