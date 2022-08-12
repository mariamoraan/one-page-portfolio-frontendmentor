import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Button from '../../paper/button/button';
import styles from './header.module.css';

const Header = () => {
    const {t} = useTranslation("common");
    return(
        <header className={styles['wrapper']}>
            <Image 
                width={50}
                height={50}
                src="/logo.svg"
            />
            <Button title={t("free_consultation")}/>
        </header>
    )
}

export default Header;