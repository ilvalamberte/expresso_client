import {
    GET_PACKAGES,
    GET_JOBS,
    SEARCH_PACKAGES,
    CLEAR_SEARCH
} from '../types.js'

export default (state, {type, payload}) => {
    switch (type) {
    
        case SEARCH_PACKAGES :
            const reg = new RegExp(`${payload}`, 'gi')
            return {
                ...state,
                search: state.packages.filter(pack => pack.name.match(reg))
            }

        case CLEAR_SEARCH:
            return {
            ...state,
            search: null
            }

        
        case GET_PACKAGES:
            return {
                ...state,
                packages:payload
            }
        case GET_JOBS:
            return {
                ...state,
                jobs:payload
            }
            default:
                return state
    }
}