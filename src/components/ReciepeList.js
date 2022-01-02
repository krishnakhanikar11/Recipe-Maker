import "./ReciepeList.css"
import {Link} from "react-router-dom"

export default function ReciepeList({data1}) {

    if(data1.length===0){
        return <div className="error">No recipes to load...</div>
    }
    
    return (
        <div className="receipe-list">
            {data1.map(receipe => (
                <div key={receipe.id} className="card">
                    <h3 >{receipe.title}</h3>
                    <p>{receipe.cookingTime} to make.</p>
                    <div>{receipe.method.substring(0,100)}...</div>
                    <Link to={`/receipe/${receipe.id}`}>Cook This</Link>
                </div>
            ))}
        </div>
    )
}


