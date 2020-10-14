const router = require('express').Router();
let User = require('../models/user.model.js');

//READ Students
router.route('/').get((req,res) => {

  User.find() //return all the users from the Mangoose database
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error:' + err));

});

router.route('/').get((req,res) => {

  User.findOne({ufid: req.body.ufid}) //return all the users from the Mangoose database
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error:' + err));

});

//Get a single user
router.route('/edit-student/:id').get((req,res) => {
  User.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    }else {
      res.json(data)
    }
  })
})
//update User
router.route('/update-student/:id').put((req,res,next) => {
  User.findByIdAndUpdate(req.params.id, {
    $set:req.body
  }, (error,data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('User updated successfully')
    }
  }
  })
})

//Delete User
router.route('/delete-student/:id').delete((req, res, next) => {
  User.findByIdAndRemove(req.params.id, (error,data) => {
    if(error) {
      return next(error);
    }else {
      res.status(200).json({
        msg:data
      })
    }
  })
})


//CREATE A User
router.route('/add').post((req,res) => {
  const ufid= Number(req.body.ufid);
  const email = req.body.email;
  const userLevel = req.body.userLevel;
  const hoursPrinted = Number(req.body.hoursPrinted);
  const limit = Number(req.body.limit);
  const status = req.body.status;
  const banEnd = Date.parse(req.body.banEnd);
  const professor = req.body.professor;
  const phoneNum = Number(req.body.phoneNum);
  const name = req.body.name;



  const newUser = new User({ufid,email,userLevel,hoursPrinted,limit,status,banEnd,professor,phoneNum,name});

  newUser.save()
    .then(() => res.json("User added"))
    .catch(err => res.status(400).json('Error: '+err));
});


module.exports = router;
