import {useSelector} from 'react-redux'
import Comment from './Comment'

export const Comments = () => {    
    const comment = useSelector(store => store.comments.comment)
    return(        
            <div className="comment__items" id="comment__view">
                {comment.map((c, i) => <Comment {...c} key={i}/>)}         
            </div>
        )
}