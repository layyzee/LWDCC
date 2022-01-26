import React from "react";

const Button = ({ name }) => {
  // name = "changed name";
  return (
    <div className="mt-2">
      <button className="bg-red-400 text-white px-5 hover:bg-red-700 py-3 rounded-full ">
        {name}
      </button>
    </div>
  );
};

export default Button;
