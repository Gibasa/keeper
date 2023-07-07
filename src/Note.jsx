import PropTypes from "prop-types"
function Note(props){
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={()=>{props.deleteItem(props.id)}}>DELETE</button>
        </div>
    )
}

export default Note
Note.propTypes = { title: PropTypes.string, content: PropTypes.string, deleteItem: PropTypes, id: PropTypes.string };
