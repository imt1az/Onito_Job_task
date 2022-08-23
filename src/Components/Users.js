import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Users = ({info}) => {
    const [users,setUsers] = useState([]);
    

    //  useEffect(()=>{
    //       setdata([info])
    //  },[info])
    //  console.log(data ? data : '')

       useEffect(()=>{
        axios.get('http://localhost:5000/users')
        .then(res=>{
            const {data} = res;
            setUsers(data);

        })
       })
  
    
    return (
        <div>
            <h1 className=' text-red-500'> length is: {users ? users.length : ''}</h1>
        </div>
    );
};

export default Users;