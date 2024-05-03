import { deleteBookReservation } from "../../API";
import ReusableCard from "../reusable-components/ReuseableCard";


const AccountBookCard = ({book, token, refresh}) => {
    


    const handleBookReturn = async () => {
      
            try {
                const deletedBook = await deleteBookReservation(book.id, token);
                refresh();
              
            } catch (error) {
                console.error("Failed to return the book:", error);
            }
        };
         

    return <ReusableCard book={book} buttonText='Return Book' handleClick={handleBookReturn}/>

}
export default AccountBookCard