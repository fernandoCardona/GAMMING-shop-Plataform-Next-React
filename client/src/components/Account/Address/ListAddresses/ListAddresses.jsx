//IMPORTS DE REACT/NEXT:
import { useState, useEffect } from "react";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { map } from "lodash";
//IMPORTS DEPENDENCIAS DE LA APP:
import { Address as AddressCtrl } from "@/api";
import { useAuth } from "@/hooks";
//IMPORTS COMPONENTS DE LA APP:
import { Address } from "./Address";
//IMPORTS Styles/Images DE LA APP:
import styles from "./ListAddresses.module.scss";

const addressController = new AddressCtrl();

export const ListAddresses = (props) => {
    const { reload, onReload  } = props;
    const [addresses, setAddresses] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await addressController.getAll(user.id);
                    //console.log(response)
                    setAddresses(response.data);


                } catch (error) {
                        console.error(error);
                }     
            }  
        )()
    }, [ reload ]);

    if(!addresses) return null;

    return (
        <div className={styles.addresses}>
            {map(addresses, (address) => (
                <Address
                    key={address.id}
                    addressId={address.id}
                    address={address.attributes}
                    onReload={onReload}
                />
            ))}
        </div>
    );
}
