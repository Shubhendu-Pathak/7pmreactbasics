import React from "react";
import CartItem from "./CartItems";

class Cart extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [
        {
          id:1,
          price: 777,
          title: "Refrigerator",
          qty: 1,
          img: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJpZGdlfGVufDB8fDB8fHww",
        },
        {
          id:2,
          price: 359,
          title: "Kettle",
          qty: 3,
          img: "https://images.unsplash.com/photo-1594213114663-d94db9b17125?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V0dGxlfGVufDB8fDB8fHww",
        },
        {
          id:3,
          price: 890,
          title: "Fluffy Blanket",
          qty: 7,
          img: "https://images.unsplash.com/photo-1433162653888-a571db5ccccf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY25rZXR8ZW58MHx8MHx8fDA%3D",
        },
      ],
    }

 this.handleIncQty= this.handleIncQty.bind(this)
 this.handleDecQty= this.handleDecQty.bind(this)
 this.handleDelItem = this.handleDelItem.bind(this)
  }

  handleIncQty(para){
    let {products} = this.state
    // console.log(products);
  // console.log(para);
  // console.log( this.state.products.indexOf(para) );
  let index = this.state.products.indexOf(para)
  products[index].qty += 1

  this.setState({products:products})
  }

handleDecQty(para){
  let {products} = this.state
  let index = this.state.products.indexOf(para)

  if(products[index].qty === 0){
    // return null;
    return ;
  }

  products[index].qty -= 1

  // this.setState({products:products})
this.setState({products})

}

handleDelItem(para){
  // console.log(para);
  let {products} = this.state

  let newProducts = products.filter((ele)=>{
   return ele.id !== para
  })

  this.setState({products:newProducts})// updating old array with newly updated array

}

  render() {

 

    // console.log(this.state.products);
    let { products } = this.state;
    return (
      <>
        <div className="cart">
          {products.map((product,index) => {
            return (
              <CartItem 
              key={index} 
              product={product} 
              handleIncQty={this.handleIncQty} 
              handleDecQty={this.handleDecQty}
              handleDelItem={this.handleDelItem}
              />
            );
          })}
        </div>
      </>
    );
  }
}
export default Cart;
