import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/toaster.module.css';

function Toaster() {
    return (
        <div className="w-full overflow-hidden rounded-md">
            <ToastContainer
                position="top-center"

                className={`absolute z-[300000] ${styles.toasterCustomCss}`}
            />
        </div>
    )
}

export default Toaster