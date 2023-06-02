import { Circles } from 'react-loader-spinner';

// import styles from "./Loader.module.css"

const Loader = () => {
    return (
        <div
            // className={styles.Loader}
>
            <Circles
            height="80"
            width="80"
            radius="9"
            color='green'
            ariaLabel='three-dots-loading'
            wrapperStyle={{ justifyContent: 'center', alignItems: 'center'}}
            wrapperClass
            // ={styles.Loader}
        />
        </div>
        
    )
}

export default Loader;