import React from 'react';
import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

// create a context for authentication
const AuthContext = createContext();

export function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // track if authenication status is being checked
    const [token, setToken] = useState(localStorage.getItem("token"));

    // check if there's a token and fetch the user info
    useEffect(() => {
        const fetchUser = async () => {
            if (token){
                try{
                    const { data } = await axios.get("/user/me", {
                        headers: { Authorization: `Bearer ${token}`}
                    });
                    setUser(data);
                }catch(error){
                    console.error("Couldn't fetch user", error);
                    setUser(null);
                }
            }
            setLoading(false);
        };
        fetchUser();
    }, [token]);

    const login = async (username, password) => {
        try{
            const { data } = await axios.post("/login", { username, password });
            localStorage.setItem("token", data.token);
            setToken(data.token);
        }catch(error){
            console.error("Login failed", error);
            setToken(null);
            setUser(null);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
    };

    const value = {
        user,
        loading,
        login,
        logout
    };

    return function useAuth(){
        <AuthContext.Provider value={value}>
            {loading ? <h2>Loading...</h2> :  children}
        </AuthContext.Provider>
    };
}

export function useAuth(){
    return useContext(AuthContext);
}