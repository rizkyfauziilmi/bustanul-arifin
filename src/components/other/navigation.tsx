import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";

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
  const scrollToSection = (id: string) => {
    if (id === "home") {
      // scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex items-center justify-between sticky top-0 z-50 backdrop-blur-md border-b px-18 h-16">
      <div className="flex items-center gap-2 flex-1">
        <img src="/logo.png" alt="Logo" width={45} height={45} />
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Bustanul Arifin
        </h3>
      </div>
      <div className="flex-1 flex items-center justify-center">
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
      <div className="flex-1 flex justify-end gap-2">
        <Button>Daftar Sekarang</Button>
        <ModeToggle />
      </div>
    </nav>
  );
};
