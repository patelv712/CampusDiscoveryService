import React from 'react'

function LoginForm({Login, error}) {
    return (
        <form>
            <div className='inner-form'>
                <h2>LOGIN</h2>
                {/* Error */}
                <div className='form-group'>
                    <label htmlFor='name'>
                        <input type = "text" name = "name" id = "name" />
                    </label>
                </div>
                <div className='form-group'>
                    <label htmlFor='userModel'>
                        <select id="userModels" name="userModels">
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                            <option value="organizer">Organizer</option>
                        </select>
                        <input type="submit" name = "userModel" id = "userModel"/>
                    </label>
                </div>
            </div>
        </form>
    )
}

export default LoginForm