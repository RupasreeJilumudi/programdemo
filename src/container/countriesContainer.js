import {connect} from 'react-redux';
//import {selectValue} from '../component/common/action/actionEvent'
import * as actionCreators from '../component/common/action/aindex'
import DropDown from '../component/countries-dropdown'
const mapDispatchProps = (dispatch) => ({
    selectValue: (event) =>dispatch(selectValue(event)),
    //apiCall: url => dispatch(apiCall(url))
}); 
export default connect(mapDispatchProps, actionCreators)(DropDown);





