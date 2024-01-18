import classNames from 'classnames';
import styles from './imagediv.module.scss';
import { Component1 } from '../component-1/component-1';
import bhero from "./bonus-bucks-hero.jpg"

export interface ImagedivProps {
    className?: string;
}

export const Imagediv = ({ className }: ImagedivProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.div7}>
            <img src={bhero} alt="loading............" className={styles.img} />
            <div className={classNames(styles.div71)}>
                <Component1 />
            </div>
        </div></div>;
};
