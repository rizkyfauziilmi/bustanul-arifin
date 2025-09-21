import { DarkOverlay } from "../other/dark-overlay";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-[calc(100vh-64px)] bg-[url('/hero-image.jpg')] bg-cover bg-center"
    >
      <DarkOverlay
        className="hidden md:block"
        darkness={0.8}
        direction="top"
        variant="gradient"
      />
      <DarkOverlay className="md:hidden block" darkness={0.7} variant="solid" />
      <h1 className="text-white relative md:absolute md:left-18 md:bottom-24 text-5xl text-center md:text-left md:text-6xl md:h-fit h-full flex items-center justify-center">
        Lorem ipsum dolor sit amet.
        <br className="md:block hidden" />
        Lorem, ipsum dolor.
      </h1>
    </section>
  );
};
