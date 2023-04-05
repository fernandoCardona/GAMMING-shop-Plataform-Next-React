//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Modal } from "semantic-ui-react";
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:



export const BasicModal = (props) => {
    const { children, show, onClose, title } = props;
  
    return (
      <Modal open={show} onClose={onClose} size="small">
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>{children}</Modal.Content>
      </Modal>
    );
}
