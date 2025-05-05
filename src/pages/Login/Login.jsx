import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contex/AuthContex';

const Login = () => {

  const { SignInUser} = useContext(AuthContext);

  const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    
    SignInUser(email,password)
    .then(result=>{
      console.log('sign in',result.user)
      alert('successfully login')
    })
    .catch(error=>{
      console.log(error);
    })
  }
  return (
    <div className='mt-5 flex justify-center items-center'>
    <div className=''>
    <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-lg">
        <h2 className="text-4xl font-semibold text-center mb-6">Login Here</h2>
        <form onSubmit={handleLogin} className="space-y-4">
           
          
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
                <button className="w-full btn btn-info">
                  Login
                </button>
            </div>
        </form>
        <div>
            <h2 className="btn btn-error mt-3 rounded-lg ">With Google</h2>
        </div>
        <div className="text-center mt-3">
            <p className="text-gray-600">New User SignUp please <Link className="text-[#35b3b3] font-semibold" to='/register'>Sign Up</Link></p>
        </div>
        
    </div>
</div>
</div>
  );
};

export default Login;