//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Icon, Modal } from "semantic-ui-react";
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import styles from "./FullModal.module.scss";


export const FullModal = (props) => {
    const { children, show, onClose } = props;

    return (
      <Modal open={show} className={styles.fullModal}>
        <Modal.Content>{children}</Modal.Content>
  
        <Icon name="close" className={styles.close} onClick={onClose} />
      </Modal>
    );
}
