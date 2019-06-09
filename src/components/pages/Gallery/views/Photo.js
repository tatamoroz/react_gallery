import React from 'react';

function Photo(props) {

    const { urls: { thumb }, updated_at, alt_description, likes } = props.data;

    const renderDate = () => {
        const date = new Date(updated_at);
        return date.toLocaleDateString('ru-RU');
    }

    return (
        <div className="photo">
        <span>{likes}</span>
        <i>{renderDate()}</i>
            <img src={thumb} alt={alt_description} />
            <p>{alt_description}</p>
        </div>
    );
}

export default Photo;
