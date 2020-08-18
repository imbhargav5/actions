const core = require('@actions/core');

async function run(){
    try{
        const username = core.getInput("username");
        const main = require('./main');
        const mentorProfile = await main(username);
        console.log('mentor-profile', JSON.stringify(mentorProfile, null, 2))
        core.setOutput("mentor-profile", JSON.stringify(mentorProfile));
    }catch(err){
        console.log(err);
    }
}



module.exports = run;

/* istanbul ignore next */
if (require.main === module) {
    run();
}