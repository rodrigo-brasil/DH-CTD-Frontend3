import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect , useState } from 'react'

export default function NotFound() {
    const navigate = useNavigate()
    const [count, setCount] = useState(5)

    useEffect(()=>{
        setTimeout(()=> {navigate('/')},5000);

        const intervalId = setInterval(() => {
            console.log("-1")
            setCount(count => --count)
        }, 1000);

        return ()=> clearInterval(intervalId)
    },[])

    return (
        <div className="container">
            <h1>404</h1>
            <h3>Page not found</h3>
            <h5><span>Retornando a página inicial: </span> {count}</h5>
        </div>
    )
}
