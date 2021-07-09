import React, { FC } from 'react';
import styles from './SectionHeader.module.css'
 
type Props = {}

const SectionHeader:FC<Props> = ({ children }) => {
    return (<h2 className={`text-2xl md:text-3xl font-serif text-center mx-auto self-center mb-2 ${styles.SectionHeader}`}>{children}</h2>)
}
export default SectionHeader;