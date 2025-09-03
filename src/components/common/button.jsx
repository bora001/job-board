import React from "react";

export default function Button({ children, isDisabled, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={
        isDisabled
          ? "bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded cursor-pointer"
      }
    >
      {children}
    </button>
  );
}
