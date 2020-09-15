import React, {useContext, useState} from 'react';
import {useParams} from 'react-router-dom';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators';
import {useForm} from '../../shared/hooks/form-hook';
import {useHttpClient} from '../../shared/hooks/http-hook';
import {AuthContext} from '../../shared/context/auth-context';
import './Auth.css';

const AuthReset = props => {
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [isreset, setisreset] = useState(false);
    const token = useParams().token;
    const {isLoading, error, sendRequest, clearError} = useHttpClient();

    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const authResetSubmitHandler = async event => {
        console.log(token);
        event.preventDefault();
        try {
           const responseData = await sendRequest(
                `http://localhost:5000/api/users/reset/${token}`,
                'POST',
                JSON.stringify({
                    email: formState.inputs.email.value,
                    password: formState.inputs.password.value
                }),
                {
                    'Content-Type': 'application/json'
                }
            );
        } catch (err) {
            console.log(err);
        }

    };

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError}/>
            <Card className="authentication">
                {isLoading && <LoadingSpinner asOverlay/>}
                <h2>Input new password</h2>
                <hr/>
                <form onSubmit={authResetSubmitHandler}>
                    {/*<Input*/}
                    {/*    element="input"*/}
                    {/*    id="email"*/}
                    {/*    type="email"*/}
                    {/*    label="E-Mail"*/}
                    {/*    validators={[VALIDATOR_EMAIL()]}*/}
                    {/*    errorText="Please enter a valid email address."*/}
                    {/*    onInput={inputHandler}*/}
                    {/*/>*/}
                    <Input
                        element="input"
                        id="password"
                        type="password"
                        label="Password"
                        validators={[VALIDATOR_MINLENGTH(6), VALIDATOR_REQUIRE]}
                        errorText="Please enter a valid password, at least 6 characters."
                        onInput={inputHandler}
                    />
                    <Button type="submit" inverse>
                        RESET PASS
                    </Button>
                </form>


            </Card>
        </React.Fragment>
    );
};

export default AuthReset;
