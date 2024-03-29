"use client";
import React from "react";

export interface NoSsrProps {
  /**
   * 子组件
   */
  children: React.ReactNode;
  /**
   * 是否延迟 @default false
   */
  defer?: boolean;
  /**
   * 占位内容 @default null
   */
  fallback?: React.ReactNode;
}

const useEnhancedEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export default useEnhancedEffect;

export const NoSsr: React.FC<NoSsrProps> = (props) => {
  const { children, defer = false, fallback = null } = props;
  const [mountedState, setMountedState] = React.useState(false);

  useEnhancedEffect(() => {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);

  React.useEffect(() => {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]);

  return <React.Fragment>{mountedState ? children : fallback}</React.Fragment>;
};
