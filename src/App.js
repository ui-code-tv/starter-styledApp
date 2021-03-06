import { useState } from "react";
import "./App.css";


// Root app - Conditionally render login page or protected page
// Depends on isLoggedIn state variable
export default function App() {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  if (isloggedIn) {
    return (
      <>
        <ProtectedPage />
      </>
    );
  }
  return (
    <LoginPage
      handleSubmit={(ev) => {
        ev.preventDefault();
        setIsLoggedIn(true);
      }}
    />
  );

}

// Login Page
function LoginPage({ handleSubmit }) {
  return (
    <form id="login-form" onSubmit={handleSubmit}>
      <label>
        Email:
        <input className="input" type="email" placeholder="me@mail.com" />
      </label>
      <label>
        Password:
        <input className="input" type="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}

// Protected page displays some cards with course details
function ProtectedPage({ handleSubmit }) {
  return (
    <>
      <h2>Protected courses page</h2>
      <p>You are in the members area of this site</p>
      <button class="primary">Add Course</button>{" "}
      <button class="secondary">Remove Course</button>
      <main class="container">
        <div class="card">
          <div class="img"></div>
          <div class="content">
            <h3>Course Name</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button class="small">more details...</button>
          </div>
        </div>
        <div class="card">
          <div class="img"></div>
          <div class="content">
            <h3>Course Name</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button class="small">more details...</button>
          </div>
        </div>
        <div class="card">
          <div class="img"></div>
          <div class="content">
            <h3>Course Name</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button class="small">more details...</button>
          </div>
        </div>
        <div class="card">
          <div class="img"></div>
          <div class="content">
            <h3>Course Name</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button class="small">more details...</button>
          </div>
        </div>
        <div class="card">
          <div class="img"></div>
          <div class="content">
            <h3>Course Name</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button class="small">more details...</button>
          </div>
        </div>
        <div class="card">
          <div class="img"></div>
          <div class="content">
            <h3>Course Name</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button class="small">more details...</button>
          </div>
        </div>
      </main>
    </>
  );
}