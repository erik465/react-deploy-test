import React from 'react'
import { StyledTask, StyledContent, CompleteStatus } from './Task.styled'
import { FaCheck, FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function truncateString(str, limit) {
  if (str.length <= limit) {
    return str;
  } else {
    return str.slice(0, limit) + '...';
  }
}

const Task = (props) => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <StyledTask onClick={openModal}>
      <p>{props.title}</p>
      <StyledContent>{truncateString(props.content, 150)}</StyledContent>
      <CompleteStatus completed={props.completed}>
        <p>{props.completed ? 'Completed' : 'Not completed'}</p>
        {props.completed ? <FaCheck color="green" size={24} /> : <FaTimes color="red" size={24} />}
      </CompleteStatus>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
      </Modal>

    </StyledTask>
  )
}

export default Task
