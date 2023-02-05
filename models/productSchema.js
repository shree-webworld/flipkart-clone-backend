import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
                                            id:
                                            {
                                              type: String,
                                              trim:true
                                            },
                                            url:
                                            {
                                              type: String,
                                              trim:true
                                            },
                                            detailUrl:
                                            {
                                              type: String,
                                              trim:true
                                            },
                                            title:
                                            {
                                              type: Object,
                                              trim:true
                                            },

                                            price:
                                            {
                                              type: Object,
                                              trim:true
                                            },
                                            quantity:
                                            {
                                              type: Number,
                                              trim:true
                                            },
                                            description:
                                            {
                                              type: String,
                                              trim:true
                                            },
                                            discount:
                                            {
                                              type: String,
                                              trim:true
                                            },
                                            tagline:
                                            {
                                              type: String,
                                              trim:true
                                            }
                                        });

const products = mongoose.model('products', productSchema);

export default products;
