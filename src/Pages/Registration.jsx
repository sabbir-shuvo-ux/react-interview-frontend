import axios from 'axios'
import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom"

import { isValidEmail } from '../utils/formUtilits'

const Login = () => {
      const [email, setEmail] = useState('')
      const [name, setName] = useState('')
      const [password, setPassword] = useState('')
      const [username, setUsername] = useState()
      const [error, setError] = useState("")

      const navigate = useNavigate()

      const handleSubmit = async (e) => {
            e.preventDefault();
            const values = {
                  email,
                  password,
                  username,
                  name
            }

            if (!isValidEmail(email)) {
                  setError("Enter valid email")
                  return
            };

            try {
                  const { data } = await axios.post(`/api/users/regi`, values)
                  if (data) {
                        navigate("/login")
                  }
            } catch (err) {
                  setError(err.message)
                  return
            }
      }

      return (
            <>

                  <form className="create" onSubmit={handleSubmit}>
                        <h3>Registration</h3>

                        <label>Name</label>
                        <input
                              value={name}
                              placeholder="Enter your Email"
                              type="text"
                              required
                              onChange={(e) => setName(e.target.value)}
                        />

                        <label>Username</label>
                        <input
                              value={username}
                              placeholder="Enter your Email"
                              type="text"
                              required
                              onChange={(e) => setUsername(e.target.value)}
                        />


                        <label>Email</label>
                        <input
                              value={email}
                              placeholder="Enter your Email"
                              type="email"
                              required
                              onChange={(e) => setEmail(e.target.value)}
                        />

                        <label>Password</label>
                        <input
                              value={password}
                              placeholder="Enter your password"
                              type="password"
                              onChange={(e) => setPassword(e.target.value)}
                        />

                        <button className="btn" type='submit'>Sign Up</button>

                        {email && <div className='error'>{error}</div>}
                        <p>Already have account <Link to='/login'>Login here</Link></p>

                  </form>
            </>
      )
}

export default Login