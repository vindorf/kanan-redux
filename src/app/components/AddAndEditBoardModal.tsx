import 
{ 
    getAddAndEditBoardModalValue, 
    getAddAndEditBoardModalVariantValue, 
    closeAddAndEditBoardModal
} 
from "../../redux/features/appSlice";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { Modal, ModalBody } from "./Modal";


export default function AddAndEditBoardModal() {
    const modalVariant = useAppSelector(getAddAndEditBoardModalVariantValue);
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector(getAddAndEditBoardModalValue);
    const closeModal = () => dispatch(closeAddAndEditBoardModal());

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal}>
            <ModalBody>
                <p>{modalVariant}</p>
            </ModalBody>
        </Modal>
    )
}