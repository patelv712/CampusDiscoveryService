import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import {useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const {handleSubmit, formState: { errors } } = useForm();
    const [name, setName] = useState('');
    const [category, setCategory] = useState('student');
    const onSubmit = (data) => {
        console.log(data);
        if (name.trim().length == 0) {
            alert("cannot enter empty name");
        } else {
            navigate('/Events', {state:{name: name, category:category}});
            console.log(name);
        }
        
        
    }
    const onChangeHandler = event => {
        setName(event.target.value);
    };
     const categoryHandler = event => {
        setCategory(event.target.value);
     }

        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='inner-form'>
                    <h2>LOGIN</h2>
                    {/* Error */}
                    <div className='form-group'>
                        <label htmlFor='name'>
                            <input
                                type = "text"
                                name = "name"
                                id = "name"
                                value={name} 
                                onChange={onChangeHandler}
                            />
                        </label>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='userModel'>
                            <select id="userModels" name="userModels" onChange={categoryHandler}>
                                <option value="student">Student</option>
                                <option value="teacher">Teacher</option>
                                <option value="organizer">Organizer</option>
                                <option value="admin">Admin</option>
                            </select>
                            <input type="submit" name = "userModel" id = "userModel" />
                        </label>
                    </div>
                </div>
            </form>
        );
};


export default LoginForm;