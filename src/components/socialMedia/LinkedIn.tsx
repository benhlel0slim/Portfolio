import React from "react";

function LinkedIn({ className }: { className: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_387_33)">
        <path
          d="M11.8105 13.5303H8.88672V22.8877H11.8105V13.5303Z"
          fill="#CDD3D8"
        />
        <path
          d="M10.2871 9.1123C9.20898 9.1123 8.5 9.80957 8.5 10.7354C8.5 11.6436 9.18555 12.3584 10.2461 12.3584H10.2695C11.3711 12.3584 12.0566 11.6377 12.0508 10.7354C12.0273 9.80957 11.3652 9.1123 10.2871 9.1123Z"
          fill="#CDD3D8"
        />
        <path
          d="M19.7969 13.4424C18.1211 13.4424 17.0723 14.3564 16.8789 15.001V13.5303H13.5918C13.6328 14.3096 13.5918 22.8877 13.5918 22.8877H16.8789V17.8311C16.8789 17.5439 16.8672 17.2627 16.9492 17.0635C17.1719 16.501 17.6582 15.915 18.5312 15.915C19.6738 15.915 20.1895 16.7822 20.1895 18.0479V22.8877H23.5059V17.6846C23.5059 14.79 21.877 13.4424 19.7969 13.4424Z"
          fill="#CDD3D8"
        />
      </g>
      <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#CDD3D8" />
      <defs>
        <clipPath id="clip0_387_33">
          <rect
            width="15"
            height="13.7754"
            fill="white"
            transform="translate(8.5 9.1123)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default LinkedIn;
