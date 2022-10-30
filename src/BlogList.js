// const BlogList = (props) => {
//     const blogs = props.blogs; // this is receiving the data
//     const title = props.title;

import { Link } from "react-router-dom";

//     const handleDelete = props.handleDelete();
const BlogList = ({blogs, title}) => {

    // console.log(props, blogs);
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                // if we use map we must also have a key property
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}> 
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    </Link>
                    {/* <button onClick={() => handleDelete(blog.id)}>delete blog</button> */}

                </div>
            ))}
        </div>
     );
}
 
export default BlogList;