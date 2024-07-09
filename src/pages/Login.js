import { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Login = ({ user }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();


  }


  return (
    <div className={user ? '' :'bg-gray-200 w-full h-screen'}>
        { user ? <Navigate to='/'/> : 
        
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 border-[1px] border-black p-10 '>
            <h1 className='text-center text-4xl font-thin py-5 mb-4'>Login Form</h1>

            <form action="" className='w-[450px] flex flex-col justify-center items-center'>
                <label htmlFor="" className='block text-lg text-left w-full'>Username</label>
                <input type="text" name='username' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} className='w-[450px] mb-4 border-[1px] border-black pl-1'/>
                
                <label htmlFor="" className='block text-lg text-left w-full'>Password</label>
                <input type="password" name='password' placeholder='Password' value={username} onChange={(e) => setUsername(e.target.value)} className='w-[450px] mb-4 border-[1px] border-black pl-1'/>
                <button className='block bg-green-400 hover:bg-green-300 p-3 w-[200px] rounded-md text-lg text-white'>Login</button>
            </form>
        </div>
        }
        
    </div>
  )
}

export default Login