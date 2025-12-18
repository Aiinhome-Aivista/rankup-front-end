import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Homepage from "../../pages/common/homepage/Homepage";
import TeacherDashboard from "../../pages/teacher/dashboard/TeacherDashboard";
import CreateAssesment from "../../pages/teacher/create-assesment/CreateAssesment";
import Login from "../../pages/common/login/Login";
import Registration from "../../pages/common/registration/Registration";
import SelfAssesment from "../../pages/student/self-assesment/SelfAssesment";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const PrivateRoute = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
};

const PublicRoute = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const role = user?.role || "teacher";
  return !isLoggedIn ? <Outlet /> : <Navigate to={`/${role}/dashboard`} replace />;
};

function Index() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
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
      </Route>

      <Route element={<PrivateRoute />}>
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
        <Route
          path="student/self-assesment"
          element={
            <AppLayout>
              <SelfAssesment />
            </AppLayout>
          }
        />
      </Route>
    </Routes>
  );
}

export default Index;
