import { useState } from "react"
import { Link } from "react-router-dom";
import blogsData from "../api/blogs";
export default function SearchBox() {
    const [searchTerm, setSearchTerm] = useState('');
    const filterBlogs = blogsData.filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return(
        <div>
            <input type="text" className="p-2 w-full border-red-500 border-2 rounded-lg" placeholder="Search blogs" onChange={e => setSearchTerm(e.target.value)} value={searchTerm}/>
            {
                searchTerm && (
                    <ul className="border rounded p-2 w-full " >
                        {filterBlogs.slice(0,2).map(blog => (
                            <Link to={"/blog/" + blog.id} key={blog.id}>
                            <li key={blog.id}
                            className="cursor-pointer hover:bg-gray-100 p-2"
                            >{blog.title}</li>
                            </Link>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}