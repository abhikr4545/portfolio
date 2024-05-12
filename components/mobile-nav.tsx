import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { InnerLinkType, LINKS } from "@/constants";

import { HamburgerMenuIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon height={25} width={25} />
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader className="mt-10">
        {
          Object.values(LINKS).map((link: InnerLinkType) => (
            <Link target="_blank" key={link.id} href={link.href}>
              <div className="flex items-center gap-2 justify-center">
                {link.name} <ExternalLinkIcon height={12} width={12} />
              </div>
            </Link>
          ))
        }
        </SheetHeader>
      </SheetContent>
    </Sheet>

  )
}

export default MobileNav;