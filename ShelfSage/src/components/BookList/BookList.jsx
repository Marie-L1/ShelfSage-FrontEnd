import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./BookList.scss";

export default function BookList({ title, fetchUrl }) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        try{
            const response = await axios.get()

        }catch(error){
            console.error("Error fetching books");
        }
    })

  return (
    <div>BookList</div>
  )
}
