import React, {useState, useEffect} from 'react'
import './API.css'

function API() {
    const [data, setdata] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const postData = await response.json()
            setdata(postData)
        }
        fetchData()
    }, [])

    console.log(data)

    function deleteHandler () {
        const list = [...data]
        list.splice(list.id,1)
        setdata(list)
    }

    const userData = data.map((index) => {
        return(
            <div className='card' key={index.id}>
                <h4 style={{textDecoration:'underline', textTransform:'uppercase', textAlign:'center'}}>{index.title}</h4>
                <p style={{textAlign:'center'}}>{index.body}</p>
                <button onClick={() => deleteHandler()}>Delete</button>
            </div>
        )
    })

    return (
        <div className='API'>
            <h1>Fetch data using API</h1>
          {userData}
        </div>
    )
}

export default API
