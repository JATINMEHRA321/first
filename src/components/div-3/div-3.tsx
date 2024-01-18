import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import styles from './div-3.module.scss';
import Loader from '../../loader.jsx'
import Component1_module from '../component-1/component-1.module.scss';

export interface Div3Props {
    className?: string;
}

export const Div3 = ({ className }: Div3Props) => {
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
            <div className={styles.div3}>
                <div className={styles.div32}>
                    <div className={styles.div321}><h1 className={styles.h1}>How fast can I get my reward?
                    </h1>
                    </div>
                    <div className={styles.div322}>
                        <p>Your Reward is earned as you complete our sponsored and partner deals. Many of these deals can be completed instantly or with very little time investment. Once you have reached the required amount of deals, you will be able to begin the Reward claims process. Our Reward claims process is simple and fast. It only requires an ID verification and typically takes our customer service team 5-7 days to verify, process, and deliver your Reward. What are you waiting for? Get Started Now by clicking the button below. </p>
                    </div>
                    <div className={styles.div323}>
                        {isLoading ? <Loader /> : <button className={styles.buttondiv3} onClick={handleButtonClick} disabled={isLoading}>
                            Get Started
                        </button>}
                    </div>
                </div>
                <div className={styles.div31} />
            </div>
        </div>
    );
};
