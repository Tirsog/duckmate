import Header from "../header/header";
import "./App.css";
import SearchBarInput from "../searchBarInput/Input";
import Button from "../button/button";
import { useState } from "react";
import NewPost from "../newPost/newPost";
import Posts from "../posts/posts";
import Title from "../title/title";
import poster from "../../fonts_images/background wallpaper.png"

function App() {
  const [search, setSearch] = useState();
  const [data, setData] = useState([])

  function handleSearch(e) {
    let search = e.target.value;
    setSearch(search);
  
  }

  async function handleClick() {
    console.log(search)
    const responseJSON = await fetch(
      `http://localhost:3001/api/post/?stack=${search}`
    );
    const response = await responseJSON.json();
    setData(response.payload)
    console.log(response.payload)
  }
 
  return (
    <div className="app">
      <Header />
      <div className="postsContainer">

        <div className="searchBarContainer">
          
          <Title img = {poster}/>
         
          <SearchBarInput onChange={handleSearch} />
          <Button onClick={()=>{handleClick()}} text="SEARCH" />
        </div>
        <Posts data = {data}/>
      </div>
      {/* second page begins here, maybe make a second component for the next page?  <NewPost />*/}
      <NewPost />
    </div>
  );
}

export default App;
