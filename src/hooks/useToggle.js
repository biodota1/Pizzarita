import { useState } from "react";

export const useToggle = () => {
  const [status, setStatus] = useState(false);
  const toggleStatus = () => setStatus((prevValue) => !prevValue);
  return { status, toggleStatus };
};
