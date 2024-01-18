import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import styles from './inputcom.module.scss';
import p1 from "./1.png";
import p2 from "./2.png";
import p3 from "./3.png";
import p4 from "./4.png";
import p5 from "./5.png";
import p6 from "./6.png";
import p7 from "./7.png";
import p8 from "./8.png";
import p9 from "./9.png";
import { Navbarn } from '../navbarn/navbarn';
import { Div6 } from '../div-6/div-6';

export interface InputcomProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Inputcom = ({ className }: InputcomProps) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
       // Navigate to a specific route when the button is clicked
        navigate('/home3');
    };
    return <div className={classNames(styles.root, className)}>
        <div className={styles.divinput}>
            <div className={styles.maindiv}>
                <Navbarn />
                <div className={styles.flex}>
                    <div className={styles.maxwidth}>
                        <h1 className={styles.h1}>Select the reward below that you would like to earn</h1>
                        <button className={styles.button} onClick={handleButtonClick}>
                            <img src={p1} alt="" />
                        </button>
                        <button className={styles.button}onClick={handleButtonClick}>
                            <img src={p2} alt="" />
                        </button>
                        <button className={styles.button}onClick={handleButtonClick}>
                            <img src={p3} alt="" />
                        </button>
                        <button className={styles.button}onClick={handleButtonClick}>
                            <img src={p4} alt="" />
                        </button>
                        <button className={styles.button}onClick={handleButtonClick}>
                            <img src={p5} alt="" />
                        </button>
                        <button className={styles.button}onClick={handleButtonClick}>
                            <img src={p6} alt="" />
                        </button>
                        <button className={styles.button}onClick={handleButtonClick}>
                            <img src={p7} alt="" />
                        </button>
                        <button className={styles.button}onClick={handleButtonClick}>
                            <img src={p8} alt="" />
                        </button>
                        <button className={classNames(styles.button, styles.h123)}onClick={handleButtonClick}>
                            <img src={p9} alt="" />
                        </button></div>
                </div>
                <Div6 />
            </div></div></div>;
};
