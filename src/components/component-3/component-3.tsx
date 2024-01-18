// Component3.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import styles from './component-3.module.scss';
import { Navbarn } from '../navbarn/navbarn';
import { Div6 } from '../div-6/div-6';
import image from "./bonus-bucks-hero.jpg";

export interface Component3Props {
    className?: string;
}

export const Component3 = ({ className }: Component3Props) => {
    const navigate = useNavigate();
    const [isLoadingSave, setIsLoadingSave] = useState(false);
    const [isLoadingSpend, setIsLoadingSpend] = useState(false);
    const [clickedButtons, setClickedButtons] = useState<string[]>([]);

    const handleSaveButtonClick = async () => {
        if (!clickedButtons.includes('Save')) {
            setIsLoadingSave(true);

            // Simulate an asynchronous operation (e.g., API call) before navigating
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Add the buttonType to the array
            setClickedButtons((prevButtons) => [...prevButtons, 'Save']);

            // Navigate to a specific route when the button is clicked
            navigate('/home2');

            // Reset loading state once navigation is complete
            setIsLoadingSave(false);
        }
    };

    const handleSpendButtonClick = async () => {
        if (!clickedButtons.includes('Spend')) {
            setIsLoadingSpend(true);

            // Simulate an asynchronous operation (e.g., API call) before navigating
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Add the buttonType to the array
            setClickedButtons((prevButtons) => [...prevButtons, 'Spend']);

            // Navigate to a specific route when the button is clicked
            navigate('/home2');

            // Reset loading state once navigation is complete
            setIsLoadingSpend(false);
        }
    };

    // Log the clickedButtons array to the console
    console.log("Clicked Buttons:", clickedButtons);

    return (
        <div className={classNames(styles.root, className)}>
            <Navbarn />
            <div className={styles.div}>
                <img src={image} alt="" className={styles.img} />
                <div className={styles.div1}>
                    <p className={styles.p}>Answer question 2 of 2</p>
                    <h1 className={styles.h1}>How do you plan to use your reward?</h1>
                    <div className={classNames(styles.div2head, styles.flex)}>
                        <div className={classNames(styles.div2, styles.width)}>
                            <button className={styles.button} onClick={handleSaveButtonClick} disabled={isLoadingSave}>
                                {isLoadingSave ? 'Loading...' : 'Save'}
                            </button>
                            <button className={styles.button} onClick={handleSpendButtonClick} disabled={isLoadingSpend}>
                                {isLoadingSpend ? 'Loading...' : 'Spend'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Div6 />
        </div>
    );
};
