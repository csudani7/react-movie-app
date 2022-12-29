import React from "react";
import ProtectedPageLayout from "../components/layout";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(true);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setIsLoading(false);
    setIsLoggedIn(true);
  }, []);

  return isLoading ? null : isLoggedIn ? (
    <ProtectedPageLayout>
      <Outlet />
    </ProtectedPageLayout>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
