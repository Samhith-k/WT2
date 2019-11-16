import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from "./App"
import Login from "./Login"
import PrivateRoute from './PrivateRoute'
import Register from "./Register"

class Routes extends React.Component{

    constructor(props){
        super(props)
        this.state={loggedin:false,email:"",password:""}
    }
    isAuthenticated = () => {
      this.setState({loggedin: true})
    }
    
    render(){
      console.log(this.state.loggedin, this.props)
    return(
        <Router>
          <Switch> 
              <PrivateRoute exact path="/" authenticated={this.state.loggedin} component={App}  />
              <PrivateRoute exact path="/search/:searchresult" authenticated={this.state.loggedin} component={Search} />
              <PrivateRoute exact path="/doctor/:doc_id" authenticated={this.state.loggedin} component={Doctor} />
              <Route exact path="/login" render={() => <Login loggedin={this.state.loggedin} isAuthenticated={this.isAuthenticated}  />} /> 
              <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      )  
    }    
}
export default Routes
