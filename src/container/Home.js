
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    carousel: {
      
      [theme.breakpoints.down('md')]: {
       display:"none"
      },
      
     
      
    }
    
        
  }));

 
function Home(props)
{
    const classes=useStyles();
 
    var items = [
        {
           url:"https://img.freepik.com/free-vector/summer-clothes-set_74855-446.jpg?size=626&ext=jpg"
        },
        {
            url:"https://img.freepik.com/free-vector/summer-clothes-set_74855-446.jpg?size=626&ext=jpg"
        },
        {
          url:"https://img.freepik.com/free-vector/summer-clothes-set_74855-446.jpg?size=626&ext=jpg"
        }
    ]
 
    return (
        <Carousel className={classes.carousel}  >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
 
function Item(props)
{
   
    return (
      <Grid Container style={{backgroundColor:"acqua"}}   >
      <img src={props.item.url}  style={{width:"60%" ,height:"600px",marginLeft:"22%" }}  />
      </Grid>
    )
}
export default Home;