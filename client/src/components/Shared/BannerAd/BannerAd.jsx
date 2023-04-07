//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Button, Container, Image } from "semantic-ui-react";
import Link from "next/link";
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import styles from './BannerAd.module.scss';




export const BannerAd = (props) => {
    //Extraemos props:
    const { title, subtitle, btnTitle, btnLink, image } = props;

    return (
        <div className={styles.container}>
            <Container className={styles.containerImage}>
                <Image src={image} />
            </Container>

            <div className={styles.infoContainer}>
                <Container>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>

                <Button as={Link} href={btnLink} primary>
                    {btnTitle}
                </Button>
                </Container>
            </div>
        </div>
    )
}
