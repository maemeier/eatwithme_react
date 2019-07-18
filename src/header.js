import React, {Component} from 'react'
import './header.css'
import logo from './image/logoeat.png'
import pizza from './image/pizza.png'
import drink from './image/drink.png'
import bread from './image/bread.png'



class Header extends Component{
  render(){
    return (
      <div className="header">

        <img className="logo" src={logo} alt="logo" />
        <h1>EAT WITH ME</h1>
        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h5>
        <h5>sed do eiusmod tempor incididunt ut labore et dolore ident,</h5>
        <h5>sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>

        <button>CREATE EVENT</button>
        <br />
        <img className="food"src={pizza} alt="pizza"/> <span className="food">FOOD</span>
        <img className="food"src={drink} alt="drink"/> <span className="food">DRINK</span>
        <img className="food"src={bread} alt="bread"/> <span className="food">BAKERY</span>

      </div>
    );
  }
}


export default Header
