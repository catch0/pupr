let mongoose = require('mongoose');
let Pup = mongoose.model("Pup");

class PupsController {
    create(req, res){
        Pop.find({name: req.body.name},(err,pup)=>{
            if(err){return res.json(err)}
            else if(!user){
                Pup.create(req.body,(err,pup)=>{
                    if(err){return res.json(err)}
                    return res.json(pup)
                })
            }
            else{
                return res.json(pop)
            }
        })
    }
  }
module.exports = new PupsController();
