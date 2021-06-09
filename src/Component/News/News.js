import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
import Sidebar from '../Sidebar/Sidebar';
import './News.css'

const News = () => {
    const [news, setNews] = useState()
    const [blogs, setBlogs] = useState(6)

    const handleClickNext = () => {
        setBlogs(prevVisibleBlogs => prevVisibleBlogs + 6)
    }

    const handleClickPrevious = () => {
        setBlogs(prevVisibleBlogs => prevVisibleBlogs - 6)
    }

    useEffect(() => {
        fetch('https://api.first.org/data/v1/news ')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 news-bavkground">
                    <div className="row mt-5">
                        {
                            news?.data.slice(0, blogs).map(item => <div className="col-md-4"><Event item={item} key={item.id} ></Event></div>)
                        }
                        <div className="d-block mx-auto">
                            <button type="button" className="btn btn-success mr-4" onClick={handleClickPrevious}>
                                Previous
                            </button>
                            <button type="button" className="btn btn-success px-4" onClick={handleClickNext}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;