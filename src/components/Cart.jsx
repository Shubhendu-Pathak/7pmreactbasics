import React from "react";
import CartItem from "./CartItems";

class Cart extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

 

    // console.log(this.state.products);
  let {products,handleDecQty,handleIncQty,handleDelItem} = this.props
  console.log(products);
    return (
      <>
        <div className="cart">
          {products.map((product,index) => {
            return (
              <CartItem 
              key={index} 
              product={product} 
              handleIncQty={handleIncQty} 
              handleDecQty={handleDecQty}
              handleDelItem={handleDelItem}
              />
            );
          })}
        </div>
      </>
    );
  }
}
export default Cart;
