import useTranslation from "next-translate/useTranslation";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { useWindowSize } from '../../../hooks/size';
import { works } from "./constants";
import styles from './work.module.css';
const Work = () => {
    const {t} = useTranslation();
    const {width} = useWindowSize()
    const [position, setPosition] = useState(0);
    const IMAGES_AMOUNT = works.length;
    const [imagesWidth, setImagesWidth] = useState(33);
    const MAX_IMAGES_PER_TIME = Math.trunc(100/imagesWidth);
    const TOTAL =  IMAGES_AMOUNT - MAX_IMAGES_PER_TIME;
    useEffect(() => {
        setPosition(0);
        if(width > 1200){
            setImagesWidth(33);
        }
        else{
            setImagesWidth(95);
        }
    }, [width])
    const goLeft = () => {
        console.log(`Left: position: ${position}`)
        if(position <= TOTAL*(-imagesWidth)){
            setPosition(0)
        }
        else{
            setPosition(position - imagesWidth);
        }
    }
    const goRight = () => {
        console.log(`Right: position: ${position}`)
        if(position >= 0){
            setPosition(TOTAL*(-imagesWidth))
        }
        else{
            setPosition(position + imagesWidth);
        }
    }
    return(
        <section className={styles['wrapper']}>
            <h2>{t("work:title")}</h2>
            <div className={styles['carousel']}>
                <div 
                style={{transform: `translateX(${position}vw)`}}
                className={styles['carousel-images-wrapper']}
                >
                    {
                        works.map(({image}) => (
                            <div 
                            key={image}
                            className={styles['image-wrapper']}
                            >
                                <Image
                                    layout="fill"
                                    objectFit="contain"
                                    src={image}
                                    loading='lazy'
                                    className={styles['image']}
                                />
                            </div>
                        ))
                    }
                </div>
                <div className={styles['buttons-images-wrapper']}>
                    <button className={styles['arrow-button']} onClick={() => goRight(1)}>
                        <Image width={30} height={30} src={"/icon-arrow-left.svg"} />
                    </button>
                    <button className={styles['arrow-button']} onClick={() => goLeft(1)}>
                        <Image width={30} height={30} src={"/icon-arrow-right.svg"} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Work;