import React, { Component } from 'react';
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

export default class PostListItem extends Component {

    render() {
        const { label, onDelete, onToggleImportant, onToggleLiked, important, like } = this.props;

        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames += ' important'
        }

        if (like) {
            classNames += ' like'
        }
        return (
            <div className={classNames}>
                <span className="app-list-item-label"
                    onClick={onToggleLiked}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        type="button"
                        className="btn-star btn-sm"
                        onClick={onToggleImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                    <div>
                        <div className="app-list-item-time"><Time /></div>
                        <div className="app-list-item-date"><Data /></div>
                    </div>
                </div>
            </div>
        )
    }
}
