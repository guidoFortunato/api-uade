import { useContext } from "react";
import { AuthRouter, HomeRouter } from "./router";
import { UserContext } from "./context/UserProvider";


function App() {

  const { auth } = useContext(UserContext)

  // console.log({auth})

  if (auth) return <HomeRouter />;

  if (!auth) return <AuthRouter />;
}

export default App;
