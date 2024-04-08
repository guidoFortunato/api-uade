import { AuthRouter, HomeRouter } from "./router";

const auth = false;

function App() {
  if (auth) return <HomeRouter />;

  if (!auth) return <AuthRouter />;
}

export default App;
