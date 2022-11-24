import "./post.css";
import BlogImage from "../images/blogImage";
import '../images/blogImage.css';



function Post(props) {
  return (
    <div className="post">
      <BlogImage />

      <div className="postInfo">
        <div className="postCategories">
        </div>
        <div className="postTitle">{props.title}<span className="userStyle"> - by {props.user} </span></div>
      </div>
      <p className="postDes">{props.description}</p>
          <span className="postCat"><span className="stack"> Stack: </span>{props.stack}</span>
          <p></p>
    </div>
  );
}

export default Post;