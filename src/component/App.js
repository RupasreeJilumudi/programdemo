import React , {Component} from 'react';
import Data from '../mock/MockData'
import './styles.css'
import DropDown from '../component/countries-dropdown'
//import actionCreator from './common/action/action-axios';
//import {connect} from 'react-redux';
class  App extends Component {
  render(){
  return (                                        //data={Data} apiCall={actionCreator}--in DropDown
    <div className="App">
      <h1>{this.props.heading}</h1>
      <DropDown/> 
   </div>
  );
}
}
App.defaultProps = Data
export default App;
   
 /* const mapStateToProps = state => ({
  getSelectedValue: state.event.selectValue,
}); 
export default connect(mapStateToProps)(App); */ 