//IMPORTS DE REACT/NEXT:
import { useState, useEffect } from "react";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { add, map } from "lodash";
import classNames from "classnames";
//IMPORTS DEPENDENCIAS DE LA APP:
import { Address } from "@/api";
import { useAuth } from "@/hooks";
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import styles from "./Addresses.module.scss";

const addressController = new Address();

export const Addresses = (props) => {
    //Recuperamos props:
    const { addressSelected, setAddressSelected } = props;
    //Creamos State de Addresses:
    const [addresses, setAddresses] = useState(null);
    //Recuperamos user:
    const { user } = useAuth();

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await addressController.getAll(user.id);
                    setAddresses(response.data);

                } catch (error) {
                    console.error(error);
                }
            }
        )();
    }, []);

    return (
        <div className={styles.addresses}>
        <h2>Addresses</h2>

        {
            map(addresses, (address) => (
                <div key={address.id}
                    onClick={() => setAddressSelected(address)}
                    className={
                        classNames(styles.address, {
                        [styles.active]: address.id === addressSelected?.id,
                        })
                    }
                >
                <p>
                    {address.attributes.name} ({address.attributes.title})
                </p>
                <p>
                    {address.attributes.address}, {address.attributes.postal_code},{" "}
                    {address.attributes.state}, {address.attributes.city}
                </p>
                </div>
            ))
        }
        </div>
    )
}
