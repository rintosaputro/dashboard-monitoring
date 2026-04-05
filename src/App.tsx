import { PageRowProvider } from "./app/PageRowContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <PageRowProvider>
      <AppRoutes />
    </PageRowProvider>
  );
}

export default App;
