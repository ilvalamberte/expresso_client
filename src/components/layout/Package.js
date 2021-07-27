import React, { useState } from 'react';
import Modal from '../layout/Modal.js'
import Button from './ModalButton.js'


const Package = ({packages}) => {

    const {name, zone, installed, id} = packages
  
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        
        setShowModal(prev => !prev)
      
    }
    return (
        <div className="flex-table--row">
    
    <span>{name}</span>
        <span>{installed}</span>
        <span>{zone}</span>
       <span>
        <button key={id} onClick={(e) => {openModal()}} className="badge success">Edit</button>
        <Modal key={packages.title} showModal={showModal} setShowModal={setShowModal}></Modal>
        </span>
        </div>
    )
}

export default Package