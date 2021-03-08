import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPreview.css';
import ReactMarkdown from 'react-markdown';

const BlogPreview = ({ blog }) => {
   
    const cutString = () => {
        const getTitle = (() => {
            const titleRegex = /<!--\s*Title\s*-->(.|\n)*<!--\s*End\s*Title\s*-->/;
            const title = blog?.text?.match(titleRegex);
            return title;
        })();
        const getPreview = (() => {
            const previewRegex = /<!--\s*Preview\s*-->(.|\n)*<!--\s*End\s*Preview\s*-->/;
            const preview = blog?.text?.match(previewRegex)?.[0];
            return preview;
        })();

        if(getTitle && getPreview) return getTitle + getPreview;
       
        return blog?.text?.substring(0, 1000);
    } 

    const grabImageFromTxt = (text) => {
        const imageRegex = /<!--\s*FeaturedImage:\s*.*-->/;
        const featuredImage = text?.match(imageRegex)?.[0];
        if(featuredImage) {
            const beginning = /<!--\s*FeaturedImage:\s*/;
            const end = /\s*-->/;
            const justImgSrc = featuredImage.replace(beginning, "").replace(end, "");
            return justImgSrc !== "(add link)" ? justImgSrc : null;
        }
        return null;
    }

    const createImage = () => {
        const ourSrc = grabImageFromTxt(cutString());
        const noImg = "https://bit.ly/3s0TWIY";
        // console.log(ourSrc, "<-- here")
        const imgStyle = {
            backgroundImage: `url(${ourSrc ? ourSrc : noImg})`
        }
        // console.log(ourSrc, "Our")
        return <div className="preview-image" style={imgStyle}></div>;
    }

    const formatDate = () => {
        
    }
    const blogText = cutString();
    return (
        <div className="blog-preview">
            <Link to={{
                pathname: `/blogs/${blog.date}`,
                state: {
                    blogData: blog.text
                }
            }}>
                <div className="blog-cover">
                    <span>Read More...</span>
                </div>
            </Link>
            <div className="blog-preview-img-holder">
                {createImage()}
            </div>
            <p className="date-created">{blog.date}</p>
            <div className="blog-text">
                <ReactMarkdown skipHtml={true} source={blogText} />
                <div className="text-cover"></div>
            </div>
        </div>
    )
}

export default BlogPreview;