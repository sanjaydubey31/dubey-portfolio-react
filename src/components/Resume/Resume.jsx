import React, { useState, useRef } from "react";
import styles from "./Resume.module.css";

export const Resume = () => {
  const [preview, setPreview] = useState(null);
  const docxContainerRef = useRef(null);

  const handlePreview = async (type) => {
    if (type === "pdf") {
      setPreview(
        <iframe
          src="/resume/SanjayDubey.pdf"
          title="PDF Preview"
          width="100%"
          height="600px"
          style={{ border: "1px solid #ccc", marginTop: "2rem", display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '700px' }}
        />
      );
    } else if (type === "docx") {
      setPreview(
        <div ref={docxContainerRef} className={styles.docxPreview}>
          Loading Word document preview...
        </div>
      );
      // Dynamically import docx-preview and render
      try {
        const { renderAsync } = await import("docx-preview");
        const response = await fetch("/resume/SanjayDubey.docx");
        const blob = await response.blob();
        if (docxContainerRef.current) {
          docxContainerRef.current.innerHTML = "";
          await renderAsync(blob, docxContainerRef.current, undefined, { className: styles.docxPreview });
        }
      } catch (err) {
        if (docxContainerRef.current) {
          docxContainerRef.current.innerHTML = "Failed to load DOCX preview.";
        }
      }
    }
  };

  // Helper to trigger download programmatically
  const handleDownload = (file) => {
    const link = document.createElement('a');
    link.href = file;
    link.setAttribute('download', file.split('/').pop());
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.resumeContainer}>
      <h2 className={styles.title}>Download My Resume</h2>
      <div className={styles.links}>
        <button
          className={styles.downloadLink}
          onClick={() => { handlePreview("pdf"); handleDownload("/resume/SanjayDubey.pdf"); }}
        >
          Download PDF
        </button>
        <button
          className={styles.downloadLink}
          onClick={() => { handlePreview("docx"); handleDownload("/resume/SanjayDubey.docx"); }}
        >
          Download Word
        </button>
      </div>
      {preview && <div>{preview}</div>}
    </div>
  );
}; 