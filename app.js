import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectionDB from "./utils/connectionDB.js";
import insertDefaultProducts from "./default_data/insertDefaultProducts.js";
import signupRoutes from "./routes/signupRoutes.js";
import signinRoutes from "./routes/signinRoutes.js";
import productsRoutes from "./routes/productsRoutes.js";
import Stripe from "stripe";
import { v4 as uuid } from 'uuid';


dotenv.config();
mongoose.set('strictQuery', true);
const stripe = Stripe(process.env.SECRET_KEY);


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true } ));
app.use(cors());
connectionDB();
// insertDefaultProducts();

app.use(signupRoutes);
app.use(signinRoutes);
app.use(productsRoutes);

app.get("/", (req, res)=>{
                            res.json(`Welcome to Flipkart clone app`);
                          }
        );


let PORT = process.env.PORT||5001;
app.listen(PORT , () =>{
                          console.log(`Flipkart clone app server is running on http://localhost:${PORT}`);
                       }
          );


app.post('/payment', async (req, res) => {
            console.log(req.body);
            let status, error;
            const { token, amount } = req.body;
            let key = uuid();
            try {
            let transaction =   await stripe.charges.create({
                source: token.id,
                amount,
                currency: 'usd',
              });
              console.log("transaction -",transaction);
              status = 'success';
            } catch (error) {
              console.log(error);
              status = 'Failure';
            }
            return res.json({ error, status });
          });


app.get("/payment", (req, res) =>{
                                    res.json("Stripe payment gateway. ");
                                 }
       );
