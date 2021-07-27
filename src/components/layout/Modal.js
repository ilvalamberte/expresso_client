import React , { useContext, useState, useEffect } from 'react'
import {FcDisclaimer} from 'react-icons/fc'
import {GrFormClose} from 'react-icons/gr'
import { FcSearch } from 'react-icons/fc'
import Toggle from '../layout/Toggle.js'
import PackageContext from '../../context/packageContext/packageContext.js'
import ModalCheckBox from '../../components/layout/ModalCheckBox.js'


const Modal = ({key, showModal, setShowModal, currentVal}) => {

  console.log(showModal)

  useEffect(() => {

  console.log('renders again');
  }, [])

  const {hosts, versions} = useContext(PackageContext);

  console.log(versions);

  const sendObject = () => {
    setShowModal(prev => !prev)
  }


  console.log('renders again');
  
    let iconStyles = { stroke: "white", fontSize: "1.5em" };
    
    return (
            <div>
               {showModal ? 
               <div className="background">
                   <div showModal={showModal} className="flex-container">
                 

  <div class="modalContainer1">
 
  <div class="text2">{currentVal}</div>
 

  <div className="CloseModalButton" aria-label='Close modal' onClick={ () => setShowModal(prev => !prev)}>
                            <GrFormClose style={iconStyles} className="exitButton"/>

  </div>
  </div>
<div className="optionsHolder">


<div class="task-box green">
        <div class="description-task">
      

            <div className="titleModal task-name">Host</div>
    		
        <div class="checkbox-block time">
    {hosts.map(hosts => <ModalCheckBox hosts={hosts} key={hosts.name}/>)}
        </div>
        </div>
      </div>
  
 
  <div class="task-box blue">
  <div className="version task-name">Version</div>
  <div class="drpd">
  <div class="dropdown">
    <select name="one" class="dropdown-select">
 
      {versions.map(version =>  
       <option value="1">{version}</option>
        )}

    </select>
  </div>
  <div class="toggles">

<Toggle version="Latest version"/>
<Toggle version="Previous version"/>
</div>
  </div>
  </div>

  <div class="modFooter">
  <button className="badge success" onClick={sendObject}>Deploy</button>
  </div>
  </div>
               </div>
            </div>
        : null}
        
     </div>
    )
}

export default Modal