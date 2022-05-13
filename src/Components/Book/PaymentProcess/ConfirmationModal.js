import React from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

const ConfirmationModal = ({ modalIsOpen, closeModal }) => {
    let history = useHistory()
    const handleAllOrders =()=>{
        history.push('/dashBoard/allOrders')
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="confirm-box">
                    <span className='confirm-icon'> &#10003; </span>
                    <h3>Congratulation</h3>
                    <h5>Your Booking is Confirmed</h5>
                </div>
                <div className='text-center text-white'>
                    <button onClick={closeModal} className='btn support-btn px-3 me-3'>Close</button>
                    <button onClick={handleAllOrders} className='btn support-btn px-3'>See All Orders</button>
                </div>
            </Modal>
        </div>
    );
};

export default ConfirmationModal;