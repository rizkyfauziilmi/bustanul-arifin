export const scrollToSection = (id: string) => {
  if (id === "home") {
    // scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const element = document.getElementById(id);
  if (element) {
    const yOffset = -80; // 80px offset for navbar
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
