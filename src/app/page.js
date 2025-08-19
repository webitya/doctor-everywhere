import HomePageHero from "@/components/HomePage/HomePageHero"
import HomePageServices from "@/components/HomePage/HomePageServices"
import HomePageCTA from "@/components/HomePage/HomePageCTA"
import HomePageTestimonials from "@/components/HomePage/HomePageTestimonials"

export default function HomePage() {
  return (
    <div>
      <HomePageHero />
      <HomePageServices />
      <HomePageTestimonials />
      <HomePageCTA />
    </div>
  )
}
