import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default ({ pageContext }) => {
  return (
    <div>
      <div>{documentToReactComponents(pageContext.data, pageContext.contentful_id)}</div>
    </div>
  );
};
