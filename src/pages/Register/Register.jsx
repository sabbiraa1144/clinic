import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contex/AuthContex';

const Register = () => {

  const {createUser} = useContext(AuthContext);



  const handleRegister = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password)

    createUser (email,password)
    .then(result=>{
      console.log(result.user)
      const createdAt = result.user?.metadata?.creationTime;
      const newUser = {name,email,createdAt}

    //   save new user to database
    fetch('http://localhost:3000/users',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log('user created to db',data)
        if(data.insertedId){
            alert('Register Success')
        }
    })


    })
    .catch(error=>{
      console.log(error.message);
    })
    
  }
  return (
    <div className='mt-4 flex justify-center items-center'>
    <div className=''>
    <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-lg">
        <h2 className="text-4xl font-semibold text-center mb-6">Register Here</h2>
        <form onSubmit={handleRegister} className="space-y-4">
            <div>
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" className="mt-1 p-2 w-full border rounded-md"  />
            </div>
          
            <div>
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" className="mt-1 p-2 w-full border rounded-md"  />
            </div>
            <div>
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" className="mt-1 p-2 w-full border rounded-md"  />
            </div>
            <div className=''>
                <button className="w-full btn btn-info p-2 rounded-md ">
                   Register
                </button>
            </div>
        </form>
        <div>
            <h2 className="btn btn-error text-center mt-3 rounded-lg ">With Google</h2>
        </div>
        <div className="text-center mt-3">
            <p className="text-gray-600">Already Have An account? <Link className="text-[#35b3b3] font-semibold" to='/login'>Login here</Link></p>
        </div>
        
    </div>
</div>
</div>
  );
};

export default Register;