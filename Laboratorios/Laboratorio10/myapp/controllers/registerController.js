const Register = require("../models/Register");
const registerController = {};

registerController.insert = (req, res) => {
    if(!req.body.carnet || !req.body.schedule || !req.body.isLate){
        return res.status(400).json({
            message: "there are missieng fiels",
        });
    }
}

let register = new Register();

registerController.updateById = (req, res) => {
    let register = req.body;

    if(!register._id){
        return res.status(400).json({message:"id is needed"});
    }

    Register.update({_id: register._id}, register)
        .then(value => {
            res.status(200).json({message:"Updated"});
        })
        .catch((err)=>{
            res.status(500).json({err:err});
        })
}

registerController.deleteById = (req, res) => {
    let register = req.body;

    if(!register._id){
        return res.status(400).json({message:"id is needed"});
    }

    Register.deteteOne({_id: register._id}, err => {
        if (err) {
            return res.status(400).send({err:err});
        }
        return res.status(200).json({message:"deleted"});
        });
};

registerController.getAll

registerController.getOneById