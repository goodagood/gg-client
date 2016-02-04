#!/usr/bin/env node
/*
 * upload file with shell to goodogood.me
 * 2015 1025
 */

var request = require('request');
var fs      = require('fs');

//var Source  = '/home/za/tmp/reason.md';
var Source  = '/home/za/tmp/test10.md';
//var Source  = '/home/za/gg/img151110/van-gogh-between.jpg';
//var Source  = '/home/za/gg/img151110/van-gogh-paul.jpg';

var Target  = 'intro/public';

var p = console.log;


function upload(source, target){
    source = source || Source;
    target = target || Target;

    if(!source || !target) return console.log('give source and target, ', source, target);

    p('upload (', source, ') to target folder (', target, ').');

    var formData = {
        file_to_upload: fs.createReadStream(source),
        username: 'intro',
        cwd: target,
        file_hash: 'a389dee'
    };

    request.post(
            {
                url:'http://54.178.71.88:9090/signed-upload/',
                formData: formData
            },
            function optionalCallback(err, httpResponse, body) {
                if (err) {
                    return console.error('upload failed:', err);
                }
                //console.log(httpResponse);
                console.log('Upload successful!  Server responded with:', body);
            });

}


module.exports.upload = upload;


if(request.main === module){
    upload();
}
