//IMPORTS DE REACT/NEXT:
import { useState } from "react";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Button, Icon } from "semantic-ui-react";
//IMPORTS DEPENDENCIAS DE LA APP:
import { Address as AddressCtrl } from "@/api";
//IMPORTS COMPONENTS DE LA APP:
import { BasicModal, Confirm } from "@/components/Shared";
import { AddressForm } from "../../AddressForm";
//IMPORTS Styles/Images DE LA APP:
import styles from "./Address.module.scss";

const addressController = new AddressCtrl();

export const Address = (props) => {

    const { addressId, 
            address, 
            onReload 
    } = props;
    const [showEdit, setShowEdit] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const openCloseEdit = () => setShowEdit((prevState) => !prevState);
    const openCloseConfirm = () => setShowConfirm((prevState) => !prevState);
    
    const onDelete = async () => {
        try {
            await addressController.delete(addressId);
            onReload();
        } catch (error) {
            console.error(error);
        }
      };

    return (
        <>
            <div className={styles.address}>
                <div>
                <p className={styles.title}>{address.title}: </p>
                <p className={styles.addressInfo}>
                    {address.name}, {address.address}, {address.state}, {address.city},{" "}
                    {address.postal_code}
                </p>
                </div>

                <div className={styles.actions}>
                    <Button primary icon onClick={openCloseEdit}>
                        <Icon name="pencil" />
                    </Button>
                    <Button primary icon onClick={openCloseConfirm}>
                        <Icon name="delete" />
                    </Button>
                </div>
            </div>
            <BasicModal show={showEdit} onClose={openCloseEdit} title='Edit address'>
                <AddressForm 
                    onClose={openCloseEdit}
                    onReload={onReload}
                    addressId={addressId}
                    address={address}
                />
            </BasicModal>
            <Confirm
                open={showConfirm}
                onCancel={openCloseConfirm}
                onConfirm={onDelete}
                content="Are you Sure you what to delete address?"
            />
        </>
    )
}
