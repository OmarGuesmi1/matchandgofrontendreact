import React, { useState } from "react";
import SignIn from "../SignIn/SignIn.jsx"; // adapte le chemin selon ton projet

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const [showSignIn, setShowSignIn] = useState(!token); 

  if (!token) {
    return (
      <>
        {showSignIn && (
          <div className="modal-overlay">
            <div className="modal-content">
              <SignIn 
                onClose={(loggedIn) => {
                  setShowSignIn(false);
                  if (loggedIn) {
                    // ✅ après connexion, recharge la page pour charger Forum
                    window.location.reload(); 
                  }
                }}
              />
            </div>
          </div>
        )}
      </>
    );
  }

  // ✅ seulement si connecté on affiche la page Forum
  return children;
};

export default ProtectedRoute;
