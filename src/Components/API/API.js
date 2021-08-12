import React, { useState, useEffect, useContext } from 'react'
import './API.css'

function API() {
    const [data, setdata] = useState([])
    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        setdata(await response.json())
    }
    useEffect(() => {
        fetchData()
    }, [])

    console.log(data)
    
    function deleteHandler(index) {
        let list = [...data]
        list.splice(index, 1)
        console.log(index)
        setdata(list)
        console.log(list)
    }
    
    const userData = data.map((d,index) => {
        return (
            <div className='card' key={d.id}>
                <h4 style={{ textDecoration: 'underline', textTransform: 'uppercase', textAlign: 'center' }}>Name: {d.name}</h4>
                <p style={{ textAlign: 'center' }}>Username: {d.username}</p>
                <p style={{ textAlign: 'center' }}>Email: {d.email}</p>
                <button onClick={() => deleteHandler(index)}>Delete</button>
            </div>
        )
    })

    return (
        <div className='API'>
            {/* {modal} */}
            <h1>Fetch data using API</h1>
            {userData}
        </div>
    )
}

export default API
