import React from "react";
import CollapsableMapper from "./CollapsableMapper";

function Comments(props) {
  return (
    <CollapsableMapper data={props.comments} field="body" />
  );
}
export default Comments;
