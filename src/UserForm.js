import React, { useState } from 'react'

const UserForm = () => {
    // const [username, setUsername] = useState("TEST TEST")
    // const [email, setEmail] = useState("Appleseed@apple.com")

    // const handleChange = e => {
    //     setUsername(e.target.value)
    //   }
  
    //   const handleEmailChange = e => {
    //       setEmail(e.target.value)
    //     }
  
    const initialState = {
        username:"",
        email:"",
        password:""
    }

    const handleChange = e => {
        const { name, value} = e.target
        setFormData(data => ({
            ...data, 
            [name] : value
        }))
    }

    const [formData, setFormData] = useState(initialState)
    
    const handleSubmit = () => {
        alert(`Username:::${formData.username} Email:::: ${formData.email}Password::: ${formData.password}`)
        setFormData(initialState)
    }



     return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                    <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="SignUp"
                    value={formData.username}
                    onChange={handleChange}
                    />
                   
                <label htmlFor="email">Email:</label>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='email'
                    value={formData.email}
                    onChange={handleChange}
                    />
                    
                <label htmlFor="password">Password:</label>
                    <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder='password'
                    value={formData.password}
                    onChange={handleChange}
                    />

                <button>Add me to List</button>
            </form>
        </div> 
    )
}
export default UserForm