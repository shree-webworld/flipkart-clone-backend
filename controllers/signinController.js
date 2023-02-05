import User from "../models/signupSchema.js";

const getSignin = async (req, res) =>{
                              try {
                                      const {email} = req.body;
                                      let loginDetails = await User.find({email});
                                      return res.status(201).json(loginDetails);
                                  }catch (e)
                                  {
                                    console.log(e);
                                    return res.status(201).json(e);
                                  }
                               }


const postSignin =async (req, res) =>{
                        try
                        {
                          console.log(req.body);
                          const {email, password} = req.body;

                          if(!email || !password)
                          {
                            console.log("Please add all the fields");
                            return res.status(422).json({error: "Please add all the fields"});
                          }

                          const login_exits = await User.findOne({email, password});
                          if(login_exits)
                          {
                            console.log(`${email} login successfully`);
                            return res.status(200).json(login_exits);
                          }else
                           {
                            console.log("Invalid Credentials");
                            return res.status(404).json({error:"⚠️Invalid Credentials"});
                           }

                        }catch (e)
                         {
                            console.log(e);
                            return res.status(500).json(e);
                         }
              }


const signinController = async (req, res) =>{
                                                  switch (req.method)
                                                  {
                                                      case "GET":
                                                                    await getSignin(req,res);
                                                                    break;
                                                      case "POST":
                                                                    await postSignin(req,res);
                                                                    break;
                                                    }
                                            }







export default signinController;
