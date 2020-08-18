const CodeMentor = require("codementor")
const {promisify} = require('util');

const asyncMentorProfile = promisify(CodeMentor.mentorProfile);

async function getMentorProfile(mentorUsername){
    const {data} = await asyncMentorProfile(mentorUsername);
    return data;
}

module.exports = getMentorProfile