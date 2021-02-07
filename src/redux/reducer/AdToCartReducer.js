const intialstate={
    product:[],
    totalPrice:0,
    totalQuantity:0,
}

const AdToCart= (state=intialstate,action) =>{
    switch(action.type)
    {
        case "ADD_TO_CART":
            
        const {product,quantity} =action.payload;
        const check = state.product.find(pro => pro.id == action.payload.product.id)
        const tprice=state.totalPrice + product.price * quantity;
        const tquantity=state.totalQuantity +quantity;
        if(check)
        {
            return {
                ...state,
                totalPrice:tprice,
                totalQuantity:tquantity,

            }
        }
        else
        {
            
            return{
                ...state,
                product:[...state.product,product],
                totalPrice:tprice,
                totalQuantity:tquantity,
            }

        }

        default:
            return state;
    }

}
export default AdToCart;