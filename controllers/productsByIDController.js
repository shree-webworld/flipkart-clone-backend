import Product from "../models/productSchema.js";

export const productsByIDController = async (req, res) =>{
                              try {
                                      console.log(req.params);

                                      let productsDetailsByID = await Product.findOne({id:req.params.id});
                                      if(productsDetailsByID)
                                      {
                                        return res.status(201).json(productsDetailsByID);
                                      }else
                                        {
                                          return res.status(404).json({error:"Product not found"});
                                        }
                                  }catch (e)
                                  {
                                    console.log(e);
                                    return res.status(201).json(e);
                                  }
                          }
