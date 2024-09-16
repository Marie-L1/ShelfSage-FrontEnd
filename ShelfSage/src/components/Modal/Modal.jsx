import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Modal() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() =>{
    const fetchBook = async () => {
      try{
        const response = await axios.get(`/api/books/${id}`);
        setBook(response.data)
      }catch(error){
        console.error("Error fetching book details");
      }
    };
    fetchBook();
  }, [id]);


  return (
    <Modal className="">
      <div className="">
        <img src={book.coverImage} alt={book.title} className=""/>
        <h2 className="">{book.title}</h2>
      </div>

      <ul className="">
        <li className="">Author: {book.author}</li>
        <li className="">Description: {book.descirption}</li>
        <li className="">Genre: {book.genre}</li>
        <li className="">Category: {book.category}</li>
      </ul>
    </Modal>
  )
}

export default Modal;