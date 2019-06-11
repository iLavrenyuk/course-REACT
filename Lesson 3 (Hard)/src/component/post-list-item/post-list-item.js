import React from 'react';
import './post-list-item.css';

const date = new Date()

const Data = () => {
    const datePost = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
    return (datePost)
};

const Time = () => {
    const time = new Date();

    let hours = time.getHours(),
        minutes = time.getMinutes();

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    return (
        `${hours}:${minutes}`
    )
};

const PostListItem = () => {
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                Hello World!
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button
                    type="button"
                    className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
                <div>
                    <li className="app-list-item-time"><Time /></li>
                    <li className="app-list-item-date"><Data /></li>
                </div>
            </div>
        </li>
    )
}

export default PostListItem;