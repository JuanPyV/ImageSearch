const { exec } = require("child_process");

const searchImage = function(expr){
    console.log(expr);
    //`grep '${expr}' ./images/*  `
    exec(`grep image ./images/*`, (error, stdout, stderr) => {
        if (error) {
            //lanzar error
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
} 

exports.searchImage = searchImage;
