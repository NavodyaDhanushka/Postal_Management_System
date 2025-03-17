import React from "react";

const ReceptionMessageInterface = () => {
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
    content: {
      display: "flex",
      gap: "20px",
      marginTop: "20px",
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
    input: {
      width: "100%",
      padding: "8px",
      marginTop: "5px",
      border: "1px solid #ddd",
      borderRadius: "5px",
    },
    fileUpload: {
      padding: "10px",
      border: "2px dashed #ccc",
      textAlign: "center",
      marginTop: "10px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h3>Reception Message Interface</h3>
        <span>Reception Staff 🔔</span>
      </div>

      {/* Content */}
      <div style={styles.content}>
        {/* Left Panel - Incoming Messages */}
        <div style={styles.panel}>
          <h4>Incoming Messages</h4>
          <button style={styles.button}>New Message</button>
          <div style={{ marginTop: "10px" }}>
            <div style={styles.messageBox}>
              <div>
                <strong>MSG-2025001</strong> <span>📱 WhatsApp</span>
                <p>Customer inquiry about product delivery...</p>
              </div>
              <div>
                <button style={styles.button}>Forward</button>{" "}
                <button style={styles.button}>Reply</button>
              </div>
            </div>

            <div style={styles.messageBox}>
              <div>
                <strong>MSG-2025002</strong> <span>📄 Letter</span>
                <p>Official request for partnership...</p>
              </div>
              <div>
                <button style={styles.button}>Forward</button>{" "}
                <button style={styles.button}>Reply</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - New Message Entry */}
        <div style={styles.panel}>
          <h4>New Message Entry</h4>

          <label>Message Type</label>
          <select style={styles.input}>
            <option>WhatsApp</option>
            <option>Email</option>
            <option>Letter</option>
          </select>

          <label>Department</label>
          <select style={styles.input}>
            <option>Sales</option>
            <option>Support</option>
          </select>

          <label>Message Content</label>
          <textarea style={styles.input} rows="3"></textarea>

          <label>Attachments</label>
          <div style={styles.fileUpload}>📎 Drop files here or click to upload</div>

          <button style={{ ...styles.button, width: "100%", marginTop: "10px" }}>
            Submit Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceptionMessageInterface;
