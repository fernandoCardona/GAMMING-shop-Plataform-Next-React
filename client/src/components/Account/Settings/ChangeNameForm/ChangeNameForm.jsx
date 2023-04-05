//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
//IMPORTS DEPENDENCIAS DE LA APP:
import { User } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validationSchema } from "./ChangeNameForm.form";
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import styles from "./ChangeNameForm.module.scss";


const userController = new User();

export const ChangeNameForm = () => {

    const { user } = useAuth();

    const formik = useFormik({
        initialValues: initialValues(user.firstname, user.lastname),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await userController.updateMe(user.id, formValue);

            } catch (error) {
                console.error(error);
            }
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <label>Name and Surnames</label>

            <div className={styles.content}>
                <Form.Input
                    name="firstname"
                    placeholder="Name"
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    error={formik.errors.firstname}
                />
                <Form.Input
                    name="lastname"
                    placeholder="Surnames"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    error={formik.errors.lastname}
                />
                <Form.Button type="submit" loading={formik.isSubmitting}>
                    Send
                </Form.Button>
            </div>
        </Form>
    )
}