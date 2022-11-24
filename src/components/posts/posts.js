import "./posts.css";
import Post from "../post/post";


export default function Posts({data}) {
    return (

        <div className="posts">
      
            {data.map((item)=>{
                return <Post title={item.title} user= {item.user_name} stack = {item.stack} description = {item.description}/>
            })}
         
        </div>
  )
          
}






/*export default function Post(props){
    return (
        <div className="cardContainer">
            <div className="postCard">
                <h3>{props.title}</h3>
                <h4>{props.author}</h4>
                <p>{props.projectDescription}</p>
                <h5>{props.languages}</h5>
            </div>
        </div>    
    )
}
*/
