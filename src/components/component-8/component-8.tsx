import classNames from 'classnames';
import styles from './component-8.module.scss';

export interface Component8Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Component8 = ({ className }: Component8Props) => {
    return <div className={classNames(styles.root, className)}></div>;
};
