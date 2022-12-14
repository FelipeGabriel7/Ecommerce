import React from 'react'
import { BsGithub , BsLinkedin} from 'react-icons/bs'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <>
        <footer className={styles.end}>
            <p className={styles.text}> @ 2022. &copy; ReactShop All Rights reserverd. </p>
            <div className={styles.icons}>
                <BsGithub/>
                <BsLinkedin/>
            </div>
        </footer>
    </>
  )
}
