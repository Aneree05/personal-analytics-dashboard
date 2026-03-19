function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 p-5">
      <h2 className="text-xl font-bold mb-6">Analytics</h2>

      <nav className="space-y-3">
        <div className="text-gray-400 hover:text-white cursor-pointer">
          Dashboard
        </div>
        <div className="text-gray-400 hover:text-white cursor-pointer">
          Input
        </div>
        <div className="text-gray-400 hover:text-white cursor-pointer">
          Insights
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;