import React from "react"
import { useState, useEffect } from "react"
import "./blog.css"
import BlogCard from "../components/BlogCard"
function Blog() {
    const [blogs, setBlogs] = useState([])
    const fetchData = async () => {
        try {
            const res = await fetch("http://localhost:3000/data/blogData.json");
            const data = await res.json();
            setBlogs(data)
        }
        catch {
            console.err("Error", Error)
        }


    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <section id="blogs" className="blogs">
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title">our Blog</h4>
                </div>
                <div className="row mt-5">
                    {blogs.length > 0 && blogs.map((blog) => {
                        return <BlogCard key={blog._id} blog={blog} />
                    })}
                </div>
            </div>

        </section>
    )
}

export default Blog