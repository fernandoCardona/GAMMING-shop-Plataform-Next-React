//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
//IMPORTS DEPENDENCIAS DE LA APP:
import { Address } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validationSchema } from "./AddressForm.form";
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:

const addressController = new Address(); 

export const AddressForm = (props) => {
    //Recuperaamos props:
    const { onClose, 
        onReload, 
        addressId, 
        address } = props;
    const { user } = useAuth();

    const formik = useFormik({
        initialValues: initialValues(address),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
        try {
            if (addressId) {
                await addressController.update(formValue, addressId);
            } else {
                await addressController.create(formValue, user.id);
            }

            formik.handleReset();
            onReload();
            onClose();
        } catch (error) {
            console.error(error);
        }
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Input
                name="title"
                placeholder="Titulo de la dirección"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.errors.title}
            />

            <Form.Group widths="equal">
                <Form.Input
                    name="name"
                    placeholder="Name and surname"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.errors.name}
                />
                <Form.Input
                    name="address"
                    placeholder="Address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={formik.errors.address}
                />
            </Form.Group>

            <Form.Group widths="equal">
                <Form.Input
                    name="state"
                    placeholder="State"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    error={formik.errors.state}
                />
                <Form.Input
                    name="city"
                    placeholder="City"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.errors.city}
                />
            </Form.Group>

            <Form.Group widths="equal">
                <Form.Input
                    name="postal_code"
                    placeholder="postal code"
                    value={formik.values.postal_code}
                    onChange={formik.handleChange}
                    error={formik.errors.postal_code}
                />
                <Form.Input
                    name="phone"
                    placeholder="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.errors.phone}
                />
            </Form.Group>

            <Form.Button type="submit" fluid loading={formik.isSubmitting}>
                Send
            </Form.Button>
        </Form>
    )
}
