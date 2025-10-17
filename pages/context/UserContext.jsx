import React, { createContext, useState, useContext } from "react";

export const MyContext = createContext();

const UserProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [name, setName] = useState('');
    return (
        <MyContext.Provider value={{ user, setUser, name, setName }}>
            {children}
        </MyContext.Provider>
        );
};
export default UserProvider;