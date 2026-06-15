import "./App.css";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [activeTab, setActiveTab] = useState("Home");
  const [ghostMode, setGhostMode] = useState(false);
  const [profileData, setProfileData] = useState(() => {
    const handleEditProfile = () => {
  const newName = prompt(
    "Enter your full name",
    profileData.fullName || "Kashish"
  );

  const newUsername = prompt(
    "Enter your username",
    profileData.username || "zynex_user"
  );

  if (!newName || !newUsername) return;

  const updatedProfile = {
    fullName: newName.trim(),
    username: newUsername.trim(),
  };

  setProfileData(updatedProfile);
  localStorage.setItem("zynexProfile", JSON.stringify(updatedProfile));
};
  const savedProfile = localStorage.getItem("zynexProfile");

  if (savedProfile) {
    return JSON.parse(savedProfile);
  }

  return {
    fullName: "",
    username: "",
  };
});

  const renderAuth = () => {
    if (authMode === "signup") {
      return (
        <div className="card signupCard">
          <h1>ZYNEX</h1>
          <p>Create your private account</p>

          <input
  type="text"
  placeholder="Full Name"
  value={profileData.fullName}
  onChange={(e) =>
    setProfileData({ ...profileData, fullName: e.target.value })
  }
/>
          <input
  type="text"
  placeholder="Username"
  value={profileData.username}
  onChange={(e) =>
    setProfileData({ ...profileData, username: e.target.value })
  }
/>
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />

         <button
  type="button"
  onClick={() => {
    localStorage.setItem("zynexProfile", JSON.stringify(profileData));
    setActiveTab("Home");
    setLogin(true);
  }}
>
  Create Account
</button>

          <p className="authSwitch">
            Already have an account?{" "}
            <span onClick={() => setAuthMode("login")}>Login</span>
          </p>
        </div>
      );
    }

    return (
      <div className="card">
        <h1>ZYNEX</h1>
        <p>Login to your private world</p>

        <input type="text" placeholder="Email or Username" />
        <input type="password" placeholder="Password" />

        <button onClick={() => setLogin(true)}>Login</button>

        <div className="divider">OR</div>

        <button className="googleBtn">Continue with Google</button>
        <button className="phoneBtn">Continue with Phone</button>

        <p className="authSwitch">
          Don't have an account?{" "}
          <span onClick={() => setAuthMode("signup")}>Sign Up</span>
        </p>
      </div>
    );
  };

  const renderScreen = () => {
    if (activeTab === "Home") {
      return (
        <>
          <h1 className="welcome">Welcome Back 👋</h1>

          <div className="storiesRow">
            <div className="storyCircle addStory">+</div>
            <div className="storyCircle">A</div>
            <div className="storyCircle">R</div>
            <div className="storyCircle">G</div>
            <div className="storyCircle">S</div>
          </div>

          <div className="homeGrid">
            <div className="homeCard wideCard">
              <h2>👻 Ghost Privacy</h2>
              <p>Hide seen, typing and online status.</p>
            </div>

            <div className="homeCard">
              <h2>🎧 Vibe Rooms</h2>
              <p>Join gaming, study and night talk rooms.</p>
            </div>

            <div className="homeCard">
              <h2>🔥 Stories</h2>
              <p>Share private and circle stories.</p>
            </div>

            <div className="homeCard wideCard">
              <h2>🤖 AI Suggestion</h2>
              <p>You may like Gaming Squad and Late Night Chill.</p>
            </div>
          </div>
        </>
      );
    }

    if (activeTab === "Camera") {
      return (
        <div className="cameraScreen">
          <div className="cameraTop">
            <span>⚙️</span>
            <h2>ZYNEX CAM</h2>
            <span>👻</span>
          </div>

          <div className="cameraFrame">
            <div className="scanLine"></div>

            <div className="cameraText">
              <h1>AI Mood Camera</h1>
              <p>Capture your vibe with privacy mode.</p>
            </div>

            <div className="cameraActions">
              <button>Gallery</button>
              <div className="captureBtn"></div>
              <button>Filters</button>
            </div>
          </div>

          <div className="moodChips">
            <span>🎮 Gaming</span>
            <span>📚 Study</span>
            <span>🌙 Night</span>
            <span>😄 Happy</span>
          </div>
        </div>
      );
    }

    if (activeTab === "Chat") {
      return (
        <div className="chatScreen">
          <div className="chatList">
            <h2>Chats</h2>

            <div className="chatUser activeChat">
              <div className="avatar">A</div>
              <div>
                <h3>Aman</h3>
                <p>Bro room join kar 🔥</p>
              </div>
            </div>

            <div className="chatUser">
              <div className="avatar">R</div>
              <div>
                <h3>Riya</h3>
                <p>New story dekhi?</p>
              </div>
            </div>

            <div className="chatUser">
              <div className="avatar">G</div>
              <div>
                <h3>Gaming Squad</h3>
                <p>Match ready 🎮</p>
              </div>
            </div>
          </div>

          <div className="chatBox">
            <div className="chatHeader">
              <div>
                <h2>Aman</h2>
                <p>Ghost Mode Protected 👻</p>
              </div>
              <span>🔒</span>
            </div>

            <div className="messages">
              <div className="msg left">Hey, Zynex kaisa lag raha?</div>
              <div className="msg right">Next level bro 🔥</div>
              <div className="msg left">Room feature bhi add karte hain.</div>
            </div>

            <div className="messageInput">
              <input placeholder="Type private message..." />
              <button>Send</button>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === "Rooms") {
      return (
        <div className="screenPanel">
          <h1>🎧 Rooms</h1>
          <p>Gaming rooms, study rooms, night talks and ghost rooms.</p>
          <button>Explore Rooms</button>
        </div>
      );
    }

    if (activeTab === "Profile") {
      return (
        <div className="profileScreen">
          <div className="profileCard">
            <div className="profileAvatar">Z</div>

            <h1>{profileData.fullName || "Kashish"}</h1>
            <p>@{profileData.username || "zynex_user"} • Private Creator</p>

            <p className={ghostMode ? "ghostStatus on" : "ghostStatus off"}>
  {ghostMode
    ? "👻 Ghost Mode ON — online, typing and seen hidden"
    : "🟢 Ghost Mode OFF — activity visible"}
</p>

            <div className="profileStats">
              <div>
                <h2>128</h2>
                <span>Friends</span>
              </div>

              <div>
                <h2>42</h2>
                <span>Stories</span>
              </div>

              <div>
                <h2>9</h2>
                <span>Rooms</span>
              </div>
            </div>

            <div className="profileActions">
              <button
  type="button"
  onClick={() => {
    const newName = prompt(
      "Enter your full name",
      profileData.fullName || "Kashish"
    );

    if (!newName) return;

    const newUsername = prompt(
      "Enter your username",
      profileData.username || "zynex_user"
    );

    if (!newUsername) return;

    const updatedProfile = {
      fullName: newName.trim(),
      username: newUsername.trim(),
    };

    setProfileData(updatedProfile);
    localStorage.setItem("zynexProfile", JSON.stringify(updatedProfile));
  }}
>
  Edit Profile
</button>
              <button
  className="ghostBtn"
  type="button"
  onClick={() => setGhostMode(!ghostMode)}
>
  {ghostMode ? "Ghost ON 👻" : "Ghost Mode"}
</button>
<button
  className="logoutBtn"
  type="button"
  onClick={() => {
    setLogin(false);
    setAuthMode("login");
    setActiveTab("Home");
  }}
>
  Logout
</button>
            </div>
          </div>

          <div className="settingsGrid">
            <div className="settingBox">
              <h3>🔒 Privacy</h3>
              <p>Control who can see your activity.</p>
            </div>

            <div className="settingBox">
              <h3>👻 Ghost Status</h3>
              <p>
  {ghostMode
    ? "Ghost Mode is ON. Online, typing and seen status hidden."
    : "Ghost Mode is OFF. Your activity is visible."}
</p>
            </div>

            <div className="settingBox">
              <h3>🎨 Theme</h3>
              <p>Black + Cyan premium app theme.</p>
            </div>

            <div className="settingBox">
              <h3>⚡ Account</h3>
              <p>Manage login, security and profile.</p>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="app">
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      {!login ? (
        renderAuth()
      ) : (
        <div className="dashboard">
          <div className="topBar">
            <div className="profileDot">Z</div>
            <h2>ZYNEX</h2>
            <div className="bell">🔔</div>
          </div>

          {renderScreen()}

          <div className="bottomNav">
            <div
              className={activeTab === "Home" ? "active" : ""}
              onClick={() => setActiveTab("Home")}
            >
              🏠<span>Home</span>
            </div>

            <div
              className={activeTab === "Camera" ? "active" : ""}
              onClick={() => setActiveTab("Camera")}
            >
              📷<span>Camera</span>
            </div>

            <div
              className={activeTab === "Chat" ? "active" : ""}
              onClick={() => setActiveTab("Chat")}
            >
              💬<span>Chat</span>
            </div>

            <div
              className={activeTab === "Rooms" ? "active" : ""}
              onClick={() => setActiveTab("Rooms")}
            >
              🎧<span>Rooms</span>
            </div>

            <div
              className={activeTab === "Profile" ? "active" : ""}
              onClick={() => setActiveTab("Profile")}
            >
              👤<span>Profile</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

