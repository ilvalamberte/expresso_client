import React , { useContext, useEffect, useState } from 'react';
import PackageState from '../../context/packageContext/packageState.js';
import PackageContext from '../../context/packageContext/packageContext.js'
import Package from '../layout/Package.js'
import Modal from '../layout/Modal.js'


const TablePackage = () => {

    const {getPackages, packages, search} = useContext(PackageContext);


  /*   const outdatedPackages = packages.filter(packages => packages.outdated); */

  const [showModal, setShowModal] = useState(false)

  const [currentVal, setCurrentVal] = useState('');

  const openModal = (e) => {
      
      setShowModal(prev => !prev)
      console.log(e.target.value);
      setCurrentVal(e.target.value);
      console.log(currentVal)
    
  }
    return (
        <div class="flex-table">
                <div class="flex-table--header">
                    <div class="flex-table--categories">
                     
                        <span>Name</span>
                        <span>Version</span>
                        <span>Host</span>
                        <span></span>
                       
                    </div>
                </div>
                <div class="flex-table--body">
        
                
                {search !== null 
                ? search.map(packages => 
                    <div className="flex-table--row">
    
                    <span>{packages.name}</span>
                        <span>{packages.installed}</span>
                        <span>{packages.zone}</span>
                       <span>
                        <button onClick={openModal} className="badge success">Edit</button>
                       
                        </span>
                        </div>)
                : packages.map(packages => 
                    <div className="flex-table--row">
                    <span>{packages.name}</span>
                        <span>{packages.installed}</span>
                        <span>{packages.zone}</span>
                       <span>
                        <button onClick={openModal} value={packages.name} className="badge success">Edit</button>
                        
                        </span>
                        </div>)}
          
        </div>
        <Modal currentVal={currentVal} showModal={showModal} setShowModal={setShowModal}></Modal>
        </div>
        
            )
}
export default TablePackage