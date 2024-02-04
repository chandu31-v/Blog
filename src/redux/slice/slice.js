import { createSlice } from "@reduxjs/toolkit";

//initial states
//to check if userlogedin userState
//userData
const initialState = {
    loginState : false,
    userData : null
}

const slice = createSlice({
    name:"loginCheck",
    initialState,
    reducers:{
        userLoggedIn : (state,action)=>{
            state.loginState = true
        },
        userLoggedOut : (state,action)=>{
            state.loginState = false
        }
    }
})

export const {userLoggedIn,userLoggedOut} = slice.actions
export default slice.reducer
