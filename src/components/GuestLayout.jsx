import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";


export default function GuestLayout() {
  const {token, checkToken} = useStateContext()
  // if (checkToken) {
  //   // if (token) {
  //       return <Navigate to="/" />
  //   }

    return (
        <div>
            <Outlet />
        </div>
    )
}
