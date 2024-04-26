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

export {fetchAllBooks}
