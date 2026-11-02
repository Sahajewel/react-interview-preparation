import { useState } from "react";

export function useToggle(initial = false) {
  const [value, setValue] = useState<boolean>(initial);
  const toggle = () => setValue((prev) => !prev);
  return [value, toggle] as const;
}
