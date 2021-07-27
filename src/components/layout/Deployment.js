import React, { useContext } from 'react'
import PackageContext from '../../context/packageContext/packageContext'

const Deployment = ({job}) => {
    
    const {name, version, host, date_time, status} = job

return (

<div className="flex-table--row">
<span>{name}</span>
<span>{version}</span>
<span>{host}</span>
<span>{date_time}</span>
 <span> <button className={'badge '+ (job.status === "success" ? 'success' : job.status === "processing" ? 'warning' : 'failed')}>
{status} </button>
</span> 
    </div>
)
} 
export default Deployment
