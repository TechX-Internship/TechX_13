import React from 'react'
import styles from './styles/Header.module.css'

import { Dancing_Script } from 'next/font/google'

const dancing_script = Dancing_Script({
    subsets: ['latin'],

})

const Header = () => {
    return (
        <>
            <div className='main'>
                <div className="content">
                    <div className='container'>
                        <div className={`${styles.header} d-flex justify-content-between align-items-center`}>
                            <div className={styles.logo}>
                                <img src='/images/logo.png' alt="" />
                            </div>
                            <div className={styles.menu}>
                                <ul className='d-flex justify-content-between align-items-center gap-4'>
                                    <li><a href="" className={`${styles.tag} ${styles.active} fw-bold border-bottom`}>Home</a></li>
                                    <li><a href="" className={`${styles.tag}`}>About Us</a></li>
                                    <li><a href="" className={`${styles.tag}`}>Product</a></li>
                                    <li><a href="" className={`${styles.tag}`}>Blog</a></li>
                                    <li><a href="" className={`${styles.tag}`}>Contact Us</a></li>
                                </ul>
                            </div>
                            <div className='s-icon d-flex justify-content-between align-items-start gap-3'>
                                <li><a href="" className={`${styles.tag}`}>+91 8128128181</a></li>
                                <li className={`${styles.eclips}`}>
                                    <img src='./images/facebook.svg' alt="" />
                                </li>
                                <li className={`${styles.eclips}`}>
                                    <img src='./images/twiter.svg' alt="" />
                                </li>
                                <li className={`${styles.eclips}`}>
                                    <img src='./images/youtube.svg' alt="" />
                                </li>
                                <li className={`${styles.eclips}`}>
                                    <img src='./images/insta.svg' alt="" />
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className='alpha'>
                            <div className=''>
                                <div className='d-flex'>
                                    <h1 className={`wel ${dancing_script.className} me-2`}>Welcome To</h1>
                                    <div>
                                        <img src='./images/bowl.png' alt="" />
                                    </div>
                                </div>
                                <span className='tag1 '>Alpha Male exports</span>
                                <div className='d-flex rate'>
                                    <h1 className='pos-1 text-white fs-4'>01</h1>
                                    <p className='prew me-4 text-white fs-4'>PREW  </p>
                                    <div className='mt-2'>
                                        <img src='./images/line-1.png' alt="" />
                                    </div>
                                    <p className='next ms-4 text-white fs-4'>NEXT  </p>
                                </div>

                            </div>
                        </div>
                        <div className='rectngle ms-auto'>
                            <img src='./images/rectngle.png' alt="" />
                        </div>
                    </div>
                    <div className='sketch'>
                        <img src='./images/sketch.png' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header