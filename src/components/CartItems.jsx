import React from "react";

class CartItem extends React.Component {
  constructor(props) {
    super(props);

    this.increaseQty = this.increaseQty.bind(this)
  }

  increaseQty(){
  console.log('increased');
  }




  render() {
 console.log(this.props.product);
    let { title, price, qty } = this.props.product;
    return (
      <>
        <div className="cart-item">
          <div className="left-block">
            <img style={imgStyle.image} src="" alt="" />
          </div>
          <div className="right-block">
            <p style={{ fontSize: "30px" }}>{title}</p>
            <p>$ {price}</p>
            <p>Qty : {qty}</p>
            <div className="cart-item-actions">
              {/* ICONS */}
              <img
                src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png"
                alt=""
                className="action-icons"
                onClick={this.increaseQty}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/11519/11519974.png"
                alt=""
                className="action-icons"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/3221/3221897.png"
                alt=""
                className="action-icons"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const imgStyle = {
  image: {
    height: "120px",
    width: "120px",
    borderRadius: "10px",
    border: "3px solid blue",
  },
};

export default CartItem;
