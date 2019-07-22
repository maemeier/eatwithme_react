import React, {Component} from 'react'
import axios from 'axios'
import './signup.css'
import logo from './image/logoeat.png'

class Signup extends Component{
  // data
  state = {
    name: '',
    email: '',
    password: ''
  }

  // function
    changeName = (e)=>{
      this.setState({name: e.target.value})
    }
    changeEmail = (e)=>{
      this.setState({email: e.target.value})
    }
    changePassword = (e)=>{
      this.setState({password: e.target.value})
    }
    signup = (e) => {
		e.preventDefault()
		axios.post('http://localhost:4000/api/signup', this.state).then((res) => {
			localStorage.setItem('token', res.data.token)
			this.props.auth()
		}).catch((err) => {
			console.log('err', err)
		})
	}



// render

render() {
  return (

    <div className="row">
      <div className="col-4 offset-4">
          <img className="logoSignup" src={logo} alt="logo" />
        <div className="card signup">
          <div className="card-body">
            <p>Please sign up or login to join the event</p>
            <form onSubmit={(e) => this.signup(e)}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Full Name..." value={this.state.name} onChange={(e) => this.changeName(e)} />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email..." onChange={(e) => this.changeEmail(e)}/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Password..." onChange={(e) => this.changePassword(e)}/>
              </div>
              <button className="btn btn-success">Signup</button>
              <p>Already have account? Log in</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
}




export default Signup
