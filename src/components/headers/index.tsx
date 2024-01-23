"use client"
import { useIsMobile } from "@lib/hooks";
import MobileHeader from "./mobile-header/mobile-header";
import DesktopHeader from "./desktop-header/desktop-header";

const Header = () => {
  const { isMobile } = useIsMobile();

  return <div>{isMobile ? <MobileHeader /> : <DesktopHeader />}</div>;
};

export default Header;
