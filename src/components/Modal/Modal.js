// import React from 'react';
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
// import './Modal.style.css';

// // const customStyles = {
// //   content: {
// //     top: '50%',
// //     left: '50%',
// //     right: 'auto',
// //     bottom: 'auto',
// //     marginRight: '-50%',
// //     transform: 'translate(-50%, -50%)',
// //   },
// // };

// const Apx = () => {
//   let subtitle;
//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function afterOpenModal() {
//     subtitle.style.color = '#f00';
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   return (
//     <div>
//     <button onClick={openModal}>Open Modal</button>
//       <Modal
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//       >
//         <form className =' modal'>
//             <label>Name</label>
//             <input />
//             <label> Email </label>
//             <input />
//             <label>Message</label>
//             <input className='MessageBox'/>
//             <button className='SendButton'>send</button>
//             <button className='CloseButton' onClick={closeModal}>close</button>
//         </form>
//       </Modal>
//     </div>
//   );
// }

// export default Apx;