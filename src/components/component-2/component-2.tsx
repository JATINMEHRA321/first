// Component2.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import styles from './component-2.module.scss';
import { Navbarn } from '../navbarn/navbarn';
import { Div6 } from '../div-6/div-6';
import image from "./bonus-bucks-hero.jpg";

export interface Component2Props {
    className?: string;
}

export const Component2 = ({ className }: Component2Props) => {
    const navigate = useNavigate();
    const [loadingButton, setLoadingButton] = useState<string | null>(null);
    const [clickedButtons, setClickedButtons] = useState<string[]>([]);

    const handleButtonClick = async (buttonType: string) => {
        // Check if the buttonType is already in the array
        if (!clickedButtons.includes(buttonType)) {
            setLoadingButton(buttonType);

            // Simulate an asynchronous operation (e.g., API call) before navigating
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Add the buttonType to the array
            setClickedButtons((prevButtons) => [...prevButtons, buttonType]);

            // Navigate to a specific route when the button is clicked
            navigate('/home1');

            // Reset loading state once navigation is complete
            setLoadingButton(null);
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
                    <p className={styles.p}>Answer question 1 of 2</p>
                    <h1 className={styles.h1}>Where do you do most of your shopping?</h1>
                    <div className={styles.div123}>
                        <div className={styles.div12}>
                            <button
                                className={classNames(styles.button, {
                                    [styles.loading]: loadingButton === 'Online',
                                })}
                                onClick={() => handleButtonClick('Online')}
                                disabled={loadingButton === 'Online'}
                            >
                                {loadingButton === 'Online' ? 'Loading...' : 'Online'}
                            </button>
                            <button
                                className={classNames(styles.button, {
                                    [styles.loading]: loadingButton === 'AtTheStore',
                                })}
                                onClick={() => handleButtonClick('AtTheStore')}
                                disabled={loadingButton === 'AtTheStore'}
                            >
                                {loadingButton === 'AtTheStore' ? 'Loading...' : 'Store'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Div6 />
        </div>
    );
};
