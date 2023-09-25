import React from "react";

function VerticalLine({ className }: { className: string }) {
  return (
    <svg
      width={6}
      height={136}
      viewBox="0 0 6 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 0.833333C1.52724 0.833333 0.333333 2.02724 0.333333 3.5C0.333333 4.97276 1.52724 6.16667 3 6.16667C4.47276 6.16667 5.66667 4.97276 5.66667 3.5C5.66667 2.02724 4.47276 0.833333 3 0.833333ZM2.5 3.5L2.5 135.5H3.5L3.5 3.5H2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default VerticalLine;
