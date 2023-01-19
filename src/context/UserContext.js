import { createContext, useReducer, useState } from "react";

export const UserContext = createContext();

export const userReducer = (state, action) => {
      switch (action.type) {
            case 'GET_USER':
                  return {
                        user: action.payload
                  }
            case 'DELETE_USER':
                  return {
                        user: state.user.filter(i => i._id !== action.payload._id),
                  }
            case 'CREATE_WORKOUT':
                  return {
                        user: [action.payload, ...state.user]
                  }
            default:
                  return state
      }
}

export const UserContextProvider = ({ children }) => {

      const [isformOpen, setIsFormOpen] = useState(false)
      const [editDataLift, setEditDataLift] = useState({})

      const [state, dispatch] = useReducer(userReducer, {
            user: null
      })

      const value = {
            ...state,
            dispatch,
            setIsFormOpen,
            isformOpen,
            editDataLift,
            setEditDataLift
      }

      return (
            <UserContext.Provider value={value}>
                  {children}
            </UserContext.Provider>
      )
}