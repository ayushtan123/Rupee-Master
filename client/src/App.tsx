import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
// import "./index.css"
// import { dark } from "@clerk/themes";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <img src="rm.jpeg" alt="rmayush" className="navbar-logo" />
          
          <img src="https://see.fontimg.com/api/renderfont4/PKY27/eyJyIjoiZnMiLCJoIjoxMzgsInciOjE1MDAsImZzIjo5MiwiZmdjIjoiI0ZGRkZGRiIsImJnYyI6IiMwQzBDMEMiLCJ0IjoxfQ/UnVwZWUgTWFzdGVy/arthemis.png" alt="Handwriting fonts" className="web-title" />
          <Link to="https://www.nseindia.com/" target="_blank"><h3 className="special">Stock Market</h3></Link>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
        
        <Routes>
          <Route
            path="/"
            element={
              <SignedIn>
                <FinancialRecordsProvider>
                  <Dashboard />
                </FinancialRecordsProvider>
              </SignedIn>
            }
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>

      </div>
      
    </Router>
  );
}

export default App;
