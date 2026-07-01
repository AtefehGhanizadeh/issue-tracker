import { useOutletContext } from "react-router-dom";
import type { HeaderConfig } from "./types";

type ContextType = {
  setHeaderConfig: (config: HeaderConfig) => void;
};

export function useHeader() {
  return useOutletContext<ContextType>();
}