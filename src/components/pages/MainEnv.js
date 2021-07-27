import React, {useState} from 'react';

import Toggle from '../layout/Toggle.js'
import TablePackage from '../layout/TablePackage.js'
import TableHost from '../layout/TableHost.js'
import TableEnv from '../layout/TableEnv.js'
import Navbar from '../layout/Navbar.js'
import Header from '../layout/Header.js'

import RecycleImg from '../../imgs/recycling_2.png'
import { GrHostMaintenance } from 'react-icons/gr'
import { BsCloud } from 'react-icons/bs'
import { FcSearch } from 'react-icons/fc'
import { RiMenuUnfoldLine } from 'react-icons/ri'
import { FcFlowChart } from 'react-icons/fc'
import { FcEnteringHeavenAlive } from 'react-icons/fc'
import Modal from '../layout/Modal.js'


const MainEnv = () => {

    console.log('renders mainenv');
    
    return (
        <div>
        <Navbar />
       <div className="page-content">
           
       <Header />
           <main>
         
       
       <TableEnv />
           </main>
       </div>
       </div>

    )

} 
export default MainEnv