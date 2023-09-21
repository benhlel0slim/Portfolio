import React, { ReactNode } from "react";

function Tag({
  children,
  type = "self-closing",
}: {
  children: ReactNode;
  type?: "opening" | "closing" | "self-closing";
}) {
  return (
    <>
      <span>{type === "closing" ? "</ " : "<"}</span>
      {children}
      <span>{type === "self-closing" ? " />" : ">"}</span>
    </>
  );
}

export default Tag;
