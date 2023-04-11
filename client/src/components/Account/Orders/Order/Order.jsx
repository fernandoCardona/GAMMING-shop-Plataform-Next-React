//IMPORTS DE REACT/NEXT:
import { useState } from "react";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Image } from "semantic-ui-react";
import { DateTime } from "luxon";
import { forEach, map } from "lodash";
//IMPORTS DEPENDENCIAS DE LA APP:
import { fn } from "@/utils";
//IMPORTS COMPONENTS DE LA APP:
import { BasicModal } from "@/components/Shared";
//IMPORTS Styles/Images DE LA APP:
import styles from "./Order.module.scss";


export const Order = ( props ) => {
    //Extraemos props:
    const { order } = props;
    //Creamos el State para el Modal:
    const [showModal, setShowModal] = useState(false);

    //Extraemos los datos a mostrar:
    const createdAt = new Date(order.attributes.createdAt).toISOString();
    const products = order.attributes.products;
    const address = order.attributes.addressShipping;

    //funcion apertura y cierre del modal:
    const openCloseModal = () => setShowModal((prevState) => !prevState);

    //funcion que obtiene el totaal de todos los productos:
    const getTotalProducts = () => {
        let total = 0;
    
        forEach(products, (product) => {
          total += product.quantity;
        });
    
        return total;
    };

    return (
        <>
            <div className={styles.order} onClick={openCloseModal}>
                <div>
                <span>
                    {DateTime.fromISO(createdAt, { locale: "es" }).toFormat(
                    "dd/MM/yyyy"
                    )}
                </span>
                <p>{getTotalProducts()} productos</p>
                </div>

                <p>{order.attributes.totalPayment.toFixed(2)}€</p>
            </div>

            <BasicModal
                show={showModal}
                onClose={openCloseModal}
                title="Información del pedido"
            >
                {
                    map(products, (product) => (
                    <div className={styles.product}>
                        <Image src={product.attributes.cover.data.attributes.url} />

                        <div>
                        <div className={styles.info}>
                            <div>
                            <p>{product.attributes.title}</p>
                            <p>{product.attributes.platform.data.attributes.title}</p>
                            </div>
                        </div>
                        <div className={styles.quantity}>
                            <span>x{product.quantity}</span>
                            <span>
                            {
                                fn.calcDiscountedPrice(
                                    product.attributes.price,
                                    product.attributes.discount
                                )
                            }
                            €
                            </span>
                        </div>
                        </div>
                    </div>
                    ))
                }

                <div className={styles.address}>
                    <div>
                        <p className={styles.title}>{address.attributes.title}</p>
                        <p className={styles.addressInfo}>
                            {address.attributes.name}, {address.attributes.address},{" "}
                            {address.attributes.state}, {address.attributes.city},{" "}
                            {address.attributes.postal_code}
                        </p>
                    </div>
                </div>

                <div className={styles.total}>
                    <p>TOTAL: {order.attributes.totalPayment.toFixed(2)}€</p>
                </div>
            </BasicModal>
        </>
  );
}