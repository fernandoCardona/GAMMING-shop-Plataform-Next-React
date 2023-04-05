import { useState } from "react";
import { Button } from "semantic-ui-react";
import { BasicModal } from "@/components/Shared";
import { AddressForm } from "../AddressForm";
import styles from "./AddAddress.module.scss";

export const AddAddress = (props) => {

    const { onReload } = props;
    const [show, setShow] = useState(false);
    //Funcion apertura y cierre del modal:
    const onOpenClose = () => setShow((prevState) => !prevState);

    return (
        <>
            <Button primary className={styles.addBtn} onClick={onOpenClose}>
                Create
            </Button>

            <BasicModal show={show} 
                        onClose={onOpenClose} 
                        title="New Address"
            >
                <AddressForm onClose={onOpenClose} 
                             onReload={onReload} 
                />

            </BasicModal>
        </>
  );
}
