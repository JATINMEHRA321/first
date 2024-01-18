// Import statements
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './component-5.module.scss';
import { Navbarn } from '../navbarn/navbarn';
import { Div6 } from '../div-6/div-6';

export interface Component5Props {
    className?: string;
}

export const Component5 = ({ className }: Component5Props) => {
    const navigate = useNavigate();
    const [loadingButton, setLoadingButton] = useState<string | null>(null);
    const [userDetails, setUserDetails] = useState<any[]>([]);

    const handleButtonClick = async (buttonType: string) => {
        setLoadingButton(buttonType);

        // Get values from input fields
        const firstNameInput = document.getElementById('firstNameInput') as HTMLInputElement;
        const lastNameInput = document.getElementById('lastNameInput') as HTMLInputElement;
        const emailInput = document.getElementById('emailInput') as HTMLInputElement;
        const streetAddressInput = document.getElementById('streetAddressInput') as HTMLInputElement;
        const zipInput = document.getElementById('zipInput') as HTMLInputElement;
        const cityInput = document.getElementById('cityInput') as HTMLInputElement;
        const phoneNumberInput = document.getElementById('phoneNumberInput') as HTMLInputElement;
        const passwordInput = document.getElementById('passwordInput') as HTMLInputElement;
        const daySelect = document.getElementById('daySelect') as HTMLSelectElement;
        const monthSelect = document.getElementById('monthSelect') as HTMLSelectElement;
        const yearSelect = document.getElementById('yearSelect') as HTMLSelectElement;
        const checkboxInput = document.getElementById('checkboxInput') as HTMLInputElement;

        // Get selected gender value
        const genderInputs = document.getElementsByName('gender');
        let selectedGender = '';
        for (let i = 0; i < genderInputs.length; i++) {
            if ((genderInputs[i] as HTMLInputElement).checked) {
                selectedGender = (genderInputs[i] as HTMLInputElement).value;
                break;
            }
        }

        // Check if any field is empty
        if (
            !firstNameInput.value ||
            !lastNameInput.value ||
            !emailInput.value ||
            !streetAddressInput.value ||
            !zipInput.value ||
            !cityInput.value ||
            !phoneNumberInput.value ||
            !passwordInput.value ||
            !daySelect.value ||
            !monthSelect.value ||
            !yearSelect.value ||
            !selectedGender ||
            !checkboxInput.checked  // Check if the checkbox is checked
        ) {
            // Display an alert if any field is empty
            alert('Please fill out the complete form and tick the checkbox');
            setLoadingButton(null);  // Reset loading state
            return;
        }

        // Store values in the array
        const userDetailsObject = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            email: emailInput.value,
            streetAddress: streetAddressInput.value,
            zip: zipInput.value,
            city: cityInput.value,
            phoneNumber: phoneNumberInput.value,
            password: passwordInput.value,
            day: daySelect.value,
            month: monthSelect.value,
            year: yearSelect.value,
            gender: selectedGender,
        };

        setUserDetails([...userDetails, userDetailsObject]);

        // Log the userDetailsObject to the console when the button is clicked
        console.log('User Details:', userDetailsObject);

        // Simulate an asynchronous operation (e.g., API call) before navigating
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Navigate to a specific route when the button is clicked
        navigate('/home6');

        // Reset loading state once navigation is complete
        setLoadingButton(null);
    };

    return (
        <div className={classNames(styles.root, className)}>
            <Navbarn />
            <div className={styles.div}>
                <div className={styles.div1}>
                    <h3 className={styles.h3}>Registration required.</h3>
                    <p className={styles.p12}>Please provide your details:</p>
                    <p>Your name:</p>
                    <div className={styles.div2}>
                        <input id="firstNameInput" className={classNames(styles.input, styles.round)} placeholder="First Name" />
                        <input id="lastNameInput" className={classNames(styles.input2, styles.round)} placeholder="Last Name" />
                    </div>
                    <input id="emailInput" className={classNames(styles.input3, styles.round)} placeholder="Enter your gmail" />
                    <p>Your shipping address:</p>
                    <input id="streetAddressInput" className={classNames(styles.input4, styles.round)} placeholder="Street Address" />
                    <div className={styles.div3}>
                        <input id="zipInput" className={classNames(styles.round, styles.input6)} placeholder="Zip" />
                    </div>
                    <input id="cityInput" className={classNames(styles.input6, styles.round)} placeholder="City" />
                    <p>A valid Phone Number is required.</p>
                    <input id="phoneNumberInput" type="number" className={classNames(styles.input6, styles.round)} />
                    <p>Date of Birth</p>
                    <div className={styles.div4}>
                        <select id="daySelect" className={classNames(styles.select, styles.round)}>
                            <option value="">Day</option>
                            {Array.from({ length: 31 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                        <select id="monthSelect" className={classNames(styles.select, styles.round)}>
                            <option value="">Month</option>
                            {Array.from({ length: 12 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                        <select id="yearSelect" className={classNames(styles.select, styles.round)}>
                            <option value="">Year</option>
                            {Array.from({ length: 100 }, (_, i) => (
                                <option key={i + 1920} value={i + 1920}>{i + 1920}</option>
                            ))}
                        </select>
                    </div>
                    <p>Gender</p>
                    <div className={styles.div5}>
                        <input type="radio" name="gender" id="femaleRadio" className={classNames(styles.input7, styles.round, styles.rounds)} value="Female" />
                        <label htmlFor="femaleRadio">Female</label>
                        
                        <input type="radio" name="gender" id="maleRadio" className={classNames(styles.input7, styles.round, styles.rounds)} value="Male" />
                        <label htmlFor="maleRadio">Male</label>
            
                        <input type="radio" name="gender" id="otherRadio" className={classNames(styles.input7, styles.round, styles.rounds)} value="Other" />
                        <label htmlFor="otherRadio">Other</label>
                    </div>
                    <p>Password</p>
                    <input id="passwordInput" type="password" className={classNames(styles.input6, styles.round)} placeholder="Your Placeholder Text Here" />
                    <p className={styles.p1}>
                        By clicking Continue, I consent to have a representative from Aragon Advertising or Bright Horizon Media contact me at the phone number or email
                        I provided when I registered. I understand these calls may be generated using an automated dialer and that my consent is not required as a precondition for purchasing or receiving any property, goods, or service. I also agree to the Privacy Policy, which details personal info collection practices and the Terms and Conditions, including a mandatory arbitration provision.
                    </p>
                    <div className={styles.i}>
                        <input type="checkbox" id="checkboxInput" className={styles.o} />
                        <label htmlFor="checkboxInput">I agree to the terms and conditions</label>
                    </div>
                    <div className={styles.div6}>
                        <button className={styles.button} onClick={() => handleButtonClick('True')}>Button</button>
                    </div>
                </div>
            </div>
            <Div6 />
        </div>
    );
};
