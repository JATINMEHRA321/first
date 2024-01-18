import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import styles from './div-2.module.scss';
import  Loader  from '../../loader.jsx'

export interface Div2Props {
    className?: string;
}

export const Div2 = ({ className }: Div2Props) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleButtonClick = async () => {
        setIsLoading(true);

        // Simulate an asynchronous operation (e.g., API call) before navigating
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Navigate to a specific route when the button is clicked
        navigate('/home');

        // Reset loading state once navigation is complete
        setIsLoading(false);
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div id="2div" className={styles.div2}>
                <h1 className={styles.h1}>
                    How fast can I get my reward?
                </h1>
                <p className={classNames(styles.p, styles.ok)}>
                    Your Reward is earned as you complete our sponsored and partner deals. Many of these deals can be completed instantly or with very little time investment. Once you have reached the required amount of deals, you will be able to begin the Reward claims process. Our Reward claims process is simple and fast. It only requires an ID verification and typically takes our customer service team 5-7 days to verify, process, and deliver your Reward. What are you waiting for? Get Started Now by clicking the button below.
                </p>
                <div className={styles.div21}>
                {isLoading ? <Loader/> : <button className={styles.button} onClick={handleButtonClick} disabled={isLoading}>
                    Get started
                    </button>}
                </div>
            </div>
        </div>
    );
};
