import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/counterSlice";
import { updateProfile, resetProfile } from "./redux/userSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();

  // Counter state from Redux
  const count = useSelector((state) => state.counter.value);

  // User state from Redux
  const user = useSelector((state) => state.user);

  // Local form state for user input
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    designation: "",
    city: "",
  });

  const handleCounter = (type) => {
    if (type === "inc") dispatch(increment());
    else if (type === "dec") dispatch(decrement());
    else dispatch(reset());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,  // copy old values
      [name]: value,  // update only edited field
    }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
  };

  const handleProfileReset = () => {
    dispatch(resetProfile());
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      designation: "",
      city: "",
    });
  };

  const btnStyle = {
    padding: "8px 16px",
    margin: "5px",
    border: "1px solid gray",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div
      style={{
        backgroundColor: "#f8f8f8",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px",
      }}
    >
      {/* Counter Section */}
      <h1>Redux Toolkit Counter</h1>
      <h2>{count}</h2>

      <div>
        <button style={{ ...btnStyle, backgroundColor: "#4caf50", color: "white" }} onClick={() => handleCounter("inc")}>
          Increment
        </button>
        <button style={{ ...btnStyle, backgroundColor: "#f44336", color: "white" }} onClick={() => handleCounter("dec")}>
          Decrement
        </button>
        <button style={{ ...btnStyle, backgroundColor: "#2196f3", color: "white" }} onClick={() => handleCounter("reset")}>
          Reset
        </button>
      </div>

      <hr style={{ width: "100%", margin: "30px 0" }} />

      {/* User Profile Section */}
      <h1>User Profile Updater</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            width: "300px",
            textAlign: "left",
          }}
        >
          {/* Left Side - Form */}
          <h3>Profile Details</h3>
          <p>
            <strong>First Name:</strong> {user.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {user.lastName}
          </p>
          <p>
            <strong>Age:</strong> {user.age}
          </p>
          <p>
            <strong>Designation:</strong> {user.designation}
          </p>
          <p>
            <strong>City:</strong> {user.city}
          </p>
        </div>
        <div>
          <form
            onSubmit={handleProfileSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              width: "300px",
            }}
          >
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} />
            <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleInputChange} />
            <input type="text" name="designation" placeholder="Designation" value={formData.designation} onChange={handleInputChange} />
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleInputChange} />

            <button type="submit" style={{ ...btnStyle, backgroundColor: "#4caf50", color: "white" }}>
              Update Profile
            </button>

            <button type="button" onClick={handleProfileReset} style={{ ...btnStyle, backgroundColor: "#f44336", color: "white" }}>
              Reset
            </button>
          </form>
        </div>

        {/* Right Side - Profile Details */}
      </div>
    </div>
  );
}

export default App;
