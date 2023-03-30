//IMPORTS DE REACT/NEXT:
import { useRouter } from "next/router";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
import { Auth } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validationSchema } from "./LoginForm.form";
//IMPORTS Styles/Images DE LA APP:

const authController = new Auth();

export function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const response = await authController.login(formValue);
        login(response.jwt);
        //console.log(response);

        //router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="identifier"
        type="text"
        placeholder="Email or Username"
        value={formik.values.identifier}
        onChange={formik.handleChange}
        error={formik.errors.identifier}
      />
      <Form.Input
        name="password"
        type="password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />

      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        Login
      </Form.Button>
    </Form>
  );
}
