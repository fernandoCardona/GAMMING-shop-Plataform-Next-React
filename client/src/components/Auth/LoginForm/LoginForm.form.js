//IMPORTS DEPENDENCIAS DE TERCEROS:
import * as Yup from 'yup';
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:

export function initialValues() {
  return {
    identifier: "",
    password: "",
  };
}

export function validationSchema() {
  return Yup.object({
    identifier: Yup.string().required(true),
    password: Yup.string().required(true),
  });
}