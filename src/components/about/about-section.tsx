import { CalendarClock, Target, Telescope } from 'lucide-react';

const quickInfo = [
  {
    label: 'Sejarah',
    text: 'Pondok Pesantren Tahfidz Yatim Bustanul Arifin berdiri pada tahun 2015 di Sindangkerta, Bandung Barat, atas prakarsa Drs. Dodi Suwandi. Didirikan untuk memberikan pendidikan Islam dan tahfidz Al-Qur’an bagi anak yatim dan dhuafa, pesantren ini tumbuh menjadi lembaga yang menanamkan nilai ikhlas, mandiri, dan berakhlakul karimah, di bawah naungan Nahdlatul Ulama (NU).',
    icon: CalendarClock,
  },
  {
    label: 'Visi',
    text: 'Mencetak generasi Qur’ani yang muttafaqoh fiddin, berjiwa ikhlas, sederhana, mandiri, berukhuwah Islamiyah, dan berperilaku atas dasar Al-Qur’an serta Sunnah Rasulullah SAW.',
    icon: Telescope,
  },
  {
    label: 'Misi',
    lists: [
      'Menyelenggarakan pendidikan tahfidz Al-Qur’an 30 juz yang berkualitas.',
      'Membentuk santri yang berakhlakul karimah, berilmu, dan bertanggung jawab.',
      'Membina kemandirian dan semangat ukhuwah Islamiyah dalam kehidupan sehari-hari.',
      'Menanamkan nilai ikhlas, sederhana, dan peduli sesama dalam diri setiap santri.',
      'Memberikan pendidikan dan kebutuhan hidup gratis bagi anak yatim dan dhuafa.',
    ],
    icon: Target,
  },
];

export const AboutSection = () => {
  return (
    <section id='about'>
      <div className='space-y-12'>
        <div className='flex flex-col md:flex-row md:items-center gap-8'>
          <img
            src='/banner.png'
            alt='About Image'
            className='md:aspect-square aspect-video w-full md:w-80 md:ml-3 rounded-lg transition-transform duration-500 md:[transform:perspective(400px)_rotateY(10deg)] bg-cover object-cover'
          />
          <div className='space-y-4'>
            <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight text-balance'>
              Tentang Kami
            </h1>
            <p className='leading-7 text-justify'>
              Pondok Pesantren Tahfidz Yatim Bustanul Arifin berdiri sejak 2015
              di Sindangkerta, Bandung Barat, di bawah naungan Nahdlatul Ulama
              (NU). Kami berkomitmen mencetak generasi Qur’ani yang berakhlakul
              karimah, mandiri, dan berilmu melalui pendidikan tahfidz Al-Qur’an
              30 juz. Seluruh santri merupakan anak yatim dan dhuafa yang
              mendapatkan pendidikan, asrama, dan kebutuhan hidup secara gratis
              sebagai wujud kepedulian dan pengabdian kami kepada umat.
            </p>
          </div>
        </div>
        <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-4'>
          {quickInfo.map((info) => (
            <div
              key={info.label}
              className='bg-muted p-4 rounded-md space-y-2 text-justify'
            >
              <div className='flex items-center gap-4'>
                <div className='bg-primary p-2 rounded-md text-white'>
                  <info.icon />
                </div>
                <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
                  {info.label}
                </h3>
              </div>
              {info.text && (
                <small className='text-sm leading-none font-medium text-muted-foreground'>
                  {info.text}
                </small>
              )}
              {info.lists && (
                <ul className='ml-4 list-disc [&>li]:mt-2'>
                  {info.lists.map((list, index) => (
                    <li key={index} className='text-sm text-muted-foreground'>
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
