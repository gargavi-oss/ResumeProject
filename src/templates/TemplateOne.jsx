import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

function TemplateOne() {
  const cvData = useOutletContext();
  useEffect(() => {
    if (document.activeElement) {
      document.activeElement.blur();
    }
  }, []);

  const handleDownload = () => {
    try {
      if (!cvData ||!cvData.name) {
        console.error('cvData is incomplete or missing name field');
        alert('Please ensure all fields are filled before downloading.');
        return;
      }
      const element = document.getElementById('resume-content');
      const opt = {
        margin: 10,
        filename: `${cvData.name}_resume.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };

      console.log('Generating PDF with options:', opt);
      html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => {
          console.log('PDF download initiated successfully');
        })
    } catch (error) {
      console.error('Error in handleDownload:', error);
      alert('An error occurred while generating the PDF. Please check the console for details.');
    }
  };
  return (
    <div
      className="mx-auto p-4 w-full h-full bg-white shadow-lg rounded-lg border"
      style={{ borderColor: '#e5e7eb' }} // border-gray-200
    >
      <div
        id="resume-content"
        style={{
          fontFamily: 'Arial, sans-serif',
          color: '#374151', // text-gray-700
        }}
      >
        <div style={{ marginBottom: '1rem' }}>
          <p
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '1.25rem',
              color: '#1f2937', // text-gray-800
            }}
          >
            {cvData.name?.toUpperCase() || 'N/A'}
          </p>
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: '#1f2937', // text-gray-800
              borderBottom: '2px solid #3b82f6', // border-blue-500
              paddingBottom: '0.25rem',
              marginBottom: '0.5rem',
            }}
          >
            General Information
          </h2>
          <div style={{ marginBottom: '0.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#4b5563', // text-gray-600
                  width: '6rem',
                }}
              >
                Email:
              </p>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#6b7280', // text-gray-500
                  flex: 1,
                }}
              >
                {cvData.email || 'N/A'}
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#4b5563', // text-gray-600
                  width: '6rem',
                }}
              >
                Phone:
              </p>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#6b7280', // text-gray-500
                  flex: 1,
                }}
              >
                {cvData.number || 'N/A'}
              </p>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: '#1f2937', // text-gray-800
              borderBottom: '2px solid #3b82f6', // border-blue-500
              paddingBottom: '0.25rem',
              marginBottom: '0.5rem',
            }}
          >
            Education
          </h2>
          <div style={{ marginBottom: '0.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#4b5563', // text-gray-600
                  width: '6rem',
                }}
              >
                Degree:
              </p>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#6b7280', // text-gray-500
                  flex: 1,
                }}
              >
                {cvData.degree || 'N/A'}
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#4b5563', // text-gray-600
                  width: '6rem',
                }}
              >
                University:
              </p>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#6b7280', // text-gray-500
                  flex: 1,
                }}
              >
                {cvData.university || 'N/A'}
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#4b5563', // text-gray-600
                  width: '6rem',
                }}
              >
                Graduation Year:
              </p>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#6b7280', // text-gray-500
                  flex: 1,
                }}
              >
                {cvData.date || 'N/A'}
              </p>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: '#1f2937', // text-gray-800
              borderBottom: '2px solid #3b82f6', // border-blue-500
              paddingBottom: '0.25rem',
              marginBottom: '0.5rem',
            }}
          >
            Work Experience
          </h2>
          <div style={{ marginBottom: '0.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#4b5563', // text-gray-600
                  width: '6rem',
                }}
              >
                Company:
              </p>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#6b7280', // text-gray-500
                  flex: 1,
                }}
              >
                {cvData.company || 'N/A'}
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#4b5563', // text-gray-600
                  width: '6rem',
                }}
              >
                Position:
              </p>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#6b7280', // text-gray-500
                  flex: 1,
                }}
              >
                {cvData.position || 'N/A'}
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <p
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#4b5563', // text-gray-600
                  width: '6rem',
                }}
              >
                Responsibilities:
              </p>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#6b7280', // text-gray-500
                  flex: 1,
                }}
              >
                {cvData.responsibility || 'N/A'}
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#4b5563', // text-gray-600
                  width: '6rem',
                }}
              >
                Duration:
              </p>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#6b7280', // text-gray-500
                  flex: 1,
                }}
              >
                {cvData.from || 'N/A'} to {cvData.to || 'N/A'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '1rem', textAlign: 'right' }}>
      <button onClick={handleDownload} className="bg-green-500 text-white px-4 py-1 rounded text-sm">Download PDF</button>
      </div>
    </div>
  );
}
export default TemplateOne;