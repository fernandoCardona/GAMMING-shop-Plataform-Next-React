//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Container } from "semantic-ui-react";
import classNames  from 'classnames';
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
import { TopBar, Footer } from "@/components/Layout";
//IMPORTS Styles/Images DE LA APP:
import styles from "./BasicLayout.module.scss";



export const BasicLayout = ( props ) => {
    const {
        children,
        isOpenSearch = false,
        isContainer = false,
        relative = false,
    } = props;


    return (
        <>
            {/* TopBar */}
            <TopBar isOpenSearch={isOpenSearch} />

            <div className={ classNames({ [styles.relative]: relative }) }>
                <Container fluid>
                    {
                        isContainer 
                            ? <Container>{ children }</Container>
                            :  children 
                    }
                </Container>
            </div>
            

            {/* Footer */}
            <Footer />
            
        </>
        
    )
}
