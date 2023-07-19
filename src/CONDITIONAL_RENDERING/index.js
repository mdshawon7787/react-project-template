import React, { Component } from 'react'
import HomePage from './HomePage';
import LoginPage from './LoginPage';

 class CONDITIONAL_RENDERING extends Component {
constructor(props) {
  super(props)

  this.state = {
     isloggedIn : true
  }
}

  render() {
const {isloggedIn} = this.state;
return(
  <div>
    {isloggedIn ? <HomePage/> : <LoginPage/>}
  </div>
    
)
   

  }
  
}

export default CONDITIONAL_RENDERING;
