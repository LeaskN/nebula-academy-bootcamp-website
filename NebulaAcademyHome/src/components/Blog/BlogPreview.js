import React from 'react';
import { Link } from 'react-router-dom';
import { cutString, createImage } from './SharedBlogFunctions';
import Markdown from 'markdown-to-jsx';
import './BlogPreview.css';

const BlogPreview = ({ blog }) => {
    const blogText = cutString(blog);
    return (
        <div className="blog-preview">
            <Link to={{
                pathname: `/blog/${blog?.id}/${blog?.date}`,
                state: {
                    blogData: blog?.text
                }
            }}>
                <div className="blog-cover">
                    <span>Read More...</span>
                </div>
                <div className="blog-preview-img-holder">
                    { createImage(blog, "preview-image") }
                </div>
            </Link>
            <p className="date-created">{blog?.date}</p>
            <div className="blog-text">
                <Markdown>
                    { blogText ? blogText : "" }
                </Markdown>
                <div className="text-cover"></div>
            </div>
        </div>
    )
}

export default BlogPreview;