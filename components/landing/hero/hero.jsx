import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useWindowSize } from '../../../hooks/size';
import { gridElems } from './constants';
import styles from './hero.module.css';

const Hero = () => {
    const {width} = useWindowSize();
    const {t} = useTranslation('hero');

    const getGridArea = (gridArea) => {
        if(width > 1200){
            return gridArea.desktop;
        }
        else if(width > 800){
            return gridArea.tablet;
        }
        else{
            return gridArea.mobile;
        }
    }
    
    return(
        <div className={styles['wrapper']}>
            <h1>{t("hero_title")}</h1>
            <p className={styles['subtitle']}>{t("hero_subtitle")}</p>
            <ul className={styles['grid']}>
                {gridElems.map(({title, color, image, imageWidth, imageHeight ,gridArea}) => (
                    <li 
                    key={title}
                    style={{backgroundColor: `var(${color})`, gridArea: getGridArea(gridArea)}}
                    className={styles['grid-item']}
                    >
                        <div  className={styles['item-image']}>
                        <Image 
                            src={image}
                            height={imageHeight} 
                            width={imageWidth}
                        />
                        </div>
                        <p>{t(title)}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
    
}

export default Hero;