const core = require('@actions/core');

async function run(){
    try{
        const space = core.getInput("space");
        const accessToken = core.getInput("access-token");
        let args = null;
        try {
            args = JSON.parse(core.getInput("args"));
        } catch (err) {}

        const getEntries = require('./getEntries');
        const entries = await getEntries({
            space,
            accessToken
        }, args);
        console.log('entries', JSON.stringify(entries, null, 2))
        core.setOutput("entries", JSON.stringify(entries));
    }catch(err){
        console.log(err);
    }
}



module.exports = run;

/* istanbul ignore next */
if (require.main === module) {
    run();
}