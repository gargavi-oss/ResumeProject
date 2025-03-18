import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

const TemplateTwo = () => {
  const cvData = useOutletContext();

  // Reset focus when the component mounts
  useEffect(() => {
    if (document.activeElement) {
      document.activeElement.blur();
    }
  }, []);

  // Function to handle PDF download with debugging and error handling
  const handleDownload = () => {
    try {
      // Log cvData to ensure it contains the expected values
      console.log('cvData:', cvData);

      // Check if cvData has required fields
      if (!cvData || !cvData.name) {
        console.error('cvData is incomplete or missing name field');
        alert('Please ensure all fields are filled before downloading.');
        return;
      }

      // Check if the resume-content element exists
      const element = document.getElementById('resume-content');
      if (!element) {
        console.error('Element with ID "resume-content" not found');
        alert('Resume content not found. Please check the component rendering.');
        return;
      }
      console.log('Element to convert:', element);

      // PDF generation options
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
        .catch((error) => {
          console.error('Error during PDF generation:', error);
          alert('An error occurred while generating the PDF. Please check the console for details.');
        });
    } catch (error) {
      console.error('Error in handleDownload:', error);
      alert('An error occurred while generating the PDF. Please check the console for details.');
    }
  };

  return (
    <div
      style={{
        margin: '0 auto',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '0.5rem',
        padding: '2.5rem',
        marginTop: '2.5rem',
        marginBottom: '2.5rem',
      width:'800px'
      }}
    >
      <div
        id="resume-content"
        style={{
          fontFamily: 'Arial, sans-serif',
          color: '#374151', // text-gray-700
        }}
      >
        <section
          style={{
            borderBottom: '1px solid #e5e7eb', // border-gray-200
            paddingBottom: '1.5rem',
            marginBottom: '1.5rem',
          }}
        >
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#22c55e', // text-green-500
            }}
          >
            General Information
          </h2>
          <div style={{ marginBottom: '0.25rem' }}>
            <p>
              <span style={{ fontWeight: '600' }}>Name:</span>{' '}
              {cvData.name?.toUpperCase() || 'N/A'}
            </p>
            <p>
              <span style={{ fontWeight: '600' }}>Phone:</span> {cvData.number || 'N/A'}
            </p>
            <p>
              <span style={{ fontWeight: '600' }}>Email:</span> {cvData.email || 'N/A'}
            </p>
          </div>
        </section>
        <section
          style={{
            borderBottom: '1px solid #e5e7eb', // border-gray-200
            paddingBottom: '1.5rem',
            marginBottom: '1.5rem',
          }}
        >
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#22c55e', // text-green-500
            }}
          >
            Education
          </h2>
          <div style={{ marginBottom: '0.25rem' }}>
            <p>
              <span style={{ fontWeight: '600' }}>Degree:</span> {cvData.degree || 'N/A'}
            </p>
            <p>
              <span style={{ fontWeight: '600' }}>University:</span> {cvData.university || 'N/A'}
            </p>
            <p>
              <span style={{ fontWeight: '600' }}>Graduation Year:</span> {cvData.date || 'N/A'}
            </p>
          </div>
        </section>

        {/* Work Experience Section */}
        <section style={{ paddingBottom: '1.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#22c55e', // text-green-500
            }}
          >
            Work Experience
          </h2>
          <div style={{ marginBottom: '0.25rem' }}>
            <p>
              <span style={{ fontWeight: '600' }}>Company:</span> {cvData.company || 'N/A'}
            </p>
            <p>
              <span style={{ fontWeight: '600' }}>Position:</span> {cvData.position || 'N/A'}
            </p>
            <p>
              <span style={{ fontWeight: '600' }}>Responsibilities:</span>{' '}
              {cvData.responsibility || 'N/A'}
            </p>
            <p>
              <span style={{ fontWeight: '600' }}>Duration:</span>{' '}
              {cvData.from || 'N/A'} to {cvData.to || 'N/A'}
            </p>
          </div>
        </section>
        <div style={{ marginTop: '1rem', textAlign: 'right' }}>
          <button
            onClick={handleDownload}
            style={{
              backgroundColor: '#22c55e', // bg-green-500
              color: '#ffffff', // text-white
              padding: '0.25rem 1rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#16a34a')} // hover:bg-green-600
            onMouseOut={(e) => (e.target.style.backgroundColor = '#22c55e')}
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateTwo;