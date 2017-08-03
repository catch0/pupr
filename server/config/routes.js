let path = require('path');
let Users = require('../controllers/users');
let Pups = require('../controllers/pups');


module.exports = function(app){

    //users routes
    app.post('/users', Users.create);
    //pup routes
    app.post('/pups', Pups.create);

    app.delete('/sessions/:id', Users.logout);

    app.all('*', function (req, res, next){
      res.sendFile(path.resolve('./public/dist/index.html'));
  })
}
