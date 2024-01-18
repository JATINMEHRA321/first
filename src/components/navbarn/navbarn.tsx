import classNames from 'classnames';
import styles from './navbarn.module.scss';

export interface NavbarnProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbarn = ({ className }: NavbarnProps) => {
    return <div className={styles.root}>
        <div className={styles.yellow} />
        <div className={styles.firstdiv}>
            <h2 className={styles.h2}>BONUS BUCKS</h2>
        </div>
    </div>;
};
