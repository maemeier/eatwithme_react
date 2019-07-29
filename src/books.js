import React, {Component} from 'react'
import './body.css'

import axios from 'axios';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class Books extends Component{
state = {
  count: this.props.books,
  id: this.props.all._id
}

//functions

increment = () => {
    this.setState(prevState => {
       return {count: prevState.count - 1}
    }, ()=>{
			axios.patch(`http://localhost:4000/api/getEvent/${this.state.id}`,{books: this.state.count}).then((res)=> {
        console.log('books');
			}).catch((err)=> {
				console.log('err', err);
			})
		})
}






  render(){

                      return(
                        <div>
                            <FontAwesomeIcon icon={faHeart} onClick ={this.increment} style={{color:"#E55681"}} /> ({this.state.count})
                              <button onClick ={this.increment}> Book this event </button>({this.state.count})
                              </div>
    )
  }


}



export default Books
