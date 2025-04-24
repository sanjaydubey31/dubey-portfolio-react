import React, { useState } from "react";
import axios from "axios";
import styles from "./Chatbot.module.css";
import { getImageUrl } from "../../utils";

export const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = (sender, text) => {
    setMessages((prevMessages) => [...prevMessages, { sender, text }]);
  };

  const handleNonStreamSubmit = async (e) => {
    e.preventDefault();
    if (!input) return;
  
    addMessage("User", input);
    setInput("");
    setIsLoading(true);
  
    const payload = {
      input_value: input,
      output_type: "chat",
      input_type: "chat",
      session_id: "user_1", // or make this dynamic if needed
    };
   //alert("hello")
    try {
      const res = await axios.post(
        "https://sanjaydubey733-dubey-portfolio.hf.space/langflow",     //https://sanjaydubey733-dubey-portfolio.hf.space/, http://localhost:8013/langflow
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            
          },
        }
      );
  
      // If response format is consistent, you might want to extract `.answer` or adjust this line
      
      const replyText = res.data.outputs[0].outputs[0].results.message.text;
      console.log(replyText)
      //alert(replyText)
      addMessage("Assistant", replyText); 
    } catch (error) {
      alert("Langflow Error:", error);
      addMessage("Assistant", "An error occurred in handleLangflowSubmit. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  

  const handleNonStreamSubmit_bak = async (e) => {
    e.preventDefault();
    if (!input) return;

    addMessage("User", input);
    setInput("");
    setIsLoading(true);

    try {
      const res = await axios.post("http://localhost:8013/langflow", {
        question: input,
      });
      const replyText = res.data.outputs[0].outputs[0].results.message.text;
      addMessage("Assistant", replyText);
    } catch (error) {
      console.error("Error:", error);
      addMessage("Assistant", "An error occurred in handleNonStreamSubmit. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleStreamSubmit = async (e) => {
    e.preventDefault();
    if (!input) return;

    addMessage("User", input);
    setInput("");
    setIsLoading(true);

    try {
      const eventSource = new EventSource(
        `http://127.0.0.1:8000/stream-with-get?question=${encodeURIComponent(
          input
        )}`
      );

      let botResponse = "";

      eventSource.onmessage = (event) => {
        botResponse += event.data;
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1),
          { sender: "Bot", text: botResponse },
        ]);
      };

      eventSource.onerror = () => {
        eventSource.close();
        setIsLoading(false);
      };

      addMessage("Bot", "...");
    } catch (error) {
      console.error("Error:", error);
      addMessage("Bot", "An error occurred in handleStreamSubmit. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "20px", width: "400px", margin: "5 auto" }}>
      <h4>AI Assistant</h4>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "150px",
          overflowY: "auto",
          marginBottom: "20px",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.sender === "User" ? "right" : "left",
              margin: "10px 0",
            }}
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <form id="chatbotsanjay"
        onSubmit={isLoading ? handleStreamSubmit : handleNonStreamSubmit}
        style={{ display: "flex", gap: "10px" }}
      >
        <input id="chatinput"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flexGrow: 1, padding: "10px" }}
          placeholder="Ask me something..."
          disabled={isLoading}
        />
        <button id="chatbutton" type="submit" disabled={isLoading}>
          {isLoading ? "Streaming..." : "Send"}
        </button>
      </form>
    </div>
  );
};
