//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Confirm as ConfirmSU } from "semantic-ui-react";
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:

import React from 'react'

export const Confirm = (props) => {

    const { ...rest } = props;

    return <ConfirmSU className="confirm" size="mini" {...rest} />
}
