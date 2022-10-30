


import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

return (
  <div className="home">
    { error && <div>{ error }</div> }
    { isPending && <div>Loading...</div> }
    { blogs && <BlogList blogs={blogs} /> }
  </div>
);
}

export default Home;

// import BlogList from './BlogList';
// import useFetch from './useFetch';
// // am @ 3:17 of #17
// // interact with the data in the home component directly

// // some end points
// // /blogs GET fetch all Blogs
// // /blogs/{id} GET fetch a single blog
// // /blogs POST add a new blog
// // /blogs/{id} DELETE delete a blog 

// const Home = () => {
//     const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
//     // data: blogs means grab the data but call it blogs
//     // const [blogs, setBlogs] = useState(null);
//     // //     // useState() has the initial values. 
//     // // { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     // // { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     // // { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//     // // ]);
//     // // so that we can edit which blogs we can see

//     // // for the useEffect dependencies
//     // // const[name, setName] = useState('mario');

//     // // const handleDelete = (id) => {
//     // //     const newBlogs = blogs.filter(blog => blog.id !== id)
//     // //     // it does not mutate the data
//     // //     // then update stare
//     // //     setBlogs(newBlogs);
//     // // }
//     // // useEffect runs everytime there is a render of the template
//     // // and anytime the data changes

//     // // for the loading message
//     // const[isPending, setIsPending] = useState(true);
//     // // to delay the loading, we are goin to add timeout

//     // const[error, setError] = useState(null)
//     // // to catch the errors
//     // useEffect(() => {
//     //     setTimeout(() => {
//     //         // to get all the data in database
//     //     fetch(' http://localhost:8000/blogs')
//     //     .then(res => {
//     //         if (!res.ok) {
//     //             throw Error('could not fetch data')
//     //         }
//     //         console.log(res);
//     //         // the ok property means that the fetch property was
//     //         // succesful


//     //         return res.json();
//     //     })
//     //     // after getting the data we get a response object
//     //     .then(data => {
//     //         console.log(data);
//     //         setBlogs(data);
//     //         setIsPending(false);
//     //         setError(null);
//     //     })
//     //     // to catch the errors [all kinds of connection errors]
//     //     // .catch(err => {
//     //         setIsPending(false);
//     //         // console.log(err.message);
//     //         // setError(err.message);
//     //     })
//     // console.log('use effect ran');
//     // // can work with the auntentification 
//     // //console.log(blogs);
//     // // useEffect dependencies when the useEffect is ran not necessarily
//     // // everytime, we only want useEffect to run when name changes 
//     // // so in the array part we only put name
//     // // console.log(name);

    

//     //     }, 1000)
//     // }, [])
    
//     return (  
//         <div className="home">
//             {/* to use the js use the {} */}
//             {/* the following insures that we evaluate what is on the left only when blogs is true, not null */}
//             { error && <div> {error} </div>}
//             {isPending && <div> loading... </div>}
//             {/* the above is the message that we get when info is not yet there */}
//             {blogs && <BlogList blogs={blogs} title="All Blogs" />}
//             {/* <button onClick={() => setName('luigi')}>change name</button>
//             <p> {name }</p> */}
//         </div>
//         // <div className="home">
//         //     {/* if we have n blog items it might be hard so we just circle
//         //     through them. We use the map object*/}
//         //     {/* <BlogList blogs={blogs} title="All blogs"/> */}
//         //     {/* by the above, we just passed blogs to BlogList */}
//         //     {/* <BlogList blogs={blogs.filter((blog => blog.author === 'mario')} title="Mario's Blogs"/>  */}
//         //     {/* only blogs written by mario use the filter method  */}
//         //     {/* this is really useful when using the search */}

//         //     <BlogList blogs={blogs}  title="All Blogs" handle 
//         //     // on #14 just was about to start

//         // </div>
//     );
// }
 
// export default Home;

// // // the following was for trial
// //  const Home = () => {
// //     // sfc is static functional component
// //     const [name, setName] = useState('mario');
// //     // the first is the variable to change then next the function to update
// //     // the variable. 
// //     const [age, setAge] = useState(25);
// //     // use useState for something that could change as we go


// //     // for the click event
// //     const  handleClick = () => {
// //          setName('luigi');
// //          setAge(30);
// //          console.log(name);
// //          }

// //     // const handleclickAgain = (name) => {
// //     //      console.log('hello' + name);
// //     // }
// //     // let name = 'mario'; // to make the value be updated in the template as well
// //     // // we are going to need the hook
// //     // const handleClick = () => {
// //     //     // name = 'luigi';
// //     //     // console.log(name);
// //     // }

    
// //     return (  
// //         <div className="Home">
// //             <h2>Homepage</h2>
// //             {/* for the click events let us create a button */}
// //             <p>{ name } is { age } years old</p>
// //             <button onClick = {handleClick}>Click me</button>
// //             {/* if you put handleClick() then the function witll just be invoked
// //             just by opening the page. to wait for it,  
// //             By using the onClick property*/}
// //             {/* // The above is the same as  */}
// //             {/* <button onClick = {() => {
// //                 console.log('hello'); 
// //                 // also runs only when 
// //                 // fires the function onle when we click on it
// //             }}>Click me again</button> */}
// //         </div>
// //     );
// // } 

