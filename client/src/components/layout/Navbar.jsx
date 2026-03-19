function Navbar() {
  return (
    <div className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6">
      <h1 className="text-lg font-medium">Personal Analytics</h1>

      <button className="bg-gray-800 px-3 py-1 rounded hover:bg-gray-700">
        Dark Mode
      </button>
    </div>
  );
}

export default Navbar;