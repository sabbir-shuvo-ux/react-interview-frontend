import React from 'react'
import axios from 'axios'
import { AiFillDelete } from "react-icons/ai"
import { TbEdit } from "react-icons/tb"
import { toast } from "react-toastify"

// dummy img
import userImg from "../img/user.png"

// context hook
import { useUserContext } from '../hook/useUserContext'

const UserCard = ({ item }) => {
      const { dispatch, setIsFormOpen, setEditDataLift } = useUserContext()

      // delete user
      const handleDelete = async (id) => {
            try {
                  const { data } = await axios.delete(`/api/users/${id}`)
                  dispatch({ type: "DELETE_USER", payload: data })

                  toast("User deleted successfully", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                  })

            } catch (err) {
                  console.log(err.message)
            }
      }

      // update user info
      const handleEdit = async (id) => {
            setIsFormOpen(true)

            try {
                  const { data } = await axios.get(`/api/users/${id}`)
                  setEditDataLift(data)
            } catch (error) {
                  console.log(error.message)
            }

      }

      return (
            <div className='user-details'>
                  <img src={item.image ? item.image : userImg} alt="img" style={{ width: "100px" }} />
                  <h4> {item.name} <sup className={item.status ? "active" : "block"}> {item.status ? "Active" : "Block"} </sup></h4>
                  <p> <strong>Email : </strong> {item.email} </p>
                  <p> <strong>Username : </strong> {item.username} </p>

                  <div className="options">
                        <span onClick={() => handleDelete(item._id)}>
                              <AiFillDelete />
                        </span>
                        <span onClick={() => handleEdit(item._id)}>
                              <TbEdit />
                        </span>
                  </div>
            </div>
      )
}

export default UserCard