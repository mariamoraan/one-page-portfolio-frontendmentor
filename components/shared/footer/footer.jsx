import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Button from '../../paper/button/button';
import styles from './footer.module.css';

const Footer = () => {
    const {t} = useTranslation("common");
    return(
        <footer className={styles['wrapper']}>
            <Image 
                width={50}
                height={50}
                src="/logo.svg"
            />
            <Button title={t("free_consultation")}/>
        </footer>
    )
}

export default Footer;