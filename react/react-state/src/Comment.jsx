import { useState } from "react"
import CommentsForm from "./CommentForm";
import "./Comment.css"
export default function Comment(){
    let [comments,setComments]=useState([{
        userName:"@sa",
        remarks:"good job",
        rating:4,
    }]);

    let addNewComment=(comment)=>{
        setComments((currComment)=>[...currComment,comment])
    };

    return(
        <div>
            <h3>All Comments!</h3>
            {comments.map((comment,idx)=>(
                // console.log(comment);
                
            <div className="comment" key={idx}>
                <span>{comment.remarks}</span>
                &nbsp;
                <span>(rating = {comment.rating})</span>
                <p>- {comment.userName}</p>
            </div>
            ))}
            
            <CommentsForm addNewComment={addNewComment}></CommentsForm>
        </div>
    )
}