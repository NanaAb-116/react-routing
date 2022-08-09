import React from "react";
import { useParams } from "react-router-dom";

function ServicesDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1>{`service details of ${id}`} </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, ea.
      </p>
    </div>
  );
}

export default ServicesDetails;
