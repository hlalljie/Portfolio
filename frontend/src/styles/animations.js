import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const comeFromLeft = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;
