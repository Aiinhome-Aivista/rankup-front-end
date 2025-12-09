import { Routes, Route } from "react-router-dom"
import AppLayout from "../layout/AppLayout"
import Homepage from "../../pages/common/Homepage"

function Index() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout><Homepage /></AppLayout>} />
    </Routes >
  )
}

export default Index