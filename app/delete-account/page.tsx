import DeleteAccount from "@/components/pages/DeleteAccount"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Delete Account",
  description: "Request deletion of your MedBell account and associated health data.",
}

const page = () => {
  return <DeleteAccount />
}

export default page
