import mongoose from "mongoose";
import products from "../models/productSchema.js";
import {productsDefaultData} from "./productsDefaultData.js";


const insertDefaultProducts = async () =>{
                                      try
                                      {
                                        // await products.deleteMany({});    -if data gets duplicated or unique in model Schema
                                        await products.insertMany(productsDefaultData);
                                        console.log(' default product Data imported Successfully');

                                      }catch (e)
                                        {
                                          console.log(e);
                                        }
                                  }

export default insertDefaultProducts;
