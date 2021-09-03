 const Comment = (props, key) => {
    const {name, text} = props
    return(
        <div className="comment__item" key={key}>
            <div className="comment__item__name">{name}</div>   
            <div className="comment__item__text">{text}</div>
        </div>       
    )
}

export default Comment