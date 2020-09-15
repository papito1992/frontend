import React, {useContext, useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import {useHttpClient} from "../../shared/hooks/http-hook";
import {AuthContext} from "../../shared/context/auth-context";
import {makeStyles} from '@material-ui/core/styles';
// import Button from "../../shared/components/FormElements/Button";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import './BookReader69.css'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const BookReader69 = props => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 140,
            width: 100,
        },
        control: {
            padding: theme.spacing(2),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));
    const auth = useContext(AuthContext);
    const [checked, setChecked] = React.useState(false);
    const [currentWord, setCurrentWord] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [test, settest] = useState(0);
    const [lastPage, setLastPage] = useState(false);
    const [firstPage, setFirstPage] = useState(true);
    const [startingPageNumber, setStartingPageNumber] = useState(0);
    const [wordArray, setWordArray] = useState([]);
    const [pageArray, setPageArray] = useState([]);
    let [timer, setTimer] = useState();
    const [backCalled, setBackCalled] = useState(false);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWordIncrement, setCurrentWordIncrement] = useState(1);
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [state, setState] = React.useState({
        age: '300',
        name: 'hai',
    });
    const [count, setCount] = useState(0);
    const countRef = useRef(count);
    countRef.current = count;
    const wordRef = useRef(wordArray);
    wordRef.current = wordArray;

    const timerRef = useRef(timer);
    timerRef.current = timer;

    const testref = useRef(test);
    testref.current = test;
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const bookId = useParams().bookId;
    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    }
    const handleChangeForSwitch = () => {
        setChecked((prev) => !prev);
    };
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    `http://localhost:5000/api/books/${bookId}`
                );
                setPageArray(responseData);
                setWordArray(responseData[0].pageText);
                wordRef(wordArray)
            } catch (err) {
            }
        };

        if (!backCalled) {
            fetchUsers();
        }
        return () => clearInterval(timer);
    }, [sendRequest, bookId]);
    const handleChangeForWordSpeed = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    const loadNextPageWords = () => {

        console.log(pageArray.length + " =1=1=1=1= " + currentPage)
        setCurrentPage(currentPage + 1);
        if (currentPage + 1 > 1) {
            setFirstPage(false)
        }
        setWordArray(pageArray[currentPage].pageText);
        if (currentPage + 1 === pageArray.length) {
            setLastPage(true)
        }
        setCount(0);
        stopTimer()
    }

    const loadPreviousPageWords = async () => {
        console.log(currentPage - 2)
        if (currentPage - 2 <= 0) {
            console.log("ZUMZ UZMZMZ")
            setFirstPage(true)
        }
        if (currentPage - 2 >= 0) {
            setCurrentPage(currentPage - 1);
            setWordArray(pageArray[currentPage - 2].pageText);
            setLastPage(false)
        }
        setCount(0);
        stopTimer()
    }
    const stopTimer = () => {
        return clearInterval(timer);
    }
    const startTimer = () => {
        const interval = setInterval(
            () => {
                setTimer(interval)
                setCount(count => {

                    if (wordArray.length === count) {
                        console.log("YEET")
                        clearInterval(interval)
                        return;
                    }

                    return count + 1
                })
                console.log("LOOP")

            },
            ((60/state.age)*1000));
        console.log(wordArray.length + " wordArray.length")
        console.log(((60/state.age)*1000));
        return () => clearInterval(timer)
    }
    const startReading = () => {
        console.log("STARTING READ")
        startTimer();
    };

    const stopReading = () => {
        console.log("STOPING READ")
        stopTimer();
    };

    return (
        <div>
            <div className="center">
                <div className="place-form">
                    <Card>
                        <h2>{wordRef.current[count]}</h2>
                    </Card>
                    {checked && <div className="container">
                        <div className="span_padding">
                        <span>
                        Word: {count + 1}
                        </span>
                        </div>
                        <span>
                        Page: {currentPage}
                        </span>

                    </div>}
                </div>
            </div>
            <div className={"center"}>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={handleChangeForSwitch}/>}
                    label="Show"
                />
                <div className="button_book_reader69">
                    <Button onClick={loadPreviousPageWords} disabled={firstPage}>
                        PREVIOUS PAGE
                    </Button>
                    <Button onClick={loadNextPageWords} disabled={lastPage}>
                        NEXT PAGE
                    </Button>
                    <Button color="primary" onClick={startReading}>
                        START
                    </Button>
                    <Button color="secondary" onClick={stopReading}>
                        STOP
                    </Button>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">Speed</InputLabel>
                        <Select
                            native
                            value={state.age}
                            onChange={handleChangeForWordSpeed}
                            inputProps={{
                                name: 'age',
                                id: 'age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={100}>100 W/M</option>
                            <option value={200}>200</option>
                            <option value={300}>300</option>
                            <option value={400}>400</option>
                            <option value={500}>500</option>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </div>
    );

}
export default BookReader69;