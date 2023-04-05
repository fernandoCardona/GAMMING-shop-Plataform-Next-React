//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Form } from "semantic-ui-react";
import { useFormik } from "formik"
//IMPORTS DEPENDENCIAS DE LA APP:
import { User } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validationSchema } from "./ChangeEmailForm.form";
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import styles from "./ChangeEmailForm.module.scss";

const userController = new User();

export const ChangeEmailForm = () => {

    const { user, updateUser } = useAuth();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
        try {
            await userController.updateMe(user.id, { email: formValue.email });
            updateUser("email", formValue.email);
            formik.handleReset();

        } catch (error) {
            console.error(error);
        }
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit} className={styles.form}>
        <label>Change email</label>

        <Form.Input
            name="email"
            placeholder="New email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
        />
        <Form.Input
            name="repeatEmail"
            placeholder="Repeat email"
            value={formik.values.repeatEmail}
            onChange={formik.handleChange}
            error={formik.errors.repeatEmail}
        />
        <Form.Button type="submit" loading={formik.isSubmitting}>
            Send
        </Form.Button>
        </Form>
    )
}