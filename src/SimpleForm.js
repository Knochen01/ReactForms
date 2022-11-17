import React,{ useState } from "react";



const SimpleInput =() => {

    const INITIAL_STATE ={
        email:""
    }

    const [formData, setFormData] = useState(INITIAL_STATE)
    const [isInValid, setIsInValid] = useState(true)
    const [isTouched, setIsTouched] = useState(false)

    const handleChange = e => {
        setIsTouched(true)
        const { name, value} = e.target
        if (value === "") {
            setIsInValid(true)
        } else {
            setIsInValid(false)
        }

        setFormData(data => ({
            ...data,
            [name] : value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        const { email } = formData
        if (!isInValid) {
            alert(`Added your Email: ${formData.email} to the list`)
            setFormData(INITIAL_STATE)
        }
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h4>Simple Input</h4>
                <label htmlFor="email">Email</label>
                    <input
                    type='email'
                    id='email' 
                    placeholder='email'
                    name='email'  
                    value={formData.email}
                    onChange={handleChange}
                    />
                    {isInValid && isTouched && <span style={{color:"red"}}>Email cannot be blank!</span>}
                    <button>Add me to list!</button>
            </form>

        </div>
    )
}
export default SimpleInput;