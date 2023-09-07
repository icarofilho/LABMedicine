import { useSelector } from "react-redux";

import { useEffect } from "react";

import { LoginPage } from "../loginPage";
import { StartPage } from "../StartPage";

export function RoutePage() {
  const { user } = useSelector((state) => state);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return <>{!user ? <StartPage /> : <LoginPage />}</>;
}
