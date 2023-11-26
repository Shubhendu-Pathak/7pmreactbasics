import React, { useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Us from './Hooks/Us'
import QuizApp from './Hooks/QuizApp'
import Ue from './Hooks/Ue'
import Axget from './axios crud/Axget'
import Axpost from './axios crud/Axpost'
import Axput from './axios crud/Axput'
import Axdel from './axios crud/Axdel'
import Controllable from './Hooks/ConUnconMulcon/Controllable'
import Multicontrollable from './Hooks/ConUnconMulcon/Multicontrollable'
import Uncontrollable from './Hooks/ConUnconMulcon/Uncontrollable'
import Userefone from './Hooks/ConUnconMulcon/Userefone'
import Main from './ImageSearch/Main'
import Main2 from './ImageSearch/Main2'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      products: [
        {
          id:1,
          price: 10,
          title: "Refrigerator",
          qty: 1,
          img: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJpZGdlfGVufDB8fDB8fHww",
        },
        {
          id:2,
          price: 20,
          title: "Kettle",
          qty: 2,
          img: "https://images.unsplash.com/photo-1594213114663-d94db9b17125?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V0dGxlfGVufDB8fDB8fHww",
        },
        {
          id:3,
          price: 30,
          title: "Fluffy Blanket",
          qty: 3,
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

getCartCount(){
let {products}= this.state
let count = 0
products.forEach(product=>{
  count += product.qty
})
return count
}

getCartTotal(){
  let {products} = this.state
  let cartTotal = 0
  products.map(product=>{
   cartTotal = cartTotal + product.qty*product.price
  })
  return cartTotal
}

  render(){
    let {products} = this.state
  return (
    <>
      {/* <Navbar getCartCount={this.getCartCount()}/> */}
   {/* <Cart
   products={products}
   handleIncQty={this.handleIncQty}
   handleDecQty={this.handleDecQty}
   handleDelItem={this.handleDelItem}
   />  */}
   {/* <hr/> */}
   {/* <h1>Total Count = {this.getCartTotal()} </h1> */}

{/* hooks 👇👇 */}
{/* <Us/> */}
{/* <QuizApp/> */}
{/* <Ue/> */}
{/* <Axget/> */}
{/* <Axpost/> */}
{/* <Axput/> */}
{/* <Axdel/> */}
{/* <Controllable/> */}
{/* <Multicontrollable/> */}
{/* <Uncontrollable/> */}
{/* <Userefone/> */}
{/* <Main/> */}
<Main2/>
    </>
  )
}
}

export default App
