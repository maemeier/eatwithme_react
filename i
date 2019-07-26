state = {
  title: '',
  body: '',
  address: '',
  tel: '',
  price: '',
  test:''
}
handleChangeTest =(e)=>{
this.setState({
  test:e.target.value
})
console.log(this.state.test);
}
createRestaurant = (e) => {
  e.preventDefault();
}

componentWillMount() {
  axios.post('http://localhost:4000/api/restaurant')
}

changeInput = (e, x) => {
  this.setState({
    x: e.target.value
  })
}

onChange =(e, x) =>{
  console.log('Helloooo');
  this.setState ({
    x: e.target.value
  })
}
// addFile = (e) => {
// 		this.setState({
// 			image: e.target.images[0]
// 		})
// 	}

print =(e)=>{
console.log();
}

render(){
  return (
    <div >
      <div className="eventInput">
          <img className="logoCreateEvent" src={Logo} alt="logo" />


        <form onSubmit={this.createRestaurant}>
          <h1>Test</h1>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Test</label>
              <input type="text"
                value={this.state.test}
                onChange={this.handleChangeTest}
                 className="form-control"
                  placeholder="Plese add your test" />
            </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Title</label>
            <input type="text"
              className="form-control"
              placeholder="Plese add your title" value={this.state.title} onChange={(e) => this.changeInput(e, 'title')}/>
          </div>

          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Description</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Please type here" value={this.state.body} onChange={(e) => this.changeInput(e, 'body')}/>
          </div>

          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Address: </label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=" number only" value={this.state.address} onChange={(e) => this.changeInput(e, 'address')}/>
          </div>

          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Tel: </label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=" number only"value={this.state.tel} onChange={(e) => this.changeInput(e, 'tel')}/>
          </div>

          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Price: </label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=" number only"value={this.state.price} onChange={(e) => this.changeInput(e, 'price')}/>
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


<button type="submit" >SUBMIT EVENT</button>
<button className="cancleEvent">CANCEL EVENT</button>
          </form>







    <div className="createRestaurantFooter">


    </div>
  </div>
</div>
  );
}
}
