import React from "react";
import CartItem from "./CartItems";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
        products:[
            {
              price: 777,
              title: "Refrigerator",
              qty: 1,
              img: "",
            },
            {
              price: 359,
              title: "Kettle",
              qty: 3,
              img: "",
            },
            {
              price: 890,
              title: "Blanket",
              qty: 7,
              img: "",
            },
          ]
    }
  }
  render() {
    // console.log(this.state.products);
    let {products} = this.state
    return (
      <>
       <div className="cart">
        {
            products.map((product)=>{
                return  <CartItem product={product} />
            })
        }
       </div>
      </>
    );
  }
}
export default Cart;
