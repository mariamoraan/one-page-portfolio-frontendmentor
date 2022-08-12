import useTranslation from 'next-translate/useTranslation';
import Button from '../../paper/button/button';
import { BUTTON_TYPES } from '../../paper/button/constants';
import styles from './action.module.css';

const Action = () => {
    const {t} = useTranslation();
    return(
        <section className={styles['wrapper']}>
            <div className={styles['call-to-action-wrapper']}>
                <div className={styles['text-wrapper']}>
                    <h2
                    className={styles['title']}
                    >
                        {t('action:action_title')}</h2>
                    <p 
                    className={styles['description']}
                    >
                        {t('action:action_description')}
                    </p>
                </div>
                <div className={styles['button-wrapper']} >
                <Button 
                title={t('common:free_consultation')} 
                type={BUTTON_TYPES.SECONDARY_BUTTON}
                />
                </div>
            </div>
        </section>
    )
}

export default Action;