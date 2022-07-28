import { createContext, useContext, useState } from "react"

const UserContext = createContext()
export const useUserContext = () => useContext(UserContext)

export const UserProvider = ({children}) => {
    const [user,setUser] = useState({})
    const [notes, setNotes] = useState([])

    return (
        <UserContext.Provider value={{user, notes, setNotes}}>
            {children}
        </UserContext.Provider>
    )
}