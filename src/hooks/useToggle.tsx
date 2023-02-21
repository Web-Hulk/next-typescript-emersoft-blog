import { useState } from "react";

const useToggle = (initialState: boolean = false) => {
  const [state, setState] = useState<boolean>(initialState);

  const toggleState = () => {
    setState(!state);
  };

  return { state, toggleState };
};

export default useToggle;
