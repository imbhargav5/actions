async function run(){
    try{
        const space = core.getInput("space");
        const accessToken = core.getInput("access-token");
        let args = null;
        try {
            args = JSON.parse(core.getInput("args"));
        } catch (err) {}

        const getEntry = require('./getEntry');

        const entry = await getEntry({
            space,
            accessToken
        }, args);

        core.setOutput("entry", JSON.stringify(entry));
    }catch(err){
        console.log(err);
    }
}


module.exports = run;

/* istanbul ignore next */
if (require.main === module) {
    run();
}