import axios from 'axios'
import React, { useReducer } from 'react'
import PackageContext from './packageContext.js'
import PackageReducer from './packageReducer.js'

import {
    GET_PACKAGES,
    GET_JOBS,
    SEARCH_PACKAGES,
    CLEAR_SEARCH
} from '../types.js'

const PackageState = (props) => {
    const initialState = {
        search: null,
        packages: [
            {
                zone: "1",
                name: "nora-service-aat-integration",
                installed: "1.0.1-osianized",
                available:"true",
                outdated:"false"

            },
            {
                zone: "3",
                name: "robo-portfolio-generator",
                installed: "0.0.87-master",
                available:"true",
                outdated:"false"
            },
            {
                zone: "0",
                name: "oet-service-morningstar-integration",
                installed: "1.0.0-static_final",
                available:"true",
                outdated:"true"
            },
            {
                zone: "0",
                name: "oet-service-morningstar-integration",
                installed: "1.0.0-static_final",
                available:"true",
                outdated:"true"
            },
        ],
        jobs: [
            {
                id:"1",
                name: "nora-service-aat-integration",
                version: "1.0.15-develop",
                host: "10.158.95.27",
                date_time: "3 Mar 2021 16:33",
                status: "processing"
            },
            {
                id:"2",
                name: "nora-service-aat-integration",
                version: "1.0.15-develop",
                host: "10.158.95.27",
                date_time: "3 Mar 2021 16:33",
                status: "failed"
            },
            {
                id:"3",
                name: "nora-service-aat-integration",
                version: "1.0.15-develop",
                host: "10.158.95.27",
                date_time: "3 Mar 2021 16:33",
                status: "success"
            },
            {
                id:"4",
                name: "nora-service-aat-integration",
                version: "1.0.15-develop",
                host: "10.158.95.27",
                date_time: "3 Mar 2021 16:33",
                status: "failed"
            },
            {
                id:"5",
                name: "nora-service-aat-integration",
                version: "1.0.15-develop",
                host: "10.158.95.27",
                date_time: "3 Mar 2021 16:33",
                status: "failed"
            },
            {
                id:"6",
                name: "nora-service-aat-integration",
                version: "1.0.15-develop",
                host: "10.158.95.27",
                date_time: "3 Mar 2021 16:33",
                status: "processing"
            },
            {
                id:"7",
                name: "nora-service-aat-integration",
                version: "1.0.15-develop",
                host: "10.158.95.27",
                date_time: "3 Mar 2021 16:33",
                status: "failed"
            },
            {
                id:"8",
                name: "nora-service-aat-integration",
                version: "1.0.15-develop",
                host: "10.158.95.27",
                date_time: "3 Mar 2021 16:33",
                status: "success"
            },

        ],
        hosts : [
            {
                name: "0"
            },
            {
                name: "1"
            },
            {
                name: "2"
            },
            {
                name: "3"
            },
            {
                name: "4"
            },
            {
                name: "5"
            }
        ],
        zones: [
            {
                name: "dev"
            },
            {
                name: "local"
            },
            {
                name: "osia"
            },
            {
                name: "prepod"
            },
            {
                name: "prod"
            },
            {
                name: "tech"
            },
            {
                name: "tech"
            },

        ],
        versions: [ "dev 1.2.13", "osia-224.14", "v.13.222"],

    }
    const [state, dispatch] = useReducer(PackageReducer, initialState)



    const searchPackages = (packages) => {
        dispatch ({
            type: SEARCH_PACKAGES,
            payload:packages
        })

    }

    const clearSearch = () => {
        dispatch ({
            type: CLEAR_SEARCH,
         
        })
    }

    const getPackages = async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
            dispatch ({
                type: GET_PACKAGES,
                payload: res.data
            })
        } catch(err) {
            console.log(err)
        }

    }

    const getJobs = async () => {
        try {
            const res = axios.get('https://jsonplaceholder.typicode.com/comments')
            dispatch ({
                type: GET_JOBS,
                payload: res.data
            })
        } catch (err) {
            console.log(err)
        }
    }

    
    return (
            <PackageContext.Provider value={{
                packages:state.packages,
                search:state.search,
                jobs:state.jobs,
                hosts:state.hosts,
                zones:state.zones,
                navstate:state.navstate,
                versions : state.versions,
                getPackages,
                searchPackages,
                clearSearch
            }}>{props.children}</PackageContext.Provider> 
    )
}

export default PackageState