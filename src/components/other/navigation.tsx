import { scrollToSection } from "@/lib/dom";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const links = [
  {
    label: "Beranda",
    id: "home",
  },
  {
    label: "Tentang Kami",
    id: "about",
  },
  {
    label: "Biaya Pendidikan",
    id: "tuition",
  },
  {
    label: "Fasilitas",
    id: "facilities",
  },
  {
    label: "Program",
    id: "programs",
  },
  {
    label: "Pendaftaran",
    id: "registration",
  },
];

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between sticky top-0 z-50 backdrop-blur-md border-b lg:px-18 px-4 h-16">
      <div className="flex items-center gap-2 flex-1">
        <img src="/logo.png" alt="Logo" width={45} height={45} />
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Bustanul Arifin
        </h3>
      </div>
      <div className="flex-1 lg:flex items-center justify-center hidden">
        {links.map((link) => (
          <Button
            variant="link"
            key={link.id}
            className="text-foreground hover:text-primary cursor-pointer"
            onClick={() => scrollToSection(link.id)}
          >
            {link.label}
          </Button>
        ))}
      </div>
      <div className="flex-1 hidden lg:flex justify-end gap-2">
        <Button onClick={() => scrollToSection("registration")}>
          Daftar Sekarang
        </Button>
        <ModeToggle />
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button size="icon" className="lg:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu Navigasi</SheetTitle>
            <SheetDescription>
              Telusuri halaman dengan mudah melalui menu navigasi ini.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-4 px-2">
            {links.map((link) => (
              <Button
                key={link.id}
                onClick={() => {
                  setOpen(false);
                  scrollToSection("registration");
                }}
              >
                {link.label}
              </Button>
            ))}
            <ModeToggle fullWidth />
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
