import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

// Pages
import Home from "./pages/Home";
import AllIssues from "./pages/AllIssues";
import IssueDetails from "./pages/IssueDetails";
import AddIssue from "./pages/AddIssue";
import MyIssues from "./pages/MyIssues";
import MyContributions from "./pages/MyContributions";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Private Route
import PrivateRoute from "./routes/PrivateRoute";

// 404 Page
import NotFound from "./pages/NotFound";   // FIXED → default import

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="min-h-screen">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/issues" element={<AllIssues />} />

          <Route
            path="/issues/:id"
            element={
              <PrivateRoute>
                <IssueDetails />
              </PrivateRoute>
            }
          />

          <Route
            path="/add-issue"
            element={
              <PrivateRoute>
                <AddIssue />
              </PrivateRoute>
            }
          />

          <Route
            path="/my-issues"
            element={
              <PrivateRoute>
                <MyIssues />
              </PrivateRoute>
            }
          />

          <Route
            path="/my-contributions"
            element={
              <PrivateRoute>
                <MyContributions />
              </PrivateRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>

      <Toast />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
