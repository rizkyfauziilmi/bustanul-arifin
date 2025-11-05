import { DarkOverlay } from '../other/dark-overlay';

export const HeroSection = () => {
  return (
    <section
      id='hero'
      className="relative h-[calc(100vh-64px)] bg-[url('/banner.png')] bg-cover bg-center"
    >
      <DarkOverlay
        className='hidden md:block'
        darkness={0.8}
        direction='top'
        variant='gradient'
      />
      <DarkOverlay className='md:hidden block' darkness={0.7} variant='solid' />
      <h1 className='text-white p-4 md:p-0 relative md:absolute md:left-18 md:bottom-24 text-5xl text-center md:text-left md:text-6xl md:h-fit h-full flex items-center justify-center'>
        Mencetak Generasi Qur’ani
        <br className='md:block hidden' />
        yang Berakhlakul Karimah.
      </h1>
    </section>
  );
};
