import classNames from 'classnames';
import styles from './pic.module.scss';

export interface PicProps {
    className?: string;
}


export const Pic = ({ className }: PicProps) => {
    return <div className={classNames(styles.root, className)}>
        <form><label>First name:</label><br /><input type="text" /><br /><label>Last name:</label><br /><input type="text" /><br /><br /><input type="submit" value="Submit" /></form>
    </div>;
};
