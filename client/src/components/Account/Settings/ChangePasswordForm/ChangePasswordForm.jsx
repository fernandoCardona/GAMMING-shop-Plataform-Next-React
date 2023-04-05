//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
//IMPORTS DEPENDENCIAS DE LA APP:
import { User } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validationSchema } from "./ChangePasswordForm.form";
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import styles from "./ChangePasswordForm.module.scss";

const userController = new User();

export const ChangePasswordForm = () => {

    const { user, logout } = useAuth();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await userController.updateMe(user.id, { password: formValue.password });
                logout();
                
            } catch (error) {
                throw error;
            }
        },
    });


    return (
        <Form onSubmit={formik.handleSubmit} className={styles.form}>
        <label>Change password</label>
        <Form.Input
            type="password"
            name="password"
            placeholder="New password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password}
        />
        <Form.Input
            type="password"
            name="repeatPassword"
            placeholder="Repeat password"
            value={formik.values.repeatPassword}
            onChange={formik.handleChange}
            error={formik.errors.repeatPassword}
        />
        <Form.Button type="submit" loading={formik.isSubmitting}>
            Send
        </Form.Button>
        </Form>
    )
}