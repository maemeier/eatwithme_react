import React, {Component} from 'react'
import './createEvent.css'
import axios from 'axios'

class createRestaurant extends Component{
  state={
    title: '',
    body: '',
    address: '',
    tel: '',
    price: '',
    restaurant: []
  }


componentWillMount() {
  axios.get('http://localhost:4000/api/getRestaurant').then((res)=>{
    console.log('REST DATA', res.data);

  })

}

createrPlace= (e)=>{
e.preventDefault()
    let restaurant = {
      title: this.state.title,
      body: this.state.body,
      address: this.state.address,
      tel: this.state.tel,
      price: this.state.price
    }

    console.log('restaurant', restaurant);
  }

handleChange =(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
}


  onSubmit =(e)=>{
    e.preventDefault()
    let restaurant = {
      title: this.state.title,
      body: this.state.body,
      address: this.state.address,
      tel: this.state.tel,
      price: this.state.price
    }
    console.log('stateeeeee', this.state);
    this.setState({
      title: '',
      body: '',
      address: '',
      tel: '',
      price: '',

    })
    axios.post('http://localhost:4000/api/restaurant', restaurant,
               {
                   headers: {
                       Authorization: `Bearer ${localStorage.getItem('token')}`
                   }
               }
           ).then((res) => {
               let restaurant = this.state.restaurant
               restaurant.push(res.data)
               console.log('res',res.data)
               this.setState({ restaurant })
           }).catch((err) => {
               console.log('error>>>>>>', err)
           })
  }


  render(){
    return(
      <div>
      <form>
      <h1>Test</h1>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Title</label>
          <input type="text"
            name='title'
            value={this.state.title}
            onChange={e =>{this.handleChange(e)}}
             className="form-control"
              placeholder="Plese add your test"  />
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Body</label>
          <input type="text"
            name='body'
            value={this.state.body}
            onChange={e => {this.handleChange(e)}}
             className="form-control"
              placeholder="Plese add your test" />
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Address</label>
          <input type="text"
            name='address'
            value={this.state.address}
            onChange={e => {this.handleChange(e)}}
             className="form-control"
              placeholder="Plese add your test" />
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Tel</label>
          <input type="text"
            name='tel'
            value={this.state.tel}
            onChange={e => {this.handleChange(e)}}
             className="form-control"
              placeholder="Plese add your test" />
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Price</label>
          <input type="text"
            name='price'
            value={this.state.price}
            onChange={e => {this.handleChange(e)}}
             className="form-control"
              placeholder="Plese add your test" />
        </div>


        <button onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    )
  }


}

export default createRestaurant
