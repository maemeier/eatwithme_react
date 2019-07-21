import React, {Component} from 'react'
import './createEvent.css'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import Logo from './image/logoeat.png'



class createEvent extends Component{
  state ={
    title: '',
    body: '',
    person: '',
    image: '',

  }
  render(){
    return (
      <div >
        <div className="eventInput">
            <img className="logoCreateEvent" src={Logo} alt="logo" />


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
            <p className="selectDate"> Selete Date and Time:</p><DatePicker
    selected={this.state.startDate}
    onChange={this.handleChange}
    showTimeSelect
    timeFormat="HH:mm"
    timeIntervals={15}
    dateFormat="MMMM d, yyyy h:mm aa"
    timeCaption="time"
/>

            <div className="input-group">
    <div className="custom-file">
      <input type="file" className="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"/>
      <label className="custom-file-label" for="inputGroupFile04">Choose file</label>
    </div>
    <div className="input-group-append">
      <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
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
