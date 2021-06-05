import axios from "axios";
import ACTION_TYPES from '../action/actionTypes';
export const actionCreator = (name) => async (dispatch) => {
    dispatch(fetchStarted());
    await axios
     .get("https://restcountries.eu/rest/v2/region/"+ name)
     .then((res)=> {
         console.log(" successresponse",res.data);
        dispatch(fetchSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchFail(error));//error.message
        console.log(error);
      });
   };
   const fetchStarted = () => {  
       return{       
    type: ACTION_TYPES.FETCH_STARTED,                  
    payload: {
        //event
        isLoading:true,
    },
};
} ;
const fetchSuccess = (result) => {   //data
    return{                            
    type: ACTION_TYPES.FETCH_SUCCESS,
    payload: result,
};  
  };
  const fetchFail = (error) => {
      return {
    type: ACTION_TYPES.FETCH_FAIL,
    payload: error,
      };
  }; 



















//actionCreator.js
 //import axios from "axios";
  //import { selectValue, fetchSuccess, fetchError } from "../action/actionEvent";

/*const actionCreator = (url) => (dispatch) => {
    dispatch(selectValue());                                                                    //in replace of fetchData i use selectValue
  return new Promise(() => {
    axios
      .get(url)
      .then(response => {
        dispatch(fetchSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchError(error));
        console.log(error);
      });
  });
};

export default actionCreator;  */
/* export default function fetchCall(name){
    var url = "https://restcountries.eu/rest/v2/region/"+ name
    axios.get(url)
        .then(res => res.json())
    .then(
        (result) => {
            if(result.length)
            {  
                this.setState({
                    isLoaded: true,
                    dropdown2: result
                });
            }
            else
            {
                this.setState({
                    isLoaded: true,
                    dropdown2: []
                });
            }
        },
     (error) => {
        this.setState({
            isLoaded: false,
            dropdown2: []
        });
    }
  )
    }
 */
  /* export  default function fetchCall(name){
    return(dispatch)=>{
        return axios.get("https://restcountries.eu/rest/v2/region/"+ name).then((res)=>{
            dispatch(selectValue(res.data.name));
            
        })
    }
}



export const selectValue = event => ({
    type: 'SELECTED_VALUE',
    payload: event
})   */