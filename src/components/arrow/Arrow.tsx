import React from "react";

function Arrow({ className }: { className: string }) {
  return (
    <svg
      width="25"
      height="14"
      viewBox="0 0 25 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22.2566 0.712091C22.6431 0.313833 23.2747 0.290472 23.6896 0.659086C24.1313 1.05144 24.1565 1.73291 23.745 2.15682L13.6852 12.5214C12.8996 13.3308 11.6004 13.3308 10.8149 12.5214L0.754957 2.15682C0.343504 1.73291 0.368712 1.05144 0.810361 0.659086C1.22529 0.290472 1.85686 0.313832 2.24342 0.712091L10.8149 9.54293C11.6005 10.3523 12.8995 10.3523 13.6851 9.54293L22.2566 0.712091Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Arrow;
