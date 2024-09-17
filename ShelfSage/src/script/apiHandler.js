import axios from "axios";

class APIhandler {
    constructor(){
        this.baseURL = process.env.REACT_APP_BACKEND_URL;
    }

    // User login
    async loginUser(username, password){
        try {
            const response = await axios.post(`${this.baseURL}/login`, { username, password });
            return response.data; // expecting the token and user data
        } catch (error) {
            console.error("Error logging in user", error);
        }
    };

    // User signup
    async signUpUser(username, password, email){
        try {
            const response = await axios.post(`${this.baseURL}/signup`, { username, password, email });
            return response.data;
        } catch (error) {
            console.error("Error signing up user", error);
        }
    };

    async isLoggedIn(token){
        try{
            const response = await axios.post(`${this.baseURL}/loggedIn`, {
                headers: { Authorization: `Bearer ${token}`}
            });
            return response.data; // expecting user data if logged in
        }catch(error){
            console.error("Error signing up user", error);
        }
    };

    // Fetch user profile - requires token
    async getUserProfile(token){
        try {
            const response = await axios.get(`${this.baseURL}/user/me`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data; // Expecting user data
        } catch (error) {
            console.error("Error fetching user profile", error);
        }
    }

    // Fetch all books on the user's shelf - requires token
    async getUserShelf(token){
        try {
            const response = await axios.get(`${this.baseURL}/shelf`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data; // Expecting shelf data
        } catch (error) {
            console.error("Error fetching user's shelf", error);
        }
    }

    // Add a book to user's shelf - requires token
    async addBookToShelf(token, bookData){
        try {
            const response = await axios.post(`${this.baseURL}/shelf`, bookData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data; // Expecting success message or updated data
        } catch (error) {
            console.error("Error adding book to shelf", error);
        }
    }

    // Get book recommendation - requires token
    async getBookRec(token){
        try {
            const response = await axios.get(`${this.baseURL}/recommendations`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data; // Expecting recommended books
        } catch (error) {
            console.error("Error fetching book recommendations", error);
        }
    }

    // Logout user - clear local token
    logoutUser(){
        try {
            localStorage.removeItem("token");
            return true;
        } catch (error) {
            console.error("Error logging out user", error);
            return false; // logout failure
        }
    }
}

export default APIhandler;
