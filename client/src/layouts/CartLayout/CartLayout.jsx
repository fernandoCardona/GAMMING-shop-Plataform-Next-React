//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Container } from "semantic-ui-react";
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
import { Footer, HeaderCart } from "@/components/Layout";
import { Separator } from "@/components/Shared";
//IMPORTS Styles/Images DE LA APP:

import React from 'react'

export const CartLayout = (props) => {
    //Extraemos props:
    const { children } = props;


    return (
        <>
            <HeaderCart />
            <Separator height={150} />
            <Container>{children}</Container>
            <Separator height={70} />
            <Footer />
        </>
    )
}
