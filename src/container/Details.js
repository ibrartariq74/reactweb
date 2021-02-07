import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import '../App.css';
import { Link } from "react-router-dom";


function Details() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [quantity,setquantity]=useState(1);
    function decrement()
    {
        if(quantity > 1 )
        {
            setquantity(quantity-1);
        }
    }

     useEffect(() => {
        dispatch({ type: "PRODUCT_DETAIL", id })

    },[id])
    const product = useSelector(state => state.products.details_product);
   



    return (
        <div style={{ marginTop: "5% " ,backgroundColor:"white"}}>
            <Grid container sm={12} >
                <Grid item sm={3}   >
                    <img style={{  marginLeft: "7%" }} src={product.img} />


                </Grid>
                <Grid item sm={4} >

                    <Grid item > {product.name}
                        <span style={{ marginLeft: "60%" }} >
                            <b>PRICE:</b><span style={{marginLeft:"2%"}} > ${product.price}</span>
                        </span>

                    </Grid>

                    <Grid item style={{ marginTop: "2%" }} > Detail:<br /> {product.desciption} </Grid>


                    <div  >
                       
                    <span onClick={()=> setquantity(quantity+1) } className="inc" >
                        <button>+</button>
                        </span>
                    <span>{quantity}</span>
                    <span onClick={()=> decrement() } className="inc" >
                        <button>-</button>
                        </span>
                       
                            <button className="btn" onClick={ () => dispatch({   type:"ADD_TO_CART", payload:{product,quantity}})
                            }  >Add to cart</button>
                        

                    </div>


                </Grid>
              </Grid>
              <Grid container sm={12}  >
                  <Grid sm={4} >
                  
                  <Link  to={`/cart` } >
                            <button className="btncart">MY CART</button>
                        </Link>
                        </Grid>

                  

              </Grid>


        </div>

    );
}
export default Details;