import React from "react";

function BlogContent(props) {
  console.log(props)
  if(!props.isPublished) {
    //hide unpublished content
    //return null means don't return any unpublished contents here
    return null
  }else{
  return (
  <div id="blog-content">
    <h2>{props.articleText}</h2>
    <p>{props.minutesToRead} minutes to read</p>
    
    </div>
  )

  }
}

export default BlogContent;
