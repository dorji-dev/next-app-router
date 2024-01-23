import { useEffect, useState } from "react";

/**
 * Check if the device-width < 768px
 */
export function useIsMobile(): { isMobile: boolean; checkingWidth: boolean } {
  const [isMobile, setIsMobile] = useState(false);
  const [checkingWidth, setCheckingWidth] = useState(true);

  useEffect(() => {
    const mediaWatcher = window.matchMedia("(max-width: 1024px)");
    setIsMobile(mediaWatcher.matches);
    setCheckingWidth(false);

    function updateIsNarrowScreen(e: MediaQueryListEvent) {
      setIsMobile(e.matches);
    }

    mediaWatcher.addEventListener("change", updateIsNarrowScreen);

    return function cleanup() {
      mediaWatcher.removeEventListener("change", updateIsNarrowScreen);
    };
  }, []);

  return { isMobile, checkingWidth };
}
