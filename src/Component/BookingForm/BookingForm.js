import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = ({ Id, page = [] }) => {
  // State to hold the form input values and errors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "",
  });

  const [errors, setErrors] = useState({});

  // Room options array
  const roomOptions = {
    1: [
      { type: "2 Sharing", ac: "Non-Ac", price: "₹ 8000/-" },
      { type: "3 Sharing", ac: "Non-Ac", price: "₹ 7500/-" },
      { type: "4 & 5 Sharing", ac: "Non-Ac", price: "₹ 7000/-" },
      { type: "6 & 8 Sharing", ac: "Non-Ac", price: "₹ 6500/-" },
      { type: "4 Sharing", ac: "Ac", price: "₹ 8000/-" },
      { type: "8 Sharing", ac: "Ac", price: "₹ 7000/-" },
    ],
    2: [
      { type: "2 Sharing", ac: "Ac", price: "₹ 10,000/-" },
      { type: "2 Sharing", ac: "Non-Ac", price: "₹ 9000/-" },
      { type: "2 Sharing", ac: "Non-Ac", price: "₹ 8500/-" },
      { type: "4 Sharing", ac: "Ac", price: "₹ 8000/-" },
      { type: "4 Sharing", ac: "Non-Ac", price: "₹ 7500/-" },
      { type: "4 Sharing", ac: "Non-Ac", price: "₹ 7000/-" },
    ],
    3: [
      { type: "2 Sharing", ac: "Ac", price: "₹ 8000/-" },
    ],
    4: [
      { type: "2 Sharing", ac: "Ac", price: "₹ 10,000/-" },
    ],
    5: [
      { type: "2 Sharing", ac: "Ac", price: "₹ 12,000/-" },
      { type: "3 Sharing", ac: "Ac", price: "₹ 10,000/-" },
    ],
    6: [
      { type: "2 Sharing", ac: "Ac", price: "₹ 12,000/-" },
    ],
  };

  //select the room options based on roomId
  const selectRoomOptions = roomOptions[Id] || [];

  // Function to handle room selection
  const handleRoomSelect = (room) => {
    setFormData({
      ...formData,
      roomType: `${room.type} - ${room.ac} - ${room.price}`,
    });
    setErrors({ ...errors, roomType: "" });
  };

  // Validation function
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is not valid.";
    }
    if (!formData.phone.trim()) {
      formErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Phone number should be 10 digits.";
    }
    if (!formData.roomType) formErrors.roomType = "Please select a room type.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validateForm()) {
      // Perform form submission actions
      alert("Form submitted successfully!");
      // You can clear the form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        roomType: "",
      });
    }
  };

  return (
    <div className="container">
      <h2 className="text-center fst-italic">
        <span className="color">Book</span> Here
      </h2>

      {/* Name input field */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      {errors.name && <p className="text-danger">{errors.name}</p>}
      
      {/* Email input field */}
      <div className="input-group mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      {errors.email && <p className="text-danger">{errors.email}</p>}

      {/* Phone input field */}
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      {errors.phone && <p className="text-danger">{errors.phone}</p>}

      {/* Room selection input */}
      <label htmlFor="basic-url" className="form-label text-secondary">
        Choose Your Room Type
      </label>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={formData.roomType}
          readOnly
        />
        <button
          className="btn btn-outline-danger dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Room Type
        </button>
        <ul className="dropdown-menu dropdown-menu-end w-100">
          {selectRoomOptions.map((room, index) => (
            <li
              key={index}
              className="d-flex justify-content-around align-items-center"
            >
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleRoomSelect(room)}
              >
                {room.type}
              </a>
              <a className="dropdown-item">{room.ac}</a>
              <a className="dropdown-item">{room.price}</a>
            </li>
          ))}
        </ul>
      </div>
      {errors.roomType && <p className="text-danger">{errors.roomType}</p>}

      {/* Location input fields */}
      {page.length > 0 && page.map((item, index) => (
        <div key={index} className="mb-3">
          <h6 className="text-secondary">Room Location</h6>
          <textarea className="form-control" placeholder={item.RoomAddress} readOnly />
        </div>
      ))}

      {/* Form buttons */}
      <div className="btn_field text-center">
        <button className="form_btn" onClick={handleSubmit}>
          Confirm Details
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
