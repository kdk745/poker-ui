import React from "react";
import CollapsableMapper from "./CollapsableMapper";

function Contacts(props) {
  return (
    <CollapsableMapper data={props.contacts} field="name" />
  );
}
export default Contacts;
