import Product from "../models/productSchema.js";

export const productsController = async (req, res) =>{
                              try {
                                      let productsDetails = await Product.find();
                                      return res.status(201).json(productsDetails);
                                  }catch (e)
                                  {
                                    console.log(e);
                                    return res.status(201).json(e);
                                  }
                          }
