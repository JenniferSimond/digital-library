  export const API_URL = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api'

  const fetchAllBooks = async () => {

    try {
       const response = await fetch(`${API_URL}/books`)
       const books = await response.json();
       console.log('Books >--->',books.books)
       return books.books
   } catch (error) {
       console.error('Error fetching Books', error);
   }
 }
  const fetchSingleBook = async (bookId) => {

    try {
       const response = await fetch(`${API_URL}/books/${bookId}`)
       const book = await response.json();
       console.log('Book from index>--->',book.book)
       console.log('BookId Param >--->',bookId)
       return book.book
   } catch (error) {
       console.error('Error fetching Books', error);
   }
 }

 const bookCheckOutReservation = async (bookId, token) => {
  
  try {
    const response = await fetch(`${API_URL}/books/${bookId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        available: false,
      })
    });
   
    const upDatedReservation = await response.json();
    console.log(upDatedReservation);
    
  } catch (error) {
    
  }

 }


const getUserDetails = async (token) => {
  try {
    
    const response = await fetch(`${API_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });

    const result = await response.json();
    console.log('My Books -->', result)
    return result

  } catch (error) {
    console.error('Failed to fetch reservations:', error);
  }
}



 

export {fetchAllBooks, fetchSingleBook, bookCheckOutReservation, getUserDetails}
