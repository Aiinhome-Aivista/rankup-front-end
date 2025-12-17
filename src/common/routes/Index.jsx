import { Routes, Route } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Homepage from "../../pages/common/homepage/Homepage";
import TeacherDashboard from "../../pages/teacher/dashboard/TeacherDashboard";
import CreateAssesment from "../../pages/teacher/create-assesment/CreateAssesment";
import Login from "../../pages/common/login/login";
import Registration from "../../pages/common/registration/Registration";


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
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Registration />} />
      <Route
        path="teacher/dashboard"
        element={
          <AppLayout>
            <TeacherDashboard />
          </AppLayout>
        }
      />
      <Route
        path="teacher/dashboard/create-assesment"
        element={
          <AppLayout>
            <CreateAssesment />
          </AppLayout>
        }
      />
    </Routes>
  );
}

export default Index;
