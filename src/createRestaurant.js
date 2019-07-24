import React, {Component} from 'react'
import './createEvent.css'
// import axios from 'axios'


import Logo from './image/logoeat.png'



class createRestaurant extends Component{
  state ={
    title: '',
    body: '',
    address: '',
    tel: '',
    price: '',
    image: null,

  }

  // componentWillMount() {
  //   		axios.post('http://localhost:4000/api/event').then((res)=>{
  //         console.log(res.data);
  //         this.setState({event: res.data})
  //
  //         console.log(this.state.event[0].title)
  //         console.log(this.state.event[0].city)
  //       })
  //     }

      // function
      changeTitle = (e) => {
		this.setState({
			title: e.target.value
		})
	}
    changeBody = (e) => {
   this.setState({
   body: e.target.value
    })
  }
    changeAddress = (e) => {
  this.setState({
  address: e.target.value
  })
}
    changeTel = (e) => {
  this.setState({
  tel: e.target.value
})
}
    changePrice = (e) => {
  this.setState({
  price: e.target.value
})
}
// addFile = (e) => {
// 		this.setState({
// 			image: e.target.images[0]
// 		})
// 	}


  render(){
    return (
      <div >
        <div className="eventInput">
            <img className="logoCreateEvent" src={Logo} alt="logo" />


          <form onSubmit={(e)=>{
              this.props.createRestaurant(e, this.state.title, this.state.body, this.state.address, this.state.tel, this.state.price, this.state.image)}}>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Title</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Plese add your title" value={this.state.title} onChange={(e) => this.changeTitle(e)}/>
            </div>

            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Description</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Please type here" value={this.state.body} onChange={(e) => this.changeBody(e)}/>
            </div>

            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Address: </label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=" number only" value={this.state.address} onChange={(e) => this.changeAddress(e)}/>
            </div>

            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Tel: </label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=" number only"value={this.state.tel} onChange={(e) => this.changeTel(e)}/>
            </div>

            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Price: </label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=" number only"value={this.state.price} onChange={(e) => this.changePrice(e)}/>
            </div>

            <div className="input-group">
    <div className="custom-file">
      <input type="file" className="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
      <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
    </div>
    <div className="input-group-append">
      <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
    </div>
  </div>


<button className="submitEvent" type="submit" >SUBMIT EVENT</button>
  <button className="cancleEvent">CANCEL EVENT</button>
            </form>







      <div className="createRestaurantFooter">


      </div>
    </div>
  </div>
    );
  }
}


export default createRestaurant
