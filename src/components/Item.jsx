import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 text-2xl font-semibold">{title}</h1>
      {Links.map((link, index) => (
        <li key={index}>
          <a
            className="text-white hover:text-black duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
