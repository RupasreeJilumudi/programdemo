import React, { Component } from 'react'
import { actionCreator } from "../component/action/action-axios"
import { connect } from 'react-redux';
import Data from '../mock/MockData'
export class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown1: [],
            dropdown2: [],
            selectdd: '',
            data: '',
            //isLoaded: false
        };
    }
    componentDidMount() {
        this.setState({
            dropdown1: this.props.countries
        });
        //this.props.actionCreator();
        this.props.actionCreator(this.props.countries[0]);

        //this.actionCreator(this.props.countries[0])  
        //actionCreator(this.props.countries[0])
    }
    selectChange(e) {
        this.setState({ selectdd: e.target.value });
        //this.actionCreator(e.target.value);
        //actionCreator(e.target.value);
    }
    handleOnChange(e) {
        this.props.actionCreator(e.target.name);
    }
    render() {
        //const {result, loading, error} = this.props;//new
        return (
            <div>
                <select value={this.state.selectdd} onChange={this.selectChange.bind(this)}>
                    {
                        this.state.dropdown1.map(x => {
                            return <option>{x}</option>
                        })
                    }
                </select>
                <select onChange={this.handleOnChange.bind(this)}>
                    {
                        this.state.dropdown2.map(x => {
                            return <option>{x.name}</option>
                        })
                    }
                </select>
            </div>
        )
    }


}
DropDown.defaultProps = Data
const mapStateToProps = (state) => {
    const { result, loading, error } = state.event.result;
    return {
        result,
        loading,
        error,
    };

};
//export default connect(mapStateToProps)(DropDown);

export default connect(mapStateToProps, { actionCreator })(DropDown);
  //export default DropDown;
