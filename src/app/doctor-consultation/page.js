import DoctorConsultationHero from "@/components/DoctorConsultation/DoctorConsultationHero"
import DoctorSpecialtyGrid from "@/components/DoctorConsultation/DoctorSpecialtyGrid"
import DoctorConsultationSpecialties from "@/components/DoctorConsultation/DoctorConsultationSpecialties"
import DoctorConsultationBooking from "@/components/DoctorConsultation/DoctorConsultationBooking"

export default function DoctorConsultationPage() {
  return (
    <div>
      <DoctorConsultationHero />
      <DoctorSpecialtyGrid />
      {/* <DoctorConsultationSpecialties /> */}
      {/* <DoctorConsultationBooking /> */}
    </div>
  )
}
