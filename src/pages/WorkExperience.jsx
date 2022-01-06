import {useEffect,useState} from 'react'
import exprData from '../data/expr.json'

const WorkExperience = () => {
//const [exprData,setExprData] = useState([]);
// useEffect(() => {
//     const getExprData = async () =>{
//         const response = await fetch('../data/expr.json')
//         const data = await response.json()
//         console.log("Response:"+data)
//         setExprData(data)
//     }
//    getExprData()
// }, [])
console.log(exprData)
    return (
        <div className='expr'>
            {exprData.map(data => (<li>{data.company}</li>))}
        </div>
    )
}

export default WorkExperience
