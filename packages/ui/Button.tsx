import * as React from "react";
import "./tailwind.css";
export const Button = () => (
  <div className="bg-red-600 text-orange-500">
    <button onClick={() => alert("boop")}>Boop</button> 
  </div>
);
