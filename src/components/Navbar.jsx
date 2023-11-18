import './Navbar.css'

function Navbar(props){
    return(
<div className="nav">
    <div className="nav-content">
        <img src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="" />
        <span>{props.getCartCount}</span>
    </div>
</div>
    )
}
export default Navbar