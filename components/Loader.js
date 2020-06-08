import React from 'react'

const Loader = () => (
  <div className="loader">
    <style jsx>{`
      .loader {
        border: 8px solid #83d2d9;
        border-top: 8px solid #1ac4c4; 
        border-radius: 50%;
        width: 80px;
        height: 80px;
        animation: spin 2s linear infinite;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40vh;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
)

export default Loader
