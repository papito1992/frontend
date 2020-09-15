// import React, {useEffect, useRef, useState, useContext} from 'react';
// import {useParams} from "react-router-dom";
// import {useHttpClient} from "../../shared/hooks/http-hook";
// import Button from "../../shared/components/FormElements/Button";
// import {AuthContext} from "../../shared/context/auth-context";
// import {useForm} from "../../shared/hooks/form-hook";
// import ReactPaginate from 'react-paginate';
//
// const BookReader69 = props => {
//     const auth = useContext(AuthContext);
//
//     const [currentWord, setCurrentWord] = useState("");
//     const [startingPageNumber, setStartingPageNumber] = useState(0);
//     const [wordArray, setWordArray] = useState([]);
//     const [timer, setTimer] = useState(true);
//     const [currentWordIndex, setCurrentWordIndex] = useState(0);
//     const [currentWordIncrement, setCurrentWordIncrement] = useState(1);
//     const {isLoading, error, sendRequest, clearError} = useHttpClient();
//     const [count, setCount] = useState(0);
//     const countRef = useRef(count);
//     countRef.current = count;
//     const wordRef = useRef(wordArray);
//     wordRef.current = wordArray;
//
//     const bookId = useParams().bookId;
//     const [formState, inputHandler] = useForm(
//         {
//             title: {
//                 value: '',
//                 isValid: false
//             },
//             description: {
//                 value: '',
//                 isValid: false
//             },
//             documentBook: {
//                 value: null,
//                 isValid: false
//             }
//         },
//         false
//     );
//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const responseData = await sendRequest(
//                     `http://localhost:5000/api/books/${bookId}`
//                 );
//                 setWordArray(responseData.words);
//                 wordRef(responseData.words)
//             } catch (err) {
//             }
//         };
//         fetchUsers();
//         if (timer) {
//             const timerID = setInterval(
//                 () => {
//                     setCount(count => count + 1)
//                     setCurrentWord(currentWord)
//
//                 },
//                 250);
//             return () => clearInterval(timerID);
//         }
//     }, [sendRequest, bookId]);
//
//     const getWordIndex = () => {
//         console.log(wordArray)
//         setCurrentWordIndex(currentWordIndex + currentWordIncrement);
//         return currentWordIndex;
//     }
//
//
//     const tick = (props) => {
//         // this.setState({
//         //     currentWord: getWordIndex(),
//         //     word: getWord(currentWordIndex)
//         // });
//         console.log("FROM TICK")
//         // console.log(props)
//         // setCurrentWordIndex(getWordIndex());
//         // setCurrentWord(wordArray[0]);
//     }
//     const placeSubmitHandler = async event => {
//         event.preventDefault();
//         try {
//             // const responseData = await sendRequest(`http://localhost:5000/api/books/?bookid=${bookId}&page=${startingPageNumber}`);
//             const responseData = await sendRequest(
//                 `http://localhost:5000/api/books/${bookId}/page/${startingPageNumber}`
//             );
//
//             // history.push('/');
//             console.log(responseData)
//         } catch (err) {
//             console.log(err)
//         }
//     };
//     return (
//         <div>
//             <div className="center">
//                 <form className="place-form" onSubmit={placeSubmitHandler}>
//                     <h2>{wordRef.current[count]}</h2>
//                     <Button type="submit">
//                         NEXT PAGE
//                     </Button>
//                 </form>
//             </div>
//         </div>
//     );
//
// }
// export default BookReader69;