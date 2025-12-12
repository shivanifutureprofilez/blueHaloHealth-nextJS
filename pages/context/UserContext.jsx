import React, { createContext, useState, useContext } from "react";

export const MyContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [name, setName] = useState('');
    const [categories, setCategories] = useState(null);

    return (
        <MyContext.Provider value={{ user, setUser, name, setName, categories, setCategories }}>
            {children}
        </MyContext.Provider>
        );
};
export default UserProvider;