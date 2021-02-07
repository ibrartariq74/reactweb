import React from 'react';
import Home from './Home';
import Form from './form';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import  '../App.css';


function Product() {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    console.log(products);


    return (
        <div>
            <Home />
            <Form/>
            <Grid container style={{marginTop:"2%"}}  >
                <Grid container style={{marginLeft:"5%",marginRight:"5%",backGroundColor:"white",boxShadow: "0px 5px 5px #888, 0px -10px 5px #888" }} >
                {products.product.map(product => (

                   
                        <Grid  item lg={3} style={{marginLeft:"4%",marginTop:"2%" }}  >
                            <Grid item key={product.id} >
                               <Link to={`./details/${product.id}`} > <img id="img" style={{ height: "280px", width: "250px" }} src={product.img} /> 
                               </Link>
                                <Grid item >
                                    {product.name}
                                    <span style={{marginLeft:"52%" }} >
                                    ${product.price} 


                                    </span>


                                </Grid>



                            </Grid>

                        </Grid>


                ))}
                </Grid>
                 </Grid>

            

        </div>

    );
}
export default Product;