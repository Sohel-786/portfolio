import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const { handleTheme, theme } = useContext(ThemeContext);
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock/unlock scroll when menu is open/closed
  useEffect(() => {
    if (nav) {
      // Lock scroll
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      // Unlock scroll
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [nav]);

  function handleNav() {
    setNav(!nav);
  }

  const handleNavClick = () => {
    setNav(false);
  };

  return (
    <motion.header
      id="top"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "var(--bg-clr)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled ? "var(--shadow)" : "none",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-width mx-auto flex justify-between items-center px-5 lg:px-20 py-4">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-2 text-lg lg:text-xl font-bold"
          style={{ color: "var(--clr-mode)" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-2xl">👋</span>
          <span>Sohel Shaikh</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-sm font-medium relative"
              style={{ color: "var(--clr-mode-text)" }}
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-0.5"
                style={{ backgroundColor: "var(--clr-mode)" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
          <motion.a
            href="https://drive.google.com/file/d/1MvTrLs1xlqeo8UVAGQUytWETZNXpUctm/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
            style={{
              color: "var(--clr-mode)",
              border: `2px solid var(--clr-mode)`,
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "var(--clr-mode)",
              color: "white",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 lg:gap-6">
          <motion.button
            aria-label="Toggle theme"
            onClick={handleTheme}
            className="text-xl lg:text-2xl p-2 rounded-lg transition-all duration-300"
            style={{
              color: "var(--clr-mode)",
            }}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "light" ? <BsMoonStarsFill /> : <BsSunFill />}
          </motion.button>

          <button
            onClick={handleNav}
            className="lg:hidden text-2xl"
            style={{ color: "var(--clr-mode-text)" }}
            aria-label="Toggle menu"
          >
            {nav ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {nav && (
          <motion.div
            className="lg:hidden fixed z-[9999]"
            style={{
              backgroundColor: "var(--bg-clr)",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100vh",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.nav
              className="flex flex-col items-center justify-center h-full gap-8"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className="text-2xl font-bold"
                  style={{ color: "var(--clr-mode-text)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, color: "var(--clr-mode)" }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="https://drive.google.com/file/d/1MvTrLs1xlqeo8UVAGQUytWETZNXpUctm/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                onClick={handleNavClick}
                className="px-6 py-3 rounded-lg text-lg font-semibold mt-4"
                style={{
                  color: "var(--clr-mode)",
                  border: `2px solid var(--clr-mode)`,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
