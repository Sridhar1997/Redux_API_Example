import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./features/userSlice";

const UserList=()=>{
    const dispatch=useDispatch();
    const {users, loading, error}=useSelector((state)=>state.users)

    useEffect(()=>{
        dispatch(fetchUsers())
    }, [dispatch])

    return(
        <>
        <div style={{textAlign:"center", marginTop:"20px"}}>

            <h2>User List</h2>

            {loading && <p>Loading.....</p>}
            {error && <p>Error: {error}</p>}

            <ul>
                {
                    users.map((user)=>(
                        <li key={user.id}> {user.name} - {user.email}
                         - {user.address.city}</li>
                    ))
                }
            </ul>

        </div>
        </>
    )

}
export default UserList