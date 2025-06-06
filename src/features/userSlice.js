import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

export const fetchUsers=createAsyncThunk("users/fetchUsers",
    async ()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok){
        throw new Error("Failed to fetch users");
    }
    const data=await response.json();
    return data
}
)

const initialState={
    users:[],
    loading:false,
    error:null,
}

const userSlice=createSlice({
    name:"users",
    initialState,
    reducers:{},

    extraReducers:(builder)=>{
        builder
        .addCase(fetchUsers.pending, (state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchUsers.fulfilled, (state, action)=>{
            state.loading=false;
            state.users=action.payload;
        })
        .addCase(fetchUsers.rejected, 
            (state, action)=>{
                state.loading=false;
                state.error=action.error.message;
            }
        )
    }
})

export default userSlice.reducer



