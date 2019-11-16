import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.state = { search: "", age: 0 ,clicked:false,doctor_rec:[]}
  }

  handleSubmit = (e) => {
    e.preventDefault()
    /*axios.post("http://127.0.0.1:8000/search/smartSearch",{search:this.state.search})
    .then(
      res=>{
        const values=res.data
        console.log("values are",values)
        this.setState({doctor_rec:values})
      }
      const doctors_rec=this.state.doctor_rec.map(doctor=><Doctor key=doctor.id doctor={doctor})/>
    )
    */
   this.setState({clicked:true})
    console.log(this.state.search)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>enter your query</label>
          <input type="text" placeholder="enter search" onChange={(e) => this.setState({ search: e.target.value })}></input>
          <br></br>
          <label>enter your age  :</label>
          <input type="number" placeholder="enter search" onChange={(e) => this.setState({ age: e.target.value })}></input>
          <br></br>
          <button type="submit">search</button>
          {
            this.state.clicked?
                <p>clicked</p>
                :<div></div>
          }
        </form>

      </div>
    )
  }
}

export default App;
