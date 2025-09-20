import { DarkOverlay } from "../other/dark-overlay";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-[calc(100vh-64px)] bg-[url('/hero-image.jpg')] bg-cover bg-center"
    >
      <DarkOverlay darkness={0.8} direction="top" variant="gradient" />
      <h1 className="text-white absolute left-18 bottom-24 text-6xl">
        Lorem ipsum dolor sit amet.
        <br />
        Lorem, ipsum dolor.
      </h1>
    </section>
  );
};
