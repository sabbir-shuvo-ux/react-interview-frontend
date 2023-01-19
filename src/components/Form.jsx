import axios from 'axios'
import { useState } from 'react'

import { isValidEmail, hasSpecialChar } from '../utils/formUtilits'

// context hook
import { useUserContext } from '../hook/useUserContext'

const Form = () => {

      const [name, setName] = useState('')
      const [username, setUsername] = useState('')
      const [email, setEmail] = useState('')
      const [image, setImage] = useState('')

      const [error, setError] = useState("")

      const { isformOpen, setIsFormOpen, editDataLift, dispatch } = useUserContext()

      const handleSubmit = async (e) => {
            e.preventDefault();
            const values = {
                  name,
                  username,
                  image,
                  email
            }

            if (hasSpecialChar(username)) {
                  setError("You can't use special symbol in your user name")
                  return
            }

            if (!isValidEmail(email)) {
                  setError("Enter valid email")
                  return
            };


            try {
                  await axios.patch(`/api/users/${editDataLift._id}`, values)

                  const { data } = await axios.get("/api/users")
                  dispatch({ type: 'GET_USER', payload: data })
            } catch (err) {
                  console.log(err.message)
            }

            setIsFormOpen(false)
      }

      const handleOverlay = () => {
            setIsFormOpen(false)
            setEmail('')
            setName('')
            setUsername('')
            setImage('')
      }

      return (
            <>
                  <div
                        onClick={() => handleOverlay()}
                        className={isformOpen ? "form-back-shadow" : "d-none"}
                  ></div>

                  <form className={isformOpen ? "create" : "d-none"} onSubmit={handleSubmit}>
                        <h3>Edit " {editDataLift.name} "</h3>

                        <label>Name </label>
                        <input
                              value={name}
                              type="text"
                              required
                              onChange={(e) => setName(e.target.value)}
                        />

                        <label>Username</label>
                        <input
                              value={username}
                              type="text"
                              required
                              onChange={(e) => setUsername(e.target.value)}
                        />

                        <label>Email</label>
                        <input
                              value={email}
                              type="text"
                              required
                              onChange={(e) => setEmail(e.target.value)}
                        />

                        <label>Image</label>
                        <input
                              value={image}
                              type="text"
                              onChange={(e) => setImage(e.target.value)}
                        />

                        <button className="btn" type='submit'>Add Workout</button>

                        {email && <div className='error'>{error}</div>}
                  </form>
            </>
      )
}

export default Form