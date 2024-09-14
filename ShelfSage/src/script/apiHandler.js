import axios from "axios";

class APIhandler {
    constructor(){
        this.baseURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8080";
    }

    // user login
    async loginUser(username, password){
        try{
            const response = await axios.post(`${this.baseURL}/login`, { username, password });
            return response.data; // expecting the token and user data
        }catch(error){
            console.error("Error loggin in user")
        }
    };

    // user signup
    async signUpUser(username, password){
        try{
            const response = await axios.post(`${this.baseURL}/signup`, { username, password });
            return response.data; // expecting the token and user data
        }catch(error){
            console.error("Error sigining up user")
        }
    };

    // fetch user profile - requires token
    async getUserProfile(token){
        try{
            const response = await axios.post(`${this.baseURL}/user/me`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data; // expecting user data
        }catch(error){
            console.error("Error fetching user profile")
        }
    };

    // fetch all books on the user's shelf - requires token
    async getUserShelf(token){
        try{
            const response = await axios.post(`${this.baseURL}/shelf`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data; // expecting user data
        }catch(error){
            console.error("Error fetching user's shelf")
        }
    };

    // add a book to user's shelf - requires token
    async addBookToShelf(token, bookData){
        try{
            const response = await axios.post(`${this.baseURL}/shelf`, bookData, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data; 

        }catch(error){
            console.error("Error adding book to shelf")
        }
    };

    // get book recommendation - requires token
    async getBookRec(token){
        try{
            const response = await axios.post(`${this.baseURL}/recommendations`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            return response.data; // expecting recommended books

        }catch(error){
            console.error("Error fetching books")
        }
    };

    // logout user - clear local token
    logoutUser(){
        try{
            localStorage.removeItem("token");
            return true;
        }catch(error){
            console.error("Error logging out user")
        }
    };
}

export default APIhandler;