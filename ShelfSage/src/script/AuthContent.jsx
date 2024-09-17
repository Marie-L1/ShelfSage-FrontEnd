import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// Create a context for authentication
const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [token, setToken] = useState(localStorage.getItem('token'));

    // check if there's a token and fetch the user info
    useEffect(() => {
        const fetchUser = async () => {
            if (token) {
                try {
                    const response = await axios.get("http://localhost:8080/user/me", {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    setUser(response.data);
                } catch (error) {
                    console.error("Error fetching user data", error);
                    setUser(null);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchUser();
    }, [token]);

    const login = async (username, password) => {
        try {
            const response = await axios.post("http://localhost:8080/login", { username, password });
            const { token, user } = response.data;
            localStorage.setItem('token', token);
            setToken(token);
            setUser(user);
            setError("");
        } catch (error) {
            console.error("Login failed", error);
            setToken(null);
            setUser(null);
            setError("Login failed");
        }
    };

    const signup = async (username, password, email) => {
        try {
            await axios.post("http://localhost:8080/signup", { username, password, email });
        } catch (error) {
            console.error("Signup failed", error);
            setError("Signup failed");
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
