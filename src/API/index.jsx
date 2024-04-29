  export const API_URL = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api'

  const fetchAllBooks = async () => {

    try {
       const response = await fetch(`${API_URL}/books`)
       const books = await response.json();
       return books.books
   } catch (error) {
       console.error('Error fetching Books', error);
   }
 }
  const fetchSingleBook = async (bookId) => {

    try {
       const response = await fetch(`${API_URL}/books/${bookId}`)
       const book = await response.json();
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
    return upDatedReservation;
    
  } catch (error) {
    console.error(error)
  }

 }
 const deleteBookReservation = async (bookId, token) => {
  
  try {
    const response = await fetch(`${API_URL}/reservations/${bookId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
   
    const deletedReservation = await response.json();
    
  } catch (error) {
    console.error(error)
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
    return result

  } catch (error) {
    console.error('Failed to fetch reservations:', error);
  }
}



 

export {fetchAllBooks, fetchSingleBook, bookCheckOutReservation, getUserDetails, deleteBookReservation}
