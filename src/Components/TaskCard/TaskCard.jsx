
import './TaskCard.css'

const TaskCard = ({title,description,id,deleteTask}) => {

    return (
        <div className='TaskCard'>
            <h1>{title}</h1>
            <p>{description}</p>
            <button onClick={()=>deleteTask(id)}>delete</button>
        </div>
    )
}

export default TaskCard