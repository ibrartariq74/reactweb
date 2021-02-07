import React from "react";
import Grid from "@material-ui/core/Grid";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import CloseIcon from '@material-ui/icons/Close';

const Form = (props) => {
  const [fullname, setfullname] = useState({
    firstname: "",
    lastname: "",
    item: "",
    items: [],
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setfullname((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const addItem = () => {
    setfullname((preval) => {
      return {
        ...preval,
        items: [...preval.items, preval.item],
        item:"",
      };
    });
  };
  const remove=(id)=>{
   
 setfullname((preval)=>{
  
   return {
     
     ...preval,
     items:[preval.items.filter((arr,index)=>{
       return index !== id;
     })]
     
   }
   
   

 })
        

     
  }

  return (
    <Grid container className="box">
      <Grid container item sm={5} className="innerbox">
        <form>
          <Grid item sm={12}>
            <TextField
              name="firstname"
              onChange={inputEvent}
              fullWidth
              placeholder="enter name"
            />
          </Grid>
          <Grid sm={12} item>
            <TextField
              name="lastname"
              onChange={inputEvent}
              fullWidth
              placeholder="enter lastname"
            />
          </Grid>

          <Grid sm={12} item style={{ marginLeft: "20px", marginTop: "10px" }}>
            <Button type="submit" variant="contained" color="secondary">
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>

      <Grid container item sm={5} className="innerbox2">
        <Grid item container sm={8}>
          <TextField
            name="item"
            onChange={inputEvent}
            fullWidth
            placeholder="enter item"
            value={fullname.item}
          />
        </Grid>
        <Grid item sm={3} style={{ marginLeft: "2px" }}>
          <Button
            onClick={addItem}
            type="submit"
            variant="contained"
            color="secondary"
          >
            Add
          </Button>
        </Grid>
        <Grid container sm={12}>
          {fullname.items.map((itemval,index) => {
            return (
              <div>
              
                
                <li onClick={()=>{
                  remove(index)

                }}  key={index}  >
                
                {itemval  }
                </li>
              </div>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Form;
