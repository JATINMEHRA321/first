import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import styles from './div-4.module.scss';
import  Loader  from '../../loader.jsx'

export interface Div4Props {
    className?: string;
}

export const Div4 = ({ className }: Div4Props) => {
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
            <div className={styles.div41}>
                <h1 className={styles.h41}>We've Got Winning Deals for You!</h1>
                <div className={styles.p}>
                    <p className={styles.pcom}>Enjoy our premium partner deals. You can complete just enough to unlock your Reward, or you can complete as many as you like. We match you with the best deals available, so it's really up to you! </p>
                </div>
                <div className={styles.button}>
                    {isLoading ? <Loader/> : <button className={styles.buttondiv4} onClick={handleButtonClick} disabled={isLoading}>
                        Get Started
                    </button>}
                </div>
            </div>
        </div>
    );
};
