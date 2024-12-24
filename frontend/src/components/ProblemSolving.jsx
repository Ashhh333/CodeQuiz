import React from "react";
import { useLocation } from "react-router-dom";
import CodeEditor from "./codeEditor";
import ProblemDisplay from "./ProblemDisplay"; // Import the ProblemDisplay component

const ProblemSolvingPage = () => {
  const location = useLocation();
  const {ProblemName, description, inputFormat, outputFormat, testCases } = location.state || {};

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left: Code Editor */}
      <div style={{ flex: 1, borderRight: "1px solid #ddd", padding: "10px" }}>
        <CodeEditor 
          testCases={testCases}
        />
      </div>

      {/* Right: Problem Statement and Test Cases */}
      <div style={{ flex: 1, padding: "10px" }}>
        <ProblemDisplay
          ProblemName={ProblemName}
          description={description}
          inputFormat={inputFormat}
          outputFormat={outputFormat}
          testCases={testCases}
        />
      </div>
    </div>
  );
};

export default ProblemSolvingPage;
