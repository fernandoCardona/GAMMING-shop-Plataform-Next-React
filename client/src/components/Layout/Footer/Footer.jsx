//IMPORTS DE REACT/NEXT:
import Link from "next/link";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Container, Image, Button } from "semantic-ui-react";
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import styles from "./Footer.module.scss";


export const Footer = () => {

    
    return (
        <div className={styles.footer}>
            <Container>
                <div className={styles.columns}>
                    <div>
                        <Link href="/">
                            <Image src="/images/logo.png" alt="Gaming" />
                        </Link>
                    </div>

                    <div>
                        <ul>
                            <Link href="#">Terms and Conditions</Link>
                            <Link href="#">Privacy Policy</Link>
                            <Link href="#">Contact</Link>
                            <Link href="#">FAQs</Link>
                        </ul>
                    </div>

                    <div className={styles.social}>
                        <Button as="a" href="#" circular color="facebook" icon="facebook" />
                        <Button as="a" href="#" circular color="twitter" icon="twitter" />
                        <Button as="a" href="#" circular color="linkedin" icon="linkedin" />
                        <Button as="a" href="#" circular color="youtube" icon="youtube" />
                    </div>
                </div>

                <div className={styles.copyright}>
                    <span>Copyright © 2023 Gaming - All rights reserved</span>
                </div>
            </Container>
        </div>
    )
}
