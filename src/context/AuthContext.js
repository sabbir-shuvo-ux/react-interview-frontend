import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const userReducer = (state, action) => {
      switch (action.type) {
            case 'AUTH_PASS':
                  return {
                        user: action.payload
                  }
            default:
                  return state
      }
}

export const AuthContextProvider = ({ children }) => {

      const [state, dispatch] = useReducer(userReducer, {
            user: null
      })

      const value = {
            ...state,
            dispatch,
      }

      return (
            <AuthContext.Provider value={value}>
                  {children}
            </AuthContext.Provider>
      )
}