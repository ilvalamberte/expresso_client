import React, {useState, useEffect} from 'react'

import axios from 'axios'

const DataFetch1 = () => {

    const [data, setData] = useState([]);

    useEffect( ()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then (response => {
            setData(response.data);
            console.log(response.data)
        })

    }, [])

    return (
        <div>

    {data.map(data => <div>{data.title}</div>)}
    {data.map(data => <div>{data.userId}</div>)}
    {data.map(data => <div>{data.body}</div>)}
    {data.map(data => <div>{data.title}</div>)}



        </div>
    )

}

export default DataFetch1

