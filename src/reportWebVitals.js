// Function to report web vitals metrics
const reportWebVitals = onPerfEntry => {
    // Check if onPerfEntry is a function before proceeding
    if (onPerfEntry && typeof onPerfEntry === 'function') {
      // Dynamically import the web-vitals library
      import('web-vitals').then((webVitals) => {
        // Destructure the web vitals functions from the imported module
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = webVitals;

        // Call each web vitals function with onPerfEntry as the callback
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      }).catch(error => {
        console.error('Error importing web-vitals:', error);
      });
    }
  };

  // Export the reportWebVitals function as the default export
  export default reportWebVitals;
