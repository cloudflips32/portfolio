"use client";

import        { useState, useRef     } from "react"
import        { Swiper, SwiperSlide  } from "swiper/react"
import type   { SwiperClass          } from "swiper/react"
import        { Mousewheel, Keyboard } from "swiper/modules"

import About     from "./components/about/page"
import Contact   from "./components/contact/page"
import Footer    from "./components/footer/page"
import Hero      from "./components/hero/page"
import NavBar    from "./components/navbar/page"
import Projects  from "./components/projects/page"
import Skills    from "./components/skills/page"


import "swiper/css"

// ─── App ────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const swiperRef = useRef<SwiperClass | null>(null);

  const goToSlide = (section: string) => {
    const sections = ["hero", "about", "skills", "projects", "contact"];
    const idx = sections.indexOf(section);
    if (idx !== -1) swiperRef.current?.slideTo(idx);
  };

  return (
    <div style={{ backgroundColor: "#0C0910" }}>
      <NavBar activeSection={activeSection} goToSlide={goToSlide} />
      <Swiper
        onSwiper={(s) => { swiperRef.current = s; }}
        direction="vertical"
        modules={[Mousewheel, Keyboard]}
        mousewheel
        keyboard
        speed={800}
        onSlideChange={(swiper) => {
          const sections = ["hero", "about", "skills", "projects", "contact"];
          setActiveSection(sections[swiper.activeIndex] ?? "hero");
        }}
        className="h-svh w-full"
      >
        <SwiperSlide className="h-svh!"><Hero goToSlide={goToSlide} /></SwiperSlide>
        <SwiperSlide className="h-svh!"><About /></SwiperSlide>
        <SwiperSlide className="h-svh!"><Skills /></SwiperSlide>
        <SwiperSlide className="h-svh!"><Projects /></SwiperSlide>
        <SwiperSlide className="h-svh!"><Contact /></SwiperSlide>
      </Swiper>
      <Footer />
    </div>
  );
}
