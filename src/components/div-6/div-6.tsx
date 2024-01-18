import classNames from 'classnames';
import styles from './div-6.module.scss';

export interface Div6Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Div6 = ({ className }: Div6Props) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.div6}>
            <p className={styles.p1}>© 2022-2023 Bonus Bucks. </p>
            <p className={styles.p2}>FAQ | Privacy Policy | Terms and Conditions</p>
        </div>
    </div>;
};
