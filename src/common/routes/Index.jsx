import { Routes, Route } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Homepage from "../../pages/common/homepage/Homepage";
import TeacherDashboard from "../../pages/teacher/dashboard/TeacherDashboard";

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
      <Route
        path="teacher/dashboard"
        element={
            <TeacherDashboard/>
        }
      />
    </Routes>
  );
}

export default Index;
