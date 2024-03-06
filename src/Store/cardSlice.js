import { createSlice } from '@reduxjs/toolkit'

const cardtSlice = createSlice({
name:'card',
initialState: [],
reducers:{
    add(state, action){
        state.push(action.payload);
    }, 
    remove(state, action){
      return state.filter((item)=>item.id !==action.payload );
    },
},
});

export const{add,remove} = cardtSlice.actions;
export default cardtSlice.reducer;