import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      if (bmiValue < 18.5) setMessage("Underweight");
      else if (bmiValue < 24.9) setMessage("Healthy Weight");
      else if (bmiValue < 29.9) setMessage("Overweight");
      else setMessage("Obese");
    } else {
      alert("Please enter valid values");
    }
  };

  const resetForm = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setMessage("");
  };

  return (
    <>
      {/* Global CSS Reset to ensure centering works on all browsers */}
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow-x: hidden;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>BMI Calculator</h2>

          <form onSubmit={calculateBMI} style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Weight (kg)</label>
              <input
                style={styles.input}
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 70"
                step="0.1"
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Height (cm)</label>
              <input
                style={styles.input}
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="e.g. 175"
              />
            </div>

            <div style={styles.buttonGroup}>
              <button type="submit" style={styles.submitBtn}>
                Calculate BMI
              </button>
              <button type="button" onClick={resetForm} style={styles.resetBtn}>
                Reset
              </button>
            </div>
          </form>

          {bmi && (
            <div style={styles.resultContainer}>
              <p style={styles.resultText}>Your BMI is</p>
              <h1 style={styles.bmiValue}>{bmi}</h1>
              <div style={{ ...styles.badge, ...getBadgeStyle(message) }}>
                {message}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// Helper for dynamic coloring
const getBadgeStyle = (msg) => {
  switch (msg) {
    case "Healthy Weight":
      return { backgroundColor: "#4CAF50" };
    case "Underweight":
      return { backgroundColor: "#FFC107", color: "#000" };
    case "Overweight":
      return { backgroundColor: "#FF9800" };
    case "Obese":
      return { backgroundColor: "#F44336" };
    default:
      return { backgroundColor: "#777" };
  }
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center", // Vertically centers the card
    justifyContent: "center", // Horizontally centers the card
    minHeight: "100vh", // Full viewport height
    width: "100vw", // Full viewport width
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    boxSizing: "border-box",
    padding: "20px",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    padding: "40px",
    borderRadius: "24px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
    transition: "all 0.3s ease",
  },
  title: {
    color: "#1a202c",
    marginBottom: "30px",
    fontSize: "28px",
    fontWeight: "800",
    letterSpacing: "-0.5px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  inputGroup: {
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
    color: "#4a5568",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "2px solid #edf2f7",
    fontSize: "16px",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color 0.2s",
    backgroundColor: "#f8fafc",
  },
  buttonGroup: {
    display: "flex",
    gap: "12px",
    marginTop: "8px",
  },
  submitBtn: {
    flex: 2,
    padding: "14px",
    backgroundColor: "#764ba2",
    color: "white",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "16px",
    boxShadow: "0 4px 12px rgba(118, 75, 162, 0.3)",
  },
  resetBtn: {
    flex: 1,
    padding: "14px",
    backgroundColor: "#f1f5f9",
    color: "#475569",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "600",
  },
  resultContainer: {
    marginTop: "30px",
    paddingTop: "30px",
    borderTop: "2px solid #f1f5f9",
    animation: "fadeIn 0.6s ease-out",
  },
  resultText: {
    margin: "0",
    color: "#718096",
    fontSize: "14px",
    fontWeight: "500",
  },
  bmiValue: {
    margin: "8px 0",
    fontSize: "56px",
    color: "#2d3748",
    fontWeight: "800",
  },
  badge: {
    display: "inline-block",
    padding: "8px 20px",
    borderRadius: "30px",
    color: "white",
    fontSize: "15px",
    fontWeight: "700",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
};

export default BMICalculator;
