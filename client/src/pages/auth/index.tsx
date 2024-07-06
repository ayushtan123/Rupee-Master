import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import "../dashboard/financial-record.css"

export const Auth = () => {
  return (
    <div className="mainDiv">
      <div className="abc123">
        <div>Congratulations Team India🏏 on becoming the T20I World Champions 2024🏆 </div>
      </div>
      <div className="sign-in-container">
        <SignedOut>
          <h1> Welcome to Your Own Personal Finance Tracker!</h1>
          <SignUpButton  mode="modal" />
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <Navigate to="/" />
        </SignedIn>
      </div>

      <div className="s2">
        <p> "Rupee Master" is a powerful MERN finance tracker app built with React, TypeScript, Node.js, Express and MongoDB. </p>
        <p>It simplifies money management by categorizing negative amounts as expenditures. For expenditures, enter amount with negative sign. </p>
        <p>The app securely stores all transactions and offers seamless login integration through Clerk for user convenience.</p>
        <p> Data is saved using MongoDB in real-time. Users can insert, delete, update transactions.</p>
      </div>

      <div className="s3">
        <p>Made with ❤️ by <a href="https://linkedin.com/in/ayushtan123/" target="_blank">Ayush Tandon</a></p>
      </div>

    </div>
    
  );
};