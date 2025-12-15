import { Routes, Route } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Homepage from "../../pages/common/homepage/Homepage";
import TeacherDashboard from "../../pages/teacher/dashboard/TeacherDashboard";
import CreateAssesment from "../../pages/teacher/create-assesment/CreateAssesment";

function Index() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppLayout>
            <Homepage />
          </AppLayout>
        }
      />
      <Route path="teacher/dashboard" element={<TeacherDashboard />} />
      <Route path="create-assesment/dashboard" element={<CreateAssesment />} />
    </Routes>
  );
}

export default Index;
