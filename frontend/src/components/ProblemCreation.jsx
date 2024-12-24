import React, { useState } from 'react';
import axios from 'axios';

const CreateProblemPage = () => {
  const[ProblemName,setname]= useState('');
  const [description, setDescription] = useState('');
  const [inputFormat, setInputFormat] = useState('');
  const [outputFormat, setOutputFormat] = useState('');
  const [testCases, setTestCases] = useState([{ input: '', expectedOutput: '' }]);
  const [link, setLink] = useState('');

  const handleTestCaseChange = (index, key, value) => {
    const newTestCases = [...testCases];
    newTestCases[index][key] = value;
    setTestCases(newTestCases);
  };

  const addTestCase = () => {
    setTestCases([...testCases, { input: '', expectedOutput: '' }]);
  };

  const deleteTestCase = (index) => {
    const newTestCases = testCases.filter((_, i) => i !== index);
    setTestCases(newTestCases);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/create-problem', {
        ProblemName,
        description,
        inputFormat,
        outputFormat,
        testCases,
      });
      setLink(response.data.link);
    } catch (error) {
      console.error('Error creating problem:', error);
      alert("ALL FIELDS REQUIRED TO BE FILLED");
    }
  };
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      padding: '20px', 
      backgroundColor: '#1e1e1e',
      color: 'white',
      minHeight: '100vh',
      width: '100%'
    }}>
      <div style={{
        maxWidth: '1200px',  // Increased from 800px to 1200px
        margin: '0 auto',
        width: '100%',
        padding: '0 40px',  // Added padding for better spacing
        boxSizing: 'border-box'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '70px', fontSize: '4rem' }}>Create a Problem</h1>
        <div style={{ marginBottom: '40px' }}> 
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', fontSize: '2rem' }}>Problem Name</label>
          <textarea
            placeholder="Write Problem Name Here."
            value={ProblemName}
            onChange={(e) => setname(e.target.value)}
            rows="5"
            style={{ 
              width: '100%', 
              padding: '15px',  // Increased padding
              fontSize: '30px', 
              backgroundColor: '#2d2d2d',
              color: '#e0e0e0',
              border: '1px solid #404040', 
              borderRadius: '4px', 
              height: '80px',
              boxSizing: 'border-box',
              resize: 'vertical'
            }}
          />
        </div>
        <div style={{ marginBottom: '40px' }}> 
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', fontSize: '2rem' }}>Problem Description</label>
          <textarea
            placeholder="Write Problem description here."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
            style={{ 
              width: '100%', 
              padding: '15px',  // Increased padding
              fontSize: '30px', 
              backgroundColor: '#2d2d2d',
              color: '#e0e0e0',
              border: '1px solid #404040', 
              borderRadius: '4px', 
              height: '200px',
              boxSizing: 'border-box',
              resize: 'vertical'
            }}
          />
        </div>

        <div style={{ marginBottom: '40px' }}> 
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', fontSize: '1.25rem' }}>Input Format</label>
          <textarea
            placeholder="Describe the input format here."
            value={inputFormat}
            onChange={(e) => setInputFormat(e.target.value)}
            rows="3"
            style={{ 
              width: '100%', 
              padding: '15px',  // Increased padding
              fontSize: '25px', 
              backgroundColor: '#2d2d2d',
              color: '#e0e0e0',
              border: '1px solid #404040', 
              borderRadius: '4px',
              height: '100px',
              boxSizing: 'border-box',
              resize: 'vertical'
            }}
          />
        </div>

        <div style={{ marginBottom: '40px' }}>  
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', fontSize: '1.25rem' }}>Output Format</label>
          <textarea
            placeholder="Describe the output format here."
            value={outputFormat}
            onChange={(e) => setOutputFormat(e.target.value)}
            rows="3"
            style={{ 
              width: '100%', 
              padding: '15px',  // Increased padding
              fontSize: '25px', 
              backgroundColor: '#2d2d2d',
              color: '#e0e0e0',
              border: '1px solid #404040', 
              borderRadius: '4px', 
              height: '100px',
              boxSizing: 'border-box',
              resize: 'vertical'
            }}
          />
        </div>

        <div style={{ marginBottom: '40px' }}> 
          <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color:"white" }}>Test Cases</h3>
          {testCases.map((testCase, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', gap: '15px' }}>
              <input
                type="text"
                placeholder="Input"
                value={testCase.input}
                onChange={(e) => handleTestCaseChange(index, 'input', e.target.value)}
                style={{ 
                  padding: '15px',  // Increased padding
                  fontSize: '25px', 
                  flex: '1', 
                  backgroundColor: '#2d2d2d',
                  color: '#e0e0e0',
                  border: '1px solid #404040', 
                  borderRadius: '4px', 
                  height: '55px',  // Increased height
                  boxSizing: 'border-box'
                }}
              />
              <input
                type="text"
                placeholder="Expected Output"
                value={testCase.expectedOutput}
                onChange={(e) => handleTestCaseChange(index, 'expectedOutput', e.target.value)}
                style={{ 
                  padding: '15px',  // Increased padding
                  fontSize: '25px', 
                  flex: '1', 
                  backgroundColor: '#2d2d2d',
                  color: '#e0e0e0',
                  border: '1px solid #404040', 
                  borderRadius: '4px',
                  height: '55px',  // Increased height
                  boxSizing: 'border-box'
                }}
              />
              <button
                onClick={() => deleteTestCase(index)}
                style={{ 
                  padding: '8px 4px',  // Increased padding
                  backgroundColor: '#dc3545', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  height:'55px',
                  width:'105px',
                  fontSize:'20px'
                }}
              >
                Delete
              </button>
            </div>
          ))}
          <button
            onClick={addTestCase}
            style={{ 
              padding: '10px 20px',  // Increased padding
              backgroundColor: '#28a745', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer',
              marginTop: '15px',
              height:'55px',
                  width:'200px',
                  fontSize:'20px'
            }}
          >
            Add Test Case
          </button>
        </div>

        <button
          onClick={handleSubmit}
          style={{ 
            padding: '14px 28px',  // Increased padding
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer', 
            display: 'block', 
            margin: '0 auto',
            height:'65px',
            width:'250px',
            fontSize:'25px',
      
          }}
        >
          Generate Link
        </button>

        {link && (
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <h3>Shareable Link:</h3>
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>
              {link}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateProblemPage;