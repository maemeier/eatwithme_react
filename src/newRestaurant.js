import React, {Component} from 'react'
import './body.css'
import 'bootstrap/dist/css/bootstrap.min.css'




// import message

class NewRestaurant extends Component{
  state ={
    text: ''
  }

  //function

  // Render
  render(){
      return (

        <div>
          <form onSubmit={(e)=> {
              this.props.createMessage(e, this.state.text)
              this.clearMessage()}
            }>
            <div className="input-group mb-3">
              <input type="text" className="form-control"
                placeholder="Chatzii here..." value={this.state.text} onChange={(e)=>this.changeText(e)}/>
        <div className="input-group-append">
        <button type="submit" id="button-addon2"> Send </button>
                </div>
              </div>
            </form>
        </div>
//



          )
    }

  }
export default NewRestaurant;
