import "./newPost.css";
import Button from "../button/button.js"
import {useState} from 'react'


export default function NewPost(props) {
    const [name,setName] = useState("")
    const [title,setTitle]=useState("")
    const [des,setDes]=useState("")
    const [stack,setStack]=useState("")
    // const [payload,setPayload]= useState({
    //     user_name : null,
    //     title : null ,
    //     description : null, 
    //     stack: null
    
    // })

    function onChangeName(e){
        let text = e.target.value
        setName(text)

    }
    function onChangeTitle(e){
        let text = e.target.value
        setTitle(text)
    }
    function onChangeDes(e){
        let text = e.target.value 
        setDes(text)

    }
    function onChangeStack(e){
        let text = e.target.value
        setStack(text)
  
    }

    async function onClick(e){
        e.preventDefault()
        let obj = {user_name:name,title:title,description:des,stack:stack}
        // setPayload(obj)
        
        console.log('button clicked')
        await fetch("http://localhost:3001/api/post",{method:'POST',headers:{'accept': 'application/json','content-type':'application/json'},
        body: JSON.stringify(obj)
        })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
       
         
    }
    function clearInput(){

    }
    
  return (
    <div className="newPost">
      <h2 className="newPost-title">New Project</h2>

      <div className="newPost-container">
        <form onSubmit={clearInput}>
          <label> Username: </label>
          <input
            type="text"
            userName="userName"
            placeholder="Username"
            maxlength="20"
            required
            onChange={onChangeName}
          />

          <label> Title: </label>
          <input
            type="text"
            userName="title"
            placeholder="Project Title"
            maxlength="30"
            required
            onChange={onChangeTitle}
          />

          <label> Stack: </label>
          <input
            type="text"
            userName="stack"
            placeholder="Stack"
            maxlength="50"
            required
            onChange={onChangeStack}
          />

          <label> Describe your project: </label>
          <textarea
            userName="description"
            placeholder="Description..."
            maxlength="200"
            required
            onChange={onChangeDes}
          ></textarea>

          <Button className="button" onClick={onClick} />
        </form>
      </div>
    </div>
  );
}





    
   


