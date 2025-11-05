import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Clock,
  BookOpen,
  Users,
  Award,
  Heart,
} from 'lucide-react';
import Facebook from '../svgs/facebook';
import Instagram from '../svgs/instagram';
import YouTube from '../svgs/youtube';
import WhatsApp from '../svgs/whatsapp';
import { scrollToSection } from '@/lib/dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Beranda', id: 'hero' },
    { name: 'Tentang Kami', id: 'about' },
    { name: 'Biaya Pendidikan', id: 'tuition' },
    { name: 'Fasilitas', id: 'facilities' },
    { name: 'Program', id: 'programs' },
    { name: 'Pendaftaran', id: 'registration' },
  ];

  const programs = [
    { name: "Tahfidz Al-Qur'an", icon: <BookOpen className='w-4 h-4' /> },
    { name: 'Takhossus', icon: <Award className='w-4 h-4' /> },
    { name: 'ATPH', icon: <Users className='w-4 h-4' /> },
    { name: 'Boarding School', icon: <Heart className='w-4 h-4' /> },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <Facebook className='w-5 h-5' />,
      link: 'https://facebook.com/smkitbustanularifin',
    },
    {
      name: 'Instagram',
      icon: <Instagram className='w-5 h-5' />,
      link: 'https://instagram.com/tahfidzbustanularifin',
    },
    {
      name: 'YouTube',
      icon: <YouTube className='w-5 h-5' />,
      link: 'https://youtube.com/@smkitbustanularifin',
    },
    {
      name: 'WhatsApp',
      icon: <WhatsApp className='w-5 h-5' />,
      link: 'https://wa.me/6285777198308',
    },
  ];

  return (
    <footer className='bg-muted/30 border-t border-border'>
      <div className='max-w-7xl mx-auto px-4 py-12'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
          {/* School Info */}
          <div className='space-y-4'>
            <div>
              <h3 className='text-2xl font-bold text-foreground mb-2'>
                SMK IT Bustanul Arifin
              </h3>
              <Badge variant='secondary' className='mb-4'>
                <Award className='w-3 h-3 mr-1' />
                Terakreditasi B
              </Badge>
            </div>
            <p className='text-muted-foreground text-sm leading-relaxed'>
              Sekolah Menengah Kejuruan Islam Terpadu yang mengintegrasikan
              pendidikan agama, umum, dan kejuruan untuk membentuk generasi yang
              berakhlak mulia dan kompeten.
            </p>
            <div className='flex items-center gap-2 text-sm text-muted-foreground'>
              <Clock className='w-4 h-4' />
              <span>
                PPDB {currentYear}/{currentYear + 1} Dibuka
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-foreground'>
              Menu Utama
            </h4>
            <ul className='space-y-2'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Button
                    variant='link'
                    onClick={() => scrollToSection(link.id)}
                    className='text-foreground cursor-pointer hover:text-primary'
                  >
                    <ExternalLink className='w-3 h-3' />
                    {link.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-foreground'>
              Program Unggulan
            </h4>
            <ul className='space-y-2'>
              {programs.map((program, index) => (
                <li
                  key={index}
                  className='flex items-center gap-2 text-sm text-muted-foreground'
                >
                  <div className='text-primary'>{program.icon}</div>
                  {program.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-foreground'>
              Kontak Kami
            </h4>
            <div className='space-y-3'>
              <a
                href='https://maps.app.goo.gl/AuxLd1oGAXUeqPeA8'
                target='_blank'
                className='cursor-pointer group flex items-start gap-3 text-sm'
              >
                <MapPin className='w-4 h-4 text-primary mt-0.5 flex-shrink-0' />
                <div>
                  <p className='text-muted-foreground transition-colors duration-300 group-hover:text-primary leading-relaxed'>
                    Jl. Sindangkerta - Gunung Halu, KP. Sukamanah RT 01 RW 03,
                    Desa Cicangkanggirang, Kec. Sindangkerta, Kabupaten Bandung
                    Barat.
                  </p>
                </div>
              </a>
              <div className='flex items-center gap-3 text-sm'>
                <a
                  href='https://wa.me/6285777198308'
                  target='_blank'
                  className='cursor-pointer group flex items-center gap-3 text-sm'
                >
                  <Phone className='w-4 h-4 text-primary' />
                  <span className='text-muted-foreground transition-colors duration-300 group-hover:text-primary leading-relaxed'>
                    0857-7719-8308
                  </span>
                </a>
              </div>
              <div className='flex items-center gap-3 text-sm'>
                <a
                  href='mailto:rizkyfauziilmi@gmail.com'
                  target='_blank'
                  className='cursor-pointer group flex items-center gap-3 text-sm'
                >
                  <Mail className='w-4 h-4 text-primary' />
                  <span className='text-muted-foreground transition-colors duration-300 group-hover:text-primary leading-relaxed'>
                    ppdb@smkitbustanularifin.sch.id
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & CTA */}
        <div className='border-t border-border pt-8 mb-8'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
            <div className='text-center lg:text-left'>
              <h4 className='text-lg font-semibold text-foreground mb-2'>
                Ikuti Media Sosial Kami
              </h4>
              <p className='text-muted-foreground text-sm'>
                Dapatkan informasi terbaru tentang kegiatan dan prestasi sekolah
              </p>
            </div>
            <div className='flex gap-3'>
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant='outline'
                  size='sm'
                  onClick={() => window.open(social.link, '_blank')}
                  className='hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors'
                >
                  {social.icon}
                  <span className='sr-only'>{social.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='border-t border-border pt-6'>
          <div className='text-center md:text-left'>
            <p>© {currentYear} Ponpes Bustanul Arifin. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
