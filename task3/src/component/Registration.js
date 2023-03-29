import React, { useState } from 'react'

export const Registration = () => {

   const [user,setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:""
   })

   const [records,setRecords] = useState([])
    
    const handleInput = (e) =>{
         console.log(e.target.name,e.target.value)

         setUser({...user,[e.target.name]:e.target.value})
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()

       const newRecords = {...user}
       console.log(newRecords)
       setRecords([...records,newRecords])
       
       setUser({username:"",email:"",phone:"",password:""})

    }

  return (
   <>
   <form action="" onSubmit={handleSubmit}>
    <div>
        <label htmlFor='username'>Fullname</label>
        <input type='text' value={user.username} onChange={handleInput} name='username' id='username'/>
    </div>

    <div>
        <label htmlFor='email'>Email</label>
        <input type='text' value={user.email} onChange={handleInput} name='email' id='email'/>
    </div>

    <div>
        <label htmlFor='phone'>Phone</label>
        <input type='text' value={user.phone} onChange={handleInput} name='phone' id='phone'/>
    </div>

    <div>
        <label htmlFor='password'>Password</label>
        <input type='text' value={user.password} onChange={handleInput} name='password' id='password'/>
    </div>

    <button type="submit">Registration</button>

   </form>

   <div>
    
    {
        records.map((cur) =>(
            <div>
            <p>{cur.username}</p>
            <p>{cur.email}</p>
            <p>{cur.phone}</p>
            <p>{cur.password}</p>
            </div>
        ))
    }

   </div>
   </>
  )
}
