import { Props } from "../enums";

export const Facebook = ({ color = "white" }: Props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 13 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.29999 8V8.5H8.79999H12.2364L11.8764 11.5H8.79999H8.29999V12V23.5H4.49999V12V11.5H3.99999H1.29999V8.5H3.99999H4.49999V8V5.6C4.49999 4.20365 4.87766 2.93322 5.6765 2.01899C6.46522 1.11635 7.71746 0.5 9.59999 0.5H12.3V3.5H10.72C9.85845 3.5 9.19699 3.6359 8.77643 4.05645C8.34956 4.48332 8.29999 5.0769 8.29999 5.6V8Z"
      fill={color}
      stroke={color}
    />
  </svg>
);