import { useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  return <DashboardLayout />;
};

export default Dashboard;
