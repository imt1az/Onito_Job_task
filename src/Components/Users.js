import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = ( ) => {
  const [users, setUsers] = useState([]);
   
  //  useEffect(()=>{
  //       setdata([info])
  //  },[info])
  //  console.log(data ? data : '')

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      const { data } = res;
      setUsers(data);
    });
  },[]);

  return (
    <div>
      
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
         {
        users.map((user)=>{
            return <div className="rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">
                <span className="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Name: {user.name}
                </span>
                <span className="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Mobile: {user.mobile}
                </span>
                <span className="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Guardian Details : {user.label}
                 
                </span>
                <span className=" block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Guardian Name : {user.guardian}</span>
                <span className="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Address: {user.address}
                </span>
                <span className="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Country: {user.country}
                </span>
                <span className="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Occupation: {user.occupation}
                </span>
                <span className="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Religion: {user.religion}
                </span>
                <span className="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Age: {user.age}
                </span>
                <span className="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Govt ID: {user.govt_id}
                </span>
                <span className="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Email: {user.email}
                </span>
                <span className="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Emergency: {user.emergency}
                </span>
                <span className="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  State: {user.state}
                </span>
                <span className="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                 City: {user.city}
                </span>
                <span className="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Pincode: {user.pincode}
                </span>
                <span className="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Marital Status: {user.marital}
                </span>
                <span className="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Blood: {user.blood}
                </span>
              </p>
            </div>
          </div>
        })
       }
        
      </div>
    </div>
  );
};

export default Users;
