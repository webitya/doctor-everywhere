import XrayHero from "@/components/Xray/XrayHero"
import HealthScansSlider from "@/components/Xray/HealthScansSlider"
import XrayServices from "@/components/Xray/XrayServices"
import XrayBooking from "@/components/Xray/XrayBooking"

export default function XrayPage() {
  return (
    <div>
      <XrayHero />
      <HealthScansSlider />
      <XrayServices />
      {/* <XrayBooking /> */}
    </div>
  )
}
