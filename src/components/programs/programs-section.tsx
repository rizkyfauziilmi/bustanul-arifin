import { Card, CardContent } from '@/components/ui/card';
import {
  BookOpen,
  GraduationCap,
  Users,
  Home,
  Sprout,
  Target,
  Zap,
  Languages,
  Music,
  BookOpenText,
  LibraryBig,
  Binoculars,
  Flag,
  HandFist,
  BowArrow,
  LandPlot,
  Volleyball,
} from 'lucide-react';

const programData = {
  unggulan: [
    {
      name: "Tahfidz Al-Qur'an",
      icon: <BookOpenText className='w-5 h-5' />,
      description:
        "Program menghafal Al-Qur'an dengan metode modern dan bimbingan ustadz berpengalaman",
    },
    {
      name: 'Takhossus',
      icon: <GraduationCap className='w-5 h-5' />,
      description:
        'Program spesialisasi keahlian khusus untuk mengembangkan bakat dan minat siswa',
    },
    {
      name: 'Kitab Kuning',
      icon: <LibraryBig className='w-5 h-5' />,
      description:
        'Pembelajaran kitab-kitab klasik Islam untuk memperdalam ilmu agama',
    },
    {
      name: 'Bahasa Arab',
      icon: <Languages className='w-5 h-5' />,
      description:
        'Penguasaan bahasa Arab aktif untuk komunikasi dan pemahaman teks keagamaan',
    },
  ],
  keahlian: [
    {
      name: 'Agribisnis Tanaman Pangan dan Hortikultura (ATPH)',
      icon: <Sprout className='w-5 h-5' />,
      description:
        'Kompetensi keahlian SMK IT yang memadukan teknologi modern dengan praktik pertanian berkelanjutan',
    },
  ],
  ekstrakurikuler: [
    { name: 'Pramuka', icon: <Binoculars className='w-5 h-5' /> },
    { name: 'Paskibra', icon: <Flag className='w-5 h-5' /> },
    { name: 'Pencak Silat', icon: <HandFist className='w-5 h-5' /> },
    { name: 'Memanah', icon: <BowArrow className='w-5 h-5' /> },
    { name: 'Futsal', icon: <LandPlot className='w-5 h-5' /> },
    { name: 'Volly', icon: <Volleyball className='w-5 h-5' /> },
    { name: 'Bulu Tangkis', icon: <Zap className='w-5 h-5' /> },
    { name: 'Bahasa Jepang', icon: <Languages className='w-5 h-5' /> },
    { name: 'Hadroh', icon: <Music className='w-5 h-5' /> },
  ],
  kelas: [
    {
      name: 'Kelas Reguler',
      icon: <Users className='w-5 h-5' />,
      description:
        'Program pembelajaran standar dengan kurikulum nasional dan muatan lokal keislaman',
    },
    {
      name: 'Boarding School',
      icon: <Home className='w-5 h-5' />,
      description:
        'Program asrama dengan pembinaan karakter 24 jam dan lingkungan Islami yang kondusif',
    },
  ],
};

export default function ProgramsSection() {
  return (
    <section id='programs'>
      {/* Header */}
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold text-foreground mb-4 text-balance'>
          Program Pendidikan
        </h2>
        <p className='text-lg text-muted-foreground max-w-3xl mx-auto text-pretty'>
          Beragam program unggulan yang menggabungkan pendidikan Islam,
          teknologi modern, dan pengembangan karakter untuk membentuk generasi
          yang beriman, berilmu, dan berkarakter.
        </p>
      </div>

      <div className='space-y-12'>
        {/* Program Unggulan */}
        <div>
          <div className='flex items-center gap-3 mb-6'>
            <div className='w-8 h-8 bg-primary rounded-lg flex items-center justify-center'>
              <BookOpen className='w-5 h-5 text-primary-foreground' />
            </div>
            <h3 className='text-2xl font-semibold text-foreground'>
              Program Unggulan
            </h3>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {programData.unggulan.map((program, index) => (
              <Card
                key={index}
                className='group hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
              >
                <CardContent className='p-6'>
                  <div className='flex items-center gap-3 mb-3'>
                    <div className='w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors'>
                      {program.icon}
                    </div>
                    <h4 className='font-semibold text-card-foreground'>
                      {program.name}
                    </h4>
                  </div>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Kompetensi Keahlian */}
        <div>
          <div className='flex items-center gap-3 mb-6'>
            <div className='w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center'>
              <GraduationCap className='w-5 h-5 text-white' />
            </div>
            <h3 className='text-2xl font-semibold text-foreground'>
              Kompetensi Keahlian (SMK IT)
            </h3>
          </div>
          <Card className='hover:shadow-lg transition-all duration-300'>
            <CardContent className='p-8'>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Sprout className='w-6 h-6 text-green-500' />
                </div>
                <div>
                  <h4 className='text-xl font-semibold text-card-foreground mb-2'>
                    Agribisnis Tanaman Pangan dan Hortikultura (ATPH)
                  </h4>
                  <p className='text-muted-foreground leading-relaxed'>
                    Kompetensi keahlian SMK IT yang memadukan teknologi modern
                    dengan praktik pertanian berkelanjutan, mempersiapkan siswa
                    menjadi entrepreneur di bidang agribisnis dengan wawasan
                    teknologi informasi.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ekstrakurikuler */}
        <div>
          <div className='flex items-center gap-3 mb-6'>
            <div className='w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center'>
              <Target className='w-5 h-5 text-white' />
            </div>
            <h3 className='text-2xl font-semibold text-foreground'>
              Ekstrakurikuler
            </h3>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {programData.ekstrakurikuler.map((ekskul, index) => (
              <Card
                key={index}
                className='group hover:shadow-md transition-all duration-300 hover:-translate-y-1'
              >
                <CardContent className='p-4 text-center'>
                  <div className='w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-500 group-hover:text-white transition-colors'>
                    {ekskul.icon}
                  </div>
                  <h4 className='font-medium text-card-foreground text-sm'>
                    {ekskul.name}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Program Kelas Pilihan */}
        <div>
          <div className='flex items-center gap-3 mb-6'>
            <div className='w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center'>
              <Users className='w-5 h-5 text-white' />
            </div>
            <h3 className='text-2xl font-semibold text-foreground'>
              Program Kelas Pilihan
            </h3>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {programData.kelas.map((kelas, index) => (
              <Card
                key={index}
                className='group hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
              >
                <CardContent className='p-6'>
                  <div className='flex items-center gap-3 mb-3'>
                    <div className='w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors'>
                      {kelas.icon}
                    </div>
                    <h4 className='text-xl font-semibold text-card-foreground'>
                      {kelas.name}
                    </h4>
                  </div>
                  <p className='text-muted-foreground leading-relaxed'>
                    {kelas.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
