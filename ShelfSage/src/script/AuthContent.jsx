import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();
const baseURL = "http://localhost:8080";

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true); 
    
            if (token) {
                try {
                    const response = await axios.get(`${baseURL}/user/me`, {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    setUser(response.data);
                } catch (error) {
                    console.error("Error fetching user data", error.response ? error.response.data : error.message);
                    setUser(null);
                    setError("Failed to fetch user data.");
                }
            } else {
                setUser(null); 
            }
            setLoading(false); 
        };
    
        fetchUser();
    }, [token]);
    
    const login = async (username, password) => {
        try {
            const response = await axios.post(`${baseURL}/login`, { username, password });
            const { token } = response.data; // Only extract the token if that's what the API returns
            localStorage.setItem('token', token);
            setToken(token);
            setUser(user);
            // Fetch user data after successful login
            await fetchUser();
            setError(""); 
        } catch (error) {
            console.error("Login failed", error);
            setToken(null);
            setUser(null);
            setError("Incorrect username or password."); 
        }
    };

    const signup = async (username, password, email) => {
        try {
            await axios.post(`${baseURL}/signup`, { username, password, email });
            setError(""); 
        } catch (error) {
            console.error("Signup failed", error);
            setError("Signup failed. Please try again."); 
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
        error,
        login,
        signup,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {loading ? <h2>Loading...</h2> : children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
