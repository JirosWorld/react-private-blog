import React from 'react';
// import posts from "../data/posts.json";
import {Link} from "react-router-dom";

const BlogspotSummery = (props) => {
    const array = props.inputArray;
    console.log(array);
    console.log(array[1]);
    return (
        <ul>
            {array.map((item) => {
                const link = `/post/${item.id}`
                return<li key={item.id}>
                    <Link to={link}>
                        {item.id} :
                        {item.date} -----
                        {item.title}
                    </Link>
                </li> })}
        </ul>
    );
};

export default BlogspotSummery;