import { useEffect, useState } from 'react';
import styles from './button.module.css';
import { BUTTON_TYPES } from './constants';

const Button = ({title, onClick, type}) => {
    const [buttonType, setButtonType] = useState(BUTTON_TYPES.PRIMARY_BUTTON);
    useEffect(() => {
        switch(type){
            case BUTTON_TYPES.PRIMARY_BUTTON:
                setButtonType(BUTTON_TYPES.PRIMARY_BUTTON);
                break;
            case BUTTON_TYPES.SECONDARY_BUTTON:
                setButtonType(BUTTON_TYPES.SECONDARY_BUTTON);
                break;
            default:
                setButtonType(BUTTON_TYPES.PRIMARY_BUTTON);
        }
    }, [type])
    return(
        <button 
        className={
            buttonType === BUTTON_TYPES.PRIMARY_BUTTON ? styles['wrapper'] : styles['wrapper-secondary']}
        >
            {title}
        </button>
    )
}

export default Button;