import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useWindowSize } from '../../../hooks/size';
import Button from '../../paper/button/button';
import { BUTTON_TYPES } from '../../paper/button/constants';
import styles from './about.module.css';

const About = () => {
    const {t} = useTranslation();
    const {width} = useWindowSize();
    return(
        <section className={styles['wrapper']}>
            <div className={styles['image-content-wrapper']}>
            <div className={styles['image-wrapper']}>
                <Image 
                    objectFit='contain'
                    width="100%" 
                    height="100%" 
                    layout="responsive"
                    src={"/image-amy.webp"}
                    objectPosition={width > 800 && width < 1200 ? '-50px 0' : '0 0'}
                />
            </div>
            </div>
            <div className={styles['content-wrapper']}>
                <h2>{t("about:about_title")}</h2>
                <p>{t("about:about_subtitle")}</p>
                <Button 
                    title={t("common:free_consultation")} 
                    type={BUTTON_TYPES.SECONDARY_BUTTON}
                />
            </div>
        </section>
    )
}

export default About;