import { PageRowProvider } from "./app/PageRowContext";
import { SortProvider } from "./app/SortContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <PageRowProvider>
      <SortProvider>
        <AppRoutes />
      </SortProvider>
    </PageRowProvider>
  );
}

export default App;
