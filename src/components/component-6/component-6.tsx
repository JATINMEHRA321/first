import classNames from 'classnames';
import styles from './component-6.module.scss';
import { Navbarn } from '../navbarn/navbarn';
import { Div6 } from '../div-6/div-6';

export interface Component6Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Component6 = ({ className }: Component6Props) => {
    return <div className={classNames(styles.root, className)}>
        <Navbarn />
        <div className={styles.div3}>
            <div className={styles.flex}>
                <div className={styles.divimg}>
                    <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className={styles.img} />
                </div>
                <div className={styles.fgh}>
                    <h3 className={styles.h1}>Do you like saving money? Receive great freebies, coupons and learn ways to make life better with this Life Hacks newsletter.</h3>
                </div>
                <div className={styles.div}>
                    <button className={styles.button}>YES</button></div>
                <div className={styles.div}>
                    <button className={styles.button}>NO</button></div>
                <p className={styles.p}>*Confirm the request in your email to start receiving.</p>
                <div className={styles.div2}>
                    <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className={styles.img1} />
                </div></div></div>
        <Div6 />
    </div>;
};
