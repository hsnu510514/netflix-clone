import React from "react";

const ControlButton = ({ size, icon, type, dark, children, ...props }) => {
  let svg;
  switch (icon) {
    case "play":
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size / 4 + "rem"}
          viewBox="0 0 24 24"
          width={size / 4 + "rem"}
          fill="white"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
        </svg>
      );
      break;
    case "play2":
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size / 4 + "rem"}
          viewBox="0 0 24 24"
          width={size / 4 + "rem"}
          fill="black"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
        </svg>
      );
      break;
    case "plus":
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size / 4 + "rem"}
          viewBox="0 0 24 24"
          width={size / 4 + "rem"}
          fill="white"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      );
      break;
    case "check":
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size / 4 + "rem"}
          viewBox="0 0 24 24"
          width={size / 4 + "rem"}
          fill="white"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
        </svg>
      );
      break;
    case "thumbUp":
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size * 2.4 + "px"}
          viewBox="0 0 24 24"
          width={size * 2.4 + "px"}
          fill="white"
        >
          <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
          <path d="M21 8h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2zm0 4l-3 7H9V9l4.34-4.34L12.23 10H21v2zM1 9h4v12H1z" />
        </svg>
      );
      break;
    case "thumbDown":
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size * 2.4 + "px"}
          viewBox="0 0 24 24"
          width={size * 2.4 + "px"}
          fill="white"
        >
          <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
          <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm0 12l-4.34 4.34L12 14H3v-2l3-7h9v10zm4-12h4v12h-4z" />
        </svg>
      );
      break;
    case "arrowDown":
      svg = (
        <svg
          className="text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          height={size / 4 + "rem"}
          viewBox="0 0 24 24"
          width={size / 4 + "rem"}
          fill="white"
        >
          <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
        </svg>
      );
      break;
    case "volumeUp":
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size / 4 + "rem"}
          viewBox="0 0 24 24"
          width={size / 4 + "rem"}
          fill="white"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z" />
        </svg>
      );
      break;
    case "volumeOff":
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size / 4 + "rem"}
          viewBox="0 0 24 24"
          width={size / 4 + "rem"}
          fill="white"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M4.34 2.93L2.93 4.34 7.29 8.7 7 9H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.38.88-2.18 1.11v2.06c1.34-.3 2.57-.92 3.61-1.75l2.05 2.05 1.41-1.41L4.34 2.93zM10 15.17L7.83 13H5v-2h2.83l.88-.88L10 11.41v3.76zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zm-7-8l-1.88 1.88L12 7.76zm4.5 8c0-1.77-1.02-3.29-2.5-4.03v1.79l2.48 2.48c.01-.08.02-.16.02-.24z" />
        </svg>
      );
      break;
    case "info":
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size / 4 + "rem"}
          viewBox="0 0 24 24"
          width={size / 4 + "rem"}
          fill="white"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      );
      break;
    case "back":
      svg = (
        <svg
          enableBackground="new 0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          height={size / 4 + "rem"}
          viewBox="0 0 24 24"
          width={size / 4 + "rem"}
          fill="white"
        >
          <rect fill="none" height="24" width="24" />
          <g>
            <polygon points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12" />
          </g>
        </svg>
      );
      break;

    case "forward":
      svg = (
        <svg
          enableBackground="new 0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          height={size / 4 + "rem"}
          viewBox="0 0 24 24"
          width={size / 4 + "rem"}
          fill="white"
        >
          <g>
            <path d="M0,0h24v24H0V0z" fill="none" />
          </g>
          <g>
            <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
          </g>
        </svg>
      );
      break;

    default:
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size / 4 + "rem"}
          viewBox="0 0 24 24"
          width={size / 4 + "rem"}
          fill="white"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
        </svg>
      );
      break;
  }

  let button = (
    <button
      className={`w-${size} h-${size} flex items-center justify-center rounded-3xl`}
      {...props}
    >
      {svg}
    </button>
  );
  if (type === "text") {
    button = (
      <button
        className={`flex items-center justify-center gap-2 px-8 ${
          dark
            ? "bg-gray-500 bg-opacity-80 text-white hover:bg-opacity-50"
            : "bg-white text-black hover:bg-opacity-70"
        } rounded  text-2xl font-extrabold `}
        {...props}
      >
        {svg}
        {children}
      </button>
    );
  } else if (type === "circle") {
    button = (
      <button
        className={`w-${size} h-${size} flex items-center justify-center border-2 border-white rounded-3xl`}
        {...props}
      >
        {svg}
      </button>
    );
  }

  return button;
};

export default ControlButton;
