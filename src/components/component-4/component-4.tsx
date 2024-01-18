// Import statements
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import styles from './component-4.module.scss';
import { Navbarn } from '../navbarn/navbarn';
import { Div6 } from '../div-6/div-6';
import image from "./bonus-bucks-hero.jpg";

export interface Component4Props {
    className?: string;
}

export const Component4 = ({ className }: Component4Props) => {
    const navigate = useNavigate();
    const emailRegex = /\S+@gmail\.com/i;
    const [enteredEmail, setEnteredEmail] = useState<string | null>(null);
    const [enteredEmailsArray, setEnteredEmailsArray] = useState<string[]>([]);

    const handleButtonClick = () => {
        const emailInput = document.getElementById('emailInput') as HTMLInputElement;
        const enteredEmail = emailInput.value;

        if (emailRegex.test(enteredEmail)) {
            // Save the entered email to state
            setEnteredEmail(enteredEmail);

            // Add the entered email to the array
            setEnteredEmailsArray((prevArray) => [...prevArray, enteredEmail]);

            // Log the entered email and the array to the console
            console.log("Entered Email:", enteredEmail);
            console.log("Entered Emails Array:", enteredEmailsArray);

            // Navigate to a specific route when the button is clicked
            navigate('/home5');
        } else {
            alert('Please enter a valid Gmail address.');
        }
    };

    useEffect(() => {
        // Log the entire array to the console whenever it changes
        console.log("Entered Emails Array:", enteredEmailsArray);
    }, [enteredEmailsArray]);

    return (
        <div className={classNames(styles.root, className)}>
            <Navbarn />
            <div className={styles.div1}>
                <img src={image} alt="" className={styles.img} />
                <div className={styles.div2}>
                    <div className={styles.div3}>
                        <h2 className={styles.h1}>Enter your email:</h2>
                        <div className={styles.div6}>
                            <input
                                id="emailInput"
                                className={styles.input}
                                type="email"
                                placeholder="your.email@gmail.com"
                            />
                        </div>
                        <div className={styles.div4}>
                            <p className={styles.p1}>By clicking Continue, I agree to email marketing, I also agree to the Privacy Policy, which details personal info collection practices and the Terms and Conditions, including a mandatory arbitration provision.</p>
                        </div>
                        <div className={styles.div5}>
                            <button className={styles.button} onClick={handleButtonClick}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
            <Div6 />
        </div>
    );
};
