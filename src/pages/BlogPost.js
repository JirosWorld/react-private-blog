import React from 'react';
import posts from '../data/posts.json';
import { useParams } from "react-router-dom";


const BlogPost = () => {
    const { blogid } = useParams();
    const currentPost = posts.find((postId)=>{
        return postId.id === blogid;
    });
    console.log(currentPost);
    return (
        <div>
            <p className="postdate">{currentPost.date}</p>
              <h3 className="posttitle">"{currentPost.title}"</h3>
            <p className="postcontent">{currentPost.content}</p>
        </div>
    );
};

export default BlogPost;