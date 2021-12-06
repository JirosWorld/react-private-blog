import React from 'react';
import BlogspotSummery from "../components/BlogspotSummery";
import posts from '../data/posts.json';

const Blogposts = () => {

    console.log(posts);


    return (
        <div className="overview">
            <h2>Blogoverzicht pagina</h2>
            <p>Aantal Blogposts:
                <span className="postsnumber">{posts.length}</span>
            </p>
            <hr/>
            <BlogspotSummery inputArray={posts}/>
        </div>
    );
};

export default Blogposts;