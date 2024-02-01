import Modal from 'react-bootstrap/Modal';
import React from 'react';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='bg-gradient-to-b from-gray-900 via-black to-gray-900 flex flex-col justify-center align-center text-center text-white'>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2 className='text-center'>Booking Form</h2>
                </Modal.Title>

                <form>
                    <div className='flex justify-center gap-3 my-5 align-center'>
                        <label htmlFor="fullName">Full Name:</label>
                        <input
                            type="text"
                            className='border-solid border border-white p-2 rounded-sm bg-transparent text-white'
                        />
                    </div>
                    <div className='flex justify-center gap-5 my-5 align-center'> 
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className='border-solid border border-white p-2 rounded-sm bg-transparent text-white'
                        />
                    </div>
                    <div>
                        <button className='px-3 mx-[20%] md:mx-[40%] py-1 border-solid border-2 border-white hover:bg-white hover:text-black' onClick={props.onHide}>Book Now</button>
                    </div>
                </form>

            </Modal.Body>

        </Modal>
    );
}

function BookingForm() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <button onClick={() => setModalShow(true)} className="px-3 py-2 border-solid border-2 border-white hover:bg-white hover:text-black">
                Book Ticket
            </button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default BookingForm;