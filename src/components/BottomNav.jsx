function BottomNav({ activeTab, setActiveTab }) {
  const tabs = [
    { name: "Home", icon: "🏠" },
    { name: "Camera", icon: "📷" },
    { name: "Chat", icon: "💬" },
    { name: "Rooms", icon: "🎧" },
    { name: "Profile", icon: "👤" },
  ];

  return (
    <div className="bottomNav">
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className={activeTab === tab.name ? "active" : ""}
          onClick={() => setActiveTab(tab.name)}
        >
          {tab.icon}
          <span>{tab.name}</span>
        </div>
      ))}
    </div>
  );
}

export default BottomNav;