import React from "react";

const Article = ({ title, body, onDelete }) => {
  return (
    <div className='article-container mx-auto max-w-3xl bg-gray-light text-["#333"] p-8 my-8 rounded-lg shadow-md'>
      <h2 className="text-3xl font-bold font-inter mb-6">{title}</h2>
      <p className="text-grey-dark font-sans mb-8 ">{body}</p>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold font-script">Author: Ahmed</p>
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-yellow text-white rounded hover:bg-yellow focus:outline-none"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Article;
