import React, {Component} from 'react'
import './createEvent.css'
// import facebook from './image/facebook.png'
// import instagram from './image/instagram.png'
// import twitter from './image/twitter.png'
// import whatsapp from './image/whatsapp.png'
import logo from './image/logoeat.png'



class createEvent extends Component{
  render(){
    return (
      <div >
        <div className="eventInput">
            <img className="logoCreateEvent" src={logo} alt="logo" />


          <form>
            <div class="form-group">
              <label for="formGroupExampleInput">Title</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Plese add your title"/>
            </div>

            <div class="form-group">
              <label for="formGroupExampleInput2">Description</label>
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Please type here"/>
            </div>

            <div class="form-group">
              <label for="formGroupExampleInput2">Number of Person</label>
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder=" number only"/>
            </div>




            </form>

            <div class="input-group">
    <div class="custom-file">
      <input type="file" class="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"/>
      <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
    </div>
    <div class="input-group-append">
      <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
    </div>
  </div>






      <div className="createEventButton">
          <button className="submitEvent">SUBMIT EVENT</button>
          <button className="cancleEvent">CANCEL EVENT</button>
      </div>
    </div>
  </div>
    );
  }
}


export default createEvent
