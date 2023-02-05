import mongoose from "mongoose";

const signupSchema = new mongoose.Schema({
                                            name:
                                            {
                                              type: String,
                                              trim:true,
                                              required:true,
                                              min:2,
                                              max:35
                                            },
                                            email:
                                            {
                                              type: String,
                                              trim:true,
                                              required:true,
                                              unique:true,
                                              lowercase:true
                                            },
                                            password:
                                            {
                                              type: String,
                                              trim:true,
                                              required:true
                                            },
                                            contact_number:
                                            {
                                              type: String,
                                              trim:true,
                                              required:true
                                            },
                                            date:
                                            {
                                              type:Date,
                                              default:Date.now
                                            }
                                        },{
                                            timestamps: true
                                          }
                                      );

const user = mongoose.model('user', signupSchema);

export default user;
