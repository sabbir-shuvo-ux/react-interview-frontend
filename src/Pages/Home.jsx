import React, { useEffect } from 'react'
import axios from "axios"
import UserCard from '../components/UserCard'

// context hook
import { useUserContext } from '../hook/useUserContext'
import Form from '../components/Form'

const Home = () => {

      const { user, dispatch } = useUserContext()

      useEffect(() => {
            // get users from api
            const getUser = async () => {
                  try {
                        const { data } = await axios.get("/api/users");
                        if (data) dispatch({ type: "GET_USER", payload: data })

                  } catch (error) {
                        console.log(error.message)
                  }
            }
            getUser()
      }, [dispatch])

      return (
            <div className="home">
                  {user && user.map(item => (
                        <UserCard key={item._id} item={item} />
                  ))}

                  <Form />
            </div>
      )
}

export default Home