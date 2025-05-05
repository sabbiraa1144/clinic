import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
  const loadedUser = useLoaderData();
  const [users,setUsers] = useState(loadedUser);

  return (
    <div className='text-2xl mt-7'>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        {/* <th></th> */}
        <th className='text-xl font-bold '>Name</th>
        <th className='text-xl font-bold '>Email</th>
        <th className='text-xl font-bold '>Registered Time</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(element=>
          <tr key={element._id}>
          {/* <th>1</th> */}
          <th>{element.name}</th>
          <th>{element.email}</th>
          <th>{element.createdAt}</th>
       
        </tr>
        )
      }
      {/* <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr> */}
    </tbody>
  </table>
</div>
    </div>
  );
};

export default Users;