import { CalendarClock, Target, Telescope } from "lucide-react";

const quickInfo = [
  {
    label: "Sejarah",
    text: "Didirikan pada tahun 1990, Bustanul Arifin telah berkembang dari sebuah madrasah kecil menjadi salah satu lembaga pendidikan Islam terkemuka di wilayah ini. Dengan komitmen terhadap kualitas pendidikan dan nilai-nilai keislaman, sekolah ini telah mencetak ribuan lulusan yang sukses di berbagai bidang.",
    icon: CalendarClock,
  },
  {
    label: "Visi",
    text: "Menjadi lembaga pendidikan Islam terkemuka yang mengintegrasikan ilmu pengetahuan dan nilai-nilai keislaman untuk mencetak generasi unggul.",
    icon: Telescope,
  },
  {
    label: "Misi",
    lists: [
      "Menyediakan pendidikan berkualitas yang berlandaskan nilai-nilai Islam.",
      "Mendorong pengembangan karakter dan akhlak mulia pada setiap siswa.",
      "Mengintegrasikan teknologi dalam proses pembelajaran untuk meningkatkan efektivitas dan efisiensi.",
    ],
    icon: Target,
  },
];

export const AboutSection = () => {
  return (
    <section id="about">
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <img
            src="/hero-image.jpg"
            alt="About Image"
            className="md:aspect-square aspect-video w-full md:w-80 md:ml-3 rounded-lg transition-transform duration-500 md:[transform:perspective(400px)_rotateY(10deg)]"
          />
          <div className="space-y-4">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
              Tentang Kami
            </h1>
            <p className="leading-7 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              adipisicing elit. Consectetur iure quis minima! Quasi officia
              fugit, libero eius corrupti nihil facilis dolores nobis expedita
              sequi, maxime unde quas cupiditate a hic est quibusdam magni!
              Similique obcaecati molestiae ut, aspernatur, quos at nam.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
          {quickInfo.map((info) => (
            <div key={info.label} className="bg-muted p-4 rounded-md space-y-2">
              <div className="flex items-center gap-4">
                <div className="bg-primary p-2 rounded-md text-white">
                  <info.icon />
                </div>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  {info.label}
                </h3>
              </div>
              {info.text && (
                <small className="text-sm leading-none font-medium text-muted-foreground">
                  {info.text}
                </small>
              )}
              {info.lists && (
                <ul className="ml-4 list-disc [&>li]:mt-2">
                  {info.lists.map((list, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      {list}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
