import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookDetails";
import { useNavigate } from "react-router-dom";
const URL = "https://openLibrary.org/works/";

const BookDetails = ()=>{
    const {id} = useParams;
    const [loading, setLoading] = useState(false);
    const [book, setBook] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        async function getBookDetails(){
          try{
            const response = await fetch(`${URL}OL45804W.json`);// somehow i can't get the proper ID
            const data = await response.json();
            console.log(data);
    
            if(data){
              const {description, title, covers, subject_places, subject_times, subjects} = data;
              const newBook = {
                description: description ? description.value : "No description found",
                title: title,
                cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
                subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
                subject_times : subject_times ? subject_times.join(", ") : "No subject times found",
                subjects: subjects ? subjects.join(", ") : "No subjects found"
              };
              setBook(newBook);
            } else {
              setBook(null);
            }
            setLoading(false);
          } catch(error){
            console.log(error);
            setLoading(false);
          }
        }
        getBookDetails();
      }, [id]);

    console.log(book);
    return(<div>Book Details</div>);
}
export default BookDetails;