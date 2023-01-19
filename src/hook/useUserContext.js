import { UserContext } from "../context/UserContext";
import { useContext } from "react"

export const useUserContext = () => {
      const context = useContext(UserContext)

      if (!context) {
            throw Error("There is somethig wrong in context")
      }

      return context
}