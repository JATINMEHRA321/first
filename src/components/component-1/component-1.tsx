import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import styles from './component-1.module.scss';
import Div3_module from '../div-3/div-3.module.scss';
import  Loader  from '../../loader.jsx'

export interface Component1Props {
    className?: string;
}

export const Component1 = ({ className }: Component1Props) => {
   const navigate = useNavigate();
   const [isLoading, setIsLoading] = useState(false);

   const handleButtonClick = async () => {
       setIsLoading(true);

       // Simulate an asynchronous operation (e.g., API call) before navigating 
       await new Promise((resolve) => setTimeout(resolve, 1000));

       navigate('/home');

       // Reset loading state once navigation is complete
       setIsLoading(false);
   };

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.component1}>
                <h1 className={styles.h1}>Get Rewarded with BonusBucks</h1>
                <p className={styles.p}>Be rewarded with a Gift Card by completing deals* </p>
                <div className={styles.button}>
                   {isLoading ? <Loader/> :  <button className={Div3_module.buttondiv3}onClick={handleButtonClick} disabled={isLoading}>
                    Get started
                    </button> }
                </div>
                <p className={styles.p}>*Upon completion of BonusBucks Program Requirements </p>
            </div>
        </div>
    );
};
