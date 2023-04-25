import "./styles.css";
import { withAuth } from "./withAuth";
import { Wrapped } from "./wrapped";

const ProtectedApp = withAuth(Wrapped);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ProtectedApp />
    </div>
  );
}
