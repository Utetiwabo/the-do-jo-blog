import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    //to store the data that the user is entering
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    // for the loading while we wait to add the item
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {
        // to preventing the adding button refereshing the page
        e.preventDefault();
        // when we are using the j-son server, we do not need the id. it will automatically give it
        const blog = {title, body, author};
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            // here the new blog is posted and json server adds the id as well
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            /// history.go(-1);
            // the above takes you back a step

            //redirecting back to home
            history.push('/');
        })
        
        
    }
    return ( 
        <div className="create">
            <h2> Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label> Blog title:</label>
                <input type="text" 
                required
                value={title}
                // so that we can change title when we want to
                onChange={(e) => setTitle(e.target.value)}
                />
                <label> Blog body:</label>
                <textarea 
                required
                value = {body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label> Blog author:</label>
                <select
                    value = {author}
                    onChange= {(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>AddBlog</button>}
                {isPending && <button disabled>Adding blog...</button>}
                {/* to trace */}
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;
