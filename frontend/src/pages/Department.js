import React from "react";

const DepartmentPortal = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      backgroundColor: "#f8f9fa",
      height: "100vh",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    },
    navLinks: {
      display: "flex",
      gap: "15px",
    },
    content: {
      display: "flex",
      gap: "20px",
      marginTop: "20px",
    },
    sidebar: {
      width: "250px",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    },
    panel: {
      flex: 1,
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    },
    button: {
      padding: "8px 15px",
      backgroundColor: "#000",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    messageBox: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      marginBottom: "10px",
    },
    footer: {
      textAlign: "center",
      marginTop: "20px",
      padding: "10px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h3>Department Portal</h3>
        <div style={styles.navLinks}>
          <a href="#">Dashboard</a>
          <a href="#">Messages</a>
          <a href="#">Team</a>
        </div>
        <span>🔔 👤</span>
      </div>

      {/* Content */}
      <div style={styles.content}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <h4>Departments</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ padding: "5px", backgroundColor: "#eee", borderRadius: "5px" }}>📁 IT Department</li>
            <li style={{ padding: "5px", marginTop: "5px" }}>👥 HR Department</li>
            <li style={{ padding: "5px", marginTop: "5px" }}>🏢 Management</li>
            <li style={{ padding: "5px", marginTop: "5px" }}>💰 Finance</li>
          </ul>
        </div>

        {/* Main Panel */}
        <div style={styles.panel}>
          <h4>IT Department Messages</h4>
          <button style={styles.button}>Filter</button>{" "}
          <button style={styles.button}>+ New Message</button>
          <div style={{ marginTop: "10px" }}>
            <div style={styles.messageBox}>
              <div>
                <strong>🛠️ Server Maintenance Request</strong>
                <p>From: Reception</p>
                <p>Urgent maintenance required for the main server room cooling system...</p>
              </div>
              <div>
                <button style={styles.button}>Reply</button>{" "}
                <button style={styles.button}>Forward</button>
              </div>
            </div>

            <div style={styles.messageBox}>
              <div>
                <strong>🔑 Software License Renewal</strong>
                <p>From: Reception</p>
                <p>Annual software license renewal notification for development tools...</p>
              </div>
              <div>
                <button style={styles.button}>Reply</button>{" "}
                <button style={styles.button}>Forward</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <p>© 2025 Department Portal. All rights reserved.</p>
      </div>
    </div>
  );
};

export default DepartmentPortal;
