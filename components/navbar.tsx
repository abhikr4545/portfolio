import Image from "next/image";
import { ModeToggle } from "./theme-toggle";
import { LINKS, InnerLinkType } from "@/constants";

import Logo from "@/assets/main-logo.png";
import Link from "next/link";
import MobileNav from "./mobile-nav";

const Navbar = () => {
  return (
    <nav className="h-[80px] px-4 sm:px-0 w-full flex justify-between items-center mx-auto">
      <div className="flex justify-between items-center w-[1280px] h-[50px] sm:h-[80px] max-w-7xl mx-auto">
        <div>
          <Link href="/">
            <Image
              src={Logo}
              alt="Main Logo"
              className="max-w-full w-[80px] h-[45px]"
            />
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <div className="sm:hidden flex items-center">
            <MobileNav />
          </div>
          <div className="hidden sm:flex gap-4 items-center">
            {
              Object.values(LINKS).map((link: InnerLinkType) => (
                <Link key={link.id} href={link.href}>
                  {link.name}
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;