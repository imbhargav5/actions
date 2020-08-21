const core = require('@actions/core');
const fs = require('fs').promises;

async function run(){
    try{
        const url = core.getInput('url')
        const outputFilePath = core.getInput('output-file-path')
        const createPDF = require('./createPDF');
        const pdf = await createPDF(url, {
            executablePath : 'google-chrome-unstable'
        });
        await fs.writeFile(outputFilePath ,pdf);
    }catch(err){
        console.log(err);
    }
}

module.exports = run;

/* istanbul ignore next */
if (require.main === module) {
    run();
}