import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PostList = (props) => {

  const [postList, setPosList] = useState([]);
  useEffect(() => {
    axios.get('https://react-yazi-yorum.herokuapp.com/posts')
      .then((response) => {
        setPosList(response.data)
      });
  }, []);
  return (

    postList.map((post) => {
      return (
        <div className="ui relaxed divided list">
          <div className="item" key={post.id}>
            <i className="large github middle aligned icon"></i>
            <div className="content">
              <Link to={`post/${post.id}`} className="header">{post.title}</Link>
              <div className="description">{post.created_at}</div>
            </div>
          </div>
        </div>
      );
    })

  )
}

export default PostList
