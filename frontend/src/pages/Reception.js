import { useState, useRef } from "react";

const ReceptionMessageInterface = () => {
  const [messages, setMessages] = useState([
    { id: "MSG-2025001", type: "WhatsApp", content: "Customer inquiry about product delivery..." },
    { id: "MSG-2025002", type: "Letter", content: "Official request for partnership..." },
  ]);

  const [messageType, setMessageType] = useState("WhatsApp");
  const [department, setDepartment] = useState("Sales");
  const [messageContent, setMessageContent] = useState("");
  const [attachments, setAttachments] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    setAttachments([...attachments, ...event.target.files]);
  };

  return (
    <div style={styles.container}>
      {/* Left Side - Incoming Messages */}
      <div style={styles.leftPanel}>
        <h2>Incoming Messages</h2>
        <button style={styles.newMessageBtn}>New Message</button>
        {messages.map((msg) => (
          <div key={msg.id} style={styles.messageCard}>
            <p style={styles.messageTitle}>
              {msg.id} <span style={styles.messageType}>{msg.type}</span>
            </p>
            <p style={styles.messageContent}>{msg.content}</p>
            <div style={styles.buttonGroup}>
              <button style={styles.actionButton}>Forward</button>
              <button style={styles.actionButton}>Reply</button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - New Message Entry */}
      <div style={styles.rightPanel}>
        <h2>New Message Entry</h2>
        <label style={styles.label}>Message Type</label>
        <select style={styles.input} value={messageType} onChange={(e) => setMessageType(e.target.value)}>
          <option>WhatsApp</option>
          <option>Email</option>
          <option>Letter</option>
        </select>

        <label style={styles.label}>Department</label>
        <select style={styles.input} value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option>Sales</option>
          <option>Support</option>
          <option>HR</option>
        </select>

        <label style={styles.label}>Message Content</label>
        <textarea
          style={styles.textArea}
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          placeholder="Enter message..."
        />

        <label style={styles.label}>Attachments</label>
        <input type="file" multiple onChange={handleFileUpload} ref={fileInputRef} style={styles.fileInput} />

        <button style={styles.submitButton}>Submit Message</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#F3F4F6",
    minHeight: "100vh",
  },
  leftPanel: {
    flex: 1,
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  rightPanel: {
    flex: 1,
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  newMessageBtn: {
    padding: "10px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
    width: "100%",
    marginBottom: "15px",
    borderRadius: "5px",
  },
  messageCard: {
    padding: "10px",
    borderBottom: "1px solid #E5E7EB",
    marginBottom: "10px",
  },
  messageTitle: {
    fontWeight: "bold",
    fontSize: "14px",
  },
  messageType: {
    fontSize: "12px",
    marginLeft: "10px",
    color: "gray",
  },
  messageContent: {
    fontSize: "14px",
    color: "#4B5563",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  actionButton: {
    padding: "5px 10px",
    border: "1px solid black",
    backgroundColor: "white",
    cursor: "pointer",
  },
  label: {
    fontSize: "14px",
    fontWeight: "bold",
    display: "block",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #D1D5DB",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  textArea: {
    width: "100%",
    height: "80px",
    padding: "8px",
    border: "1px solid #D1D5DB",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  fileInput: {
    width: "100%",
    padding: "5px",
    border: "1px solid #D1D5DB",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  submitButton: {
    width: "100%",
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
};

export default ReceptionMessageInterface;
