const router = require("express").Router();
const axios = require("axios");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

router.post("/google", async (req,res)=>{

  try{

    const { token } = req.body;

    const googleRes = await axios.get(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${token}`
    );

    const { name,email,picture } = googleRes.data;

    // improve image quality
    const profilePicture = picture
      ? picture.replace("=s96-c","=s400-c")
      : `https://ui-avatars.com/api/?name=${name}`;

    let user = await User.findOne({email});

    if(!user){

      user = await User.create({
        name,
        email,
        picture:profilePicture
      });

    }

    const jwtToken = jwt.sign(
      {id:user._id},
      process.env.JWT_SECRET,
      {expiresIn:"1d"}
    );

    res.json({
      user,
      token:jwtToken
    });

  }

  catch(error){

    console.log(error);

    res.status(500).json({
      message:"Error"
    });

  }

});

module.exports = router;