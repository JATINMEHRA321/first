import classNames from 'classnames';
import styles from './div-5.module.scss';
import main from "./image.png"
import main1 from "./image1.png"
import main2 from "./image2.png"

export interface Div5Props {
    className?: string;
}


export const Div5 = ({ className }: Div5Props) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.div51}>
            <div className={styles.div511}>
                <div className={styles.div5111}>
                    <img src={main} alt="" />
                </div>
                <div className={styles.div5112}>
                    <p className={styles.p}>To get started, pick your Reward and start working towards it! </p>
                </div></div>
            <div className={styles.div511}>
                <div className={styles.div5111}>
                    <img src={main1} alt="" />
                </div>
                <div className={styles.div5112}>
                    <p className={styles.p}>Simply complete questions and claim your deals. </p>
                </div>
            </div>
            <div className={styles.div511}>
                <div className={styles.div5111}>
                    <img src={main2} alt="" />
                </div>
                <div className={styles.div5112}>
                    <p className={styles.p}>Lastly, spend that Reward! </p>
                </div>
            </div>
        </div>
    </div>;
};
