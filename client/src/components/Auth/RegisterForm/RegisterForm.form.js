//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import * as Yup from 'yup';
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:

export function initialValues() {

    return {
        email: '',
        username: '',
        name: '',
        password: '',
    }
}
export function validationSchema() {

    return Yup.object({
        email: Yup.string().email(true).required(true),
        username: Yup.string().required(true),
        name: Yup.string().required(true),
        password: Yup.string().required(true),
    });
}