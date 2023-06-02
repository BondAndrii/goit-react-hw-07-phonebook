import { useSelector } from "react-redux";

import { getError } from "redux/contacts/selectors";

import styles from "./error.module.css"

export const ErrorMessage = () => {

    const isError = useSelector(getError);

    return (
       <p className={styles.Text}>{ isError}</p>       
    )
}