import React, { Component } from 'react';
import './App.css';
import NavMenu from './component/NavMenu';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <div>
      <NavMenu/>
    </div> );
  }
}
 
export default App;