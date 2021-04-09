import "./App.css";
import PublicRoutes from "./routes/public.routes";
import PrivateRoutes from "./routes/private.routes";
import  {UserProvider}  from "./context/UserContext";

export default function App(props) {
  return (
    <UserProvider>
      <div>
        <PublicRoutes />
        <PrivateRoutes props={props} />
      </div>
    </UserProvider>
  );
}


