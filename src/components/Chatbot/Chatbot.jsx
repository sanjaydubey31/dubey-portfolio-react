import React, { useState } from "react";
import axios from "axios";
import styles from "./Chatbot.module.css";
import { getImageUrl } from "../../utils";

export const Chatbot = ({ isOpen, onClose }) => {
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
      session_id: "user_1",
    };

    try {
      const res = await axios.post(
        "https://sanjaydubey733-dubey-portfolio.hf.space/langChain",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      const replyText = res.data.response;
      addMessage("Assistant", replyText);
    } catch (error) {
      console.error("Error:", error);
      addMessage("Assistant", "An error occurred. Please try again.");
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
    <div className={`${styles.chatbotWrapper} ${isOpen ? styles.open : ''}`}>
      <div className={styles.chatbotContainer}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.chatbotHeader}>
          <span>🤖</span>
          <h4 className={styles.chatbotTitle}>AI Assistant</h4>
        </div>
        <div className={styles.messagesContainer}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${styles.message} ${
                msg.sender === "User" ? styles.messageUser : styles.messageAssistant
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <form className={styles.chatForm} onSubmit={handleNonStreamSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles.chatInput}
            placeholder="Type your message..."
            disabled={isLoading}
          />
          <button type="submit" className={styles.chatButton} disabled={isLoading}>
            {isLoading ? (
              <>
                <span>Loading</span>
                <span>⏳</span>
              </>
            ) : (
              <>
                <span>Send</span>
                <span>➤</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
