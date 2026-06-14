import TermsAndConditions from "@/components/pages/TermsAndConditions"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "MedBell Terms and Conditions — read about your rights and responsibilities when using the MedBell app.",
}

const page = () => {
  return <TermsAndConditions />
}

export default page
