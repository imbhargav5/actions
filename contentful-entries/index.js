async function run(){
    try{
        const space = core.getInput("space");
        const accessToken = core.getInput("access-token");
        let args = null;
        try {
            args = JSON.parse(core.getInput("args"));
        } catch (err) {}

        const getEntries = require('./getEntries');

        const [entry, entries] = await getEntries({
            space,
            accessToken
        }, args);

        core.setOutput("entry", JSON.stringify(entry));
        core.setOutput("entries", JSON.stringify(entries));
    }catch(err){
        console.log(err);
    }
}

