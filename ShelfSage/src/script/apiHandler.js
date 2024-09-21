import axios from "axios";

class APIhandler {
    constructor(){
        this.baseURL = "http://localhost:8080";
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
    async getUserShelf(token) {
        try {
            const response = await axios.get(`${this.baseURL}/books/shelf`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data; 
        } catch (error) {
            console.error("Error fetching user's shelf", error);
        }
    }

    // Add a book to user's shelf - requires token
    async addBookToShelf(token, userId, bookId){
        try {
            const response = await axios.post(`${this.baseURL}/books/shelf/add`, { user_id: userId, book_id: bookId }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data; 
        } catch (error) {
            console.error("Error adding book to shelf", error);
        }
    };

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

    // Google Book API

    // Fetch popular books
    async getPopularBooks() {
        try {
            const response = await axios.get(`${this.baseURL}/books/popular`);
            return response.data;
        } catch (error) {
            console.error('Error fetching popular books', error);
        }
    };

      // Fetch Sara J. Maas' books
      async getMaasBooks() {
        try {
            const response = await axios.get(`${this.baseURL}/books/Maas`);
            return response.data;
        } catch (error) {
            console.error('Error fetching Maas books', error);
        }
    };

     // Fetch Sci-fi books
     async getSciFiBooks() {
        try {
            const response = await axios.get(`${this.baseURL}/books/scifi`);
            return response.data;
        } catch (error) {
            console.error('Error fetching fantasy books', error);
        }
    };

     // Fetch J.K Rowling books
     async getRowlingBooks() {
        try {
            const response = await axios.get(`${this.baseURL}/books/rowling`);
            return response.data;
        } catch (error) {
            console.error('Error fetching non-fiction books', error);
        }
    };

    async getSearchBooks(query) {
        try {
            const response = await axios.get(`${this.baseURL}/books/search`, {
                params: { q: query }
            });
            return response.data;
        } catch (error) {
            console.error("Error searching for books:", error);
            throw error;
        }
    };
    
    // Fetch details of books by book Id
    async getBookDetails(id){
        try{
            const response = await axios.get(`${this.baseURL}/books/${id}`, {id});
            return response.data;
        }catch(error){
            console.error("Error fetching book details");
        }
    };

};

export default APIhandler;
