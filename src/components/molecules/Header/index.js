/* eslint-disable import/first */
import React from 'react';
import styles from './styles.css';

export const Header = ({
    children,
    className,
    ...props
}) => (
    <header className={[styles.header, className].join(' ')}{...props}>{children}</header>
);

export default Header;