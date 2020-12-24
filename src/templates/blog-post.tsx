import React from "react";

export default ({ pageContext }) => {
  return (
    <div>
      <div>{(pageContext.data.content.raw)}</div>
    </div>
  );
};
