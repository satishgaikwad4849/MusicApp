/*const initialState={
    age:21,
}

 const Rootreducer = (state = initialState,action)=>{
    const newState={...state};
    switch(action.type){
        case "ADD": 
            newState.age += action.value;
            break;
        
        case "SUBSTRACT": 
            newState.age -= action.value;
            break;
    }
    return newState; 
};*/
const Rootreducer = (state = {}, action) => {
    switch (action.type) {
       case 'GET_NEWS':
          return { ...state, loading: true };
          case 'NEWS_RECEIVED':
            console.log("action.json",action.json)
        return { ...state, news: action.json, loading: false }
        
       default:
          return state;
     }
  };
export default Rootreducer;