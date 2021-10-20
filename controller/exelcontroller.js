const Policy = require('../models/policy.model');
const Agent = require('../models/agent.model');
const user = require('../models/user.model');

const readExelFile = require('read-excel-file');

module.exports.upload = async (req, res) => {
    try {
        if(req.file === undefined){
            return res.status(400).send("Please upload an excel file!");
        }
        let path = __dirname+ '/middleware/uploads/' + req.file.fileName;
        readExelFile(path).then((rows) => {
           rows.shift();
           let agent = {
            agent:row[0]
        }
        let user = {
            name: row[16],
            adress: row[20],
            dob: row[23],
            phone: row[19],
            state: row[21],
            email: row[14],
            zip: row[22],
            gender: row[15],
            userType: row[1]
        }
        let policy = {
            policyNumber: row[4],
            policyStartDate: row[10],
            policyEndDate: row[11],
            policyCategory: row[2],

    }
        let newUser = new User({user})
        newUser.save();
        let newAgent = new Agent({agent})
        newAgent.save();
        let newPolicy = new Policy({policy})
        newPolicy.save()
        })
    } catch (err) {
        return res.status(400).json(err)
    }
}

