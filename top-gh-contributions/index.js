const core = require('@actions/core');

async function run(){
    try{
        const token = core.getInput('token')
        const getTopContributions = require('./getTopContributions');
        const [topContributions, notableContributions] = await getTopContributions(token);
        core.setOutput('top-contributions',JSON.stringify(topContributions));
        core.setOutput('notable-contributions',JSON.stringify(notableContributions));
    }catch(err){
        console.log(err);
    }
}

module.exports = run;

/* istanbul ignore next */
if (require.main === module) {
    run();
}