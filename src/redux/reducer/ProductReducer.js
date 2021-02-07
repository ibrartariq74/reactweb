import { findRenderedComponentWithType } from "react-dom/test-utils";

const intialstate={
    product:[ 

    
        {id:1,
        name:"t-shirt",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDt9EJMMhKW5hQalIJzZUttXvthjG4VbINg&usqp=CAU",
        price:21,
        desciption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis lacus sit amet lacus faucibus euismod. Praesent imperdiet pellentesque libero ac commodo. Donec vehicula lorem nec porttitor pretium. Quisque in euismod velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo mattis "
        },
        {id:2,
            name:"t-shirt",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDt9EJMMhKW5hQalIJzZUttXvthjG4VbINg&usqp=CAU",
            price:21,
            desciption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis lacus sit amet lacus faucibus euismod. Praesent imperdiet pellentesque libero ac commodo. Donec vehicula lorem nec porttitor pretium. Quisque in euismod velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo mattis "
        },
            {id:3,
                name:"t-shirt",
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDt9EJMMhKW5hQalIJzZUttXvthjG4VbINg&usqp=CAU",
                price:21,
                desciption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis lacus sit amet lacus faucibus euismod. Praesent imperdiet pellentesque libero ac commodo. Donec vehicula lorem nec porttitor pretium. Quisque in euismod velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo mattis "
       
            },
            {id:4,
                name:"t-shirt",
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDt9EJMMhKW5hQalIJzZUttXvthjG4VbINg&usqp=CAU",
                price:21,
                desciption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis lacus sit amet lacus faucibus euismod. Praesent imperdiet pellentesque libero ac commodo. Donec vehicula lorem nec porttitor pretium. Quisque in euismod velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo mattis "
       
            },
            {id:5,
                name:"t-shirt",
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDt9EJMMhKW5hQalIJzZUttXvthjG4VbINg&usqp=CAU",
                price:21,
                desciption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis lacus sit amet lacus faucibus euismod. Praesent imperdiet pellentesque libero ac commodo. Donec vehicula lorem nec porttitor pretium. Quisque in euismod velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo mattis "
       
            },
            {id:6,
                name:"t-shirt",
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDt9EJMMhKW5hQalIJzZUttXvthjG4VbINg&usqp=CAU",
                price:21,
                desciption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis lacus sit amet lacus faucibus euismod. Praesent imperdiet pellentesque libero ac commodo. Donec vehicula lorem nec porttitor pretium. Quisque in euismod velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo mattis "
       
            },
    

    ],
    details_product:{}

}
function ProductReducer(state=intialstate,action)
{
    switch (action.type)
    {
        case "showdetail":
                return state+1;
        case "PRODUCT_DETAIL":
            //console.log(action.id)
           const result= state.product.find(product  => product.id == action.id );
          
            //console.log(result);
        return {
            ...state,
            details_product:result,
        }
        
        break;

        default:
            return state;
    }


}
export default ProductReducer;