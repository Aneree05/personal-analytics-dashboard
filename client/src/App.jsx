import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="flex h-screen bg-gray-950 text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-gray-400 mt-2">
            Your analytics overview will appear here.
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;