import React from 'react';
import Home from './Home';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Link } from "react-router-dom";
import '../App.css';


function Cart() {

    const products = useSelector(state => state.AddToCart.product);
    const totalPrice = useSelector(state => state.AddToCart.totalPrice);
    const totalQuantity = useSelector(state => state.AddToCart.totalQuantity);




    return (

        <div style={{ marginTop: "5%" }} >
            <Grid container sm={12}>
                <Grid sm={2} item >

                    ID
                 </Grid>
                <Grid sm={2} item >
                    Image
                    </Grid>
                <Grid sm={2} item >
                    Name
                    </Grid>
                <Grid item >
                    Price
                   

                </Grid>
                <Grid  item sm={2}  style={{ backgroundColor: "lightblue",  marginLeft: "30%" }}  >
                        <Grid item  style={{textAlign:"center"}} >SUMMARY </Grid>
                        <Grid item  style={{marginTop:"2%"}}   >
                            <span style={{marginLeft:"2%"}} >
                                Total Price:<span style={{marginLeft:"2px"}} >{totalPrice}$  </span>
                            </span>
                        </Grid>
                        <Grid item style={{marginTop:"2%"}}   >
                            <span style={{marginLeft:"2%"}} >
                                Total Quantity:{totalQuantity}
                            </span>
                        </Grid>
                        <Grid item > <button className="btnc" > Checkout </button> </Grid>
                    </Grid>
                   

            </Grid>



            {products.map(product => (
                <Grid container sm={12} style={{ marginTop: "2%" }} >
                    <Grid sm={2} item >

                        <h1>{product.id}  </h1>
                    </Grid>
                    <Grid sm={2} item >
                        <img src={product.img} />
                    </Grid>
                    <Grid sm={2} item >
                        <h1>{product.name} </h1>
                    </Grid>
                    <Grid sm={2} item >
                        <h1> ${product.price} </h1>
                    </Grid>
                </Grid>




            ))
            }










        </div>

    );
}
export default Cart;