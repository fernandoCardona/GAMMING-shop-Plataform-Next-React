//IMPORTS DE REACT/NEXT:
import { useState } from "react";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Image } from "semantic-ui-react";
import { map } from "lodash";
import Slider from "react-slick";
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
import { FullModal } from "@/components/Shared";
//IMPORTS Styles/Images DE LA APP:
import styles from "./Gallery.module.scss";



export const Gallery = (props) => {

    //Extraemos props:
    const { screenshots } = props;
    //console.log(props)

    const [show, setShow] = useState(false);
    
    //Apertura y cierre de la galeria:
    const onOpenClose = () => setShow((prevState) => !prevState);

    const screenshotsClone = [...screenshots];
    const principalImage = screenshotsClone.shift();

    const settings = {
        dots: true,
        dotsClass: styles.dots,
        infinite: true,
        slidersToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        customPaging: function (index) {
            return <Image src={screenshots[index].attributes.url} />;
        },
    };

    return (
        <>
            <div className={styles.gallery}>
                <div className={styles.principal}>
                    <Image src={principalImage.attributes.url} onClick={onOpenClose} />
                </div>

                <div className={styles.grid}>
                    {
                        map(screenshotsClone, (screenshot) => (
                            <div key={screenshot.id}>
                                <Image src={screenshot.attributes.url} onClick={onOpenClose} />
                            </div>
                        ))
                    }
                </div>
            </div>

            <FullModal show={show} onClose={onOpenClose}>
                <div className={styles.carouselContainer}>
                    <Slider {...settings}>
                        {
                            map(screenshots, (screenshot) => (
                            <div key={screenshot.id}>
                                <Image src={screenshot.attributes.url} />
                            </div>
                            ))
                        }
                    </Slider>
                </div>
            </FullModal>
        </>
    );
}
