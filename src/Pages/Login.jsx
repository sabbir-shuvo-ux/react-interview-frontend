import axios from 'axios'
import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom"
import { toast } from "react-toastify"
import { isValidEmail } from '../utils/formUtilits'

// context hook
import { useAuthContext } from '../hook/useAuthContext'

const Login = () => {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [error, setError] = useState("")

      const navigate = useNavigate()
      const { dispatch, user } = useAuthContext()

      const handleSubmit = async (e) => {
            e.preventDefault();
            const values = {
                  email,
                  password
            }

            if (!isValidEmail(email)) {
                  setError("Enter valid email")
                  return
            };

            try {
                  const { data } = await axios.post(`/api/users/login`, values)
                  dispatch({ type: 'AUTH_PASS', payload: data })
                  if (user) {
                        window.localStorage.setItem('user', JSON.stringify(user))
                        navigate("/")
                        toast(`wellcome ${user.username}`, {
                              position: "top-center",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: false,
                              draggable: true,
                              progress: undefined,
                              theme: "dark",
                        })
                  }
            } catch (err) {
                  setError(err.message)
                  return
            }


      }

      return (
            <>

                  <form className="create" onSubmit={handleSubmit}>
                        <h3>Login</h3>

                        <label>Email</label>
                        <input
                              value={email}
                              placeholder="Enter your Email"
                              type="text"
                              required
                              onChange={(e) => setEmail(e.target.value)}
                        />

                        <label>Password</label>
                        <input
                              value={password}
                              placeholder="Enter your password"
                              type="text"
                              onChange={(e) => setPassword(e.target.value)}
                        />

                        <button className="btn" type='submit'>Sign In</button>

                        {email && <div className='error'>{error}</div>}
                        <p>don't have account <Link to='/regi'>register here</Link></p>

                  </form>
            </>
      )
}

export default Login