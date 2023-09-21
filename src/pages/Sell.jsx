
import React, { useState } from 'react';

function Sell() {
  const [formData, setFormData] = useState({
    governorate: '',
    city: '',
    region: '',
    street: '',
    type: '',
    area: '',
    rooms: '',
    price: '',
    name: '',
    phone: '',
    email: '',
    photo: null,
    otherInfo: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform client-side validation
    const validationErrors = {};

    if (!formData.governorate.trim()) {
      validationErrors.governorate = 'Governorate is required.';
    }

    if (!formData.city.trim()) {
      validationErrors.city = 'City is required.';
    }

    if (!formData.region.trim()) {
      validationErrors.region = 'Region is required.';
    }

    if (!formData.street.trim()) {
      validationErrors.street = 'Street is required.';
    }

    if (!formData.area.trim()) {
      validationErrors.area = 'Area is required.';
    } else if (isNaN(Number(formData.area))) {
      validationErrors.area = 'Area must be a number.';
    }

    if (!formData.rooms.trim()) {
      validationErrors.rooms = 'Number of rooms is required.';
    } else if (isNaN(Number(formData.rooms))) {
      validationErrors.rooms = 'Number of rooms must be a number.';
    }

    if (!formData.price.trim()) {
      validationErrors.price = 'Price is required.';
    } else if (isNaN(Number(formData.price))) {
      validationErrors.price = 'Price must be a number.';
    }

    if (!formData.name.trim()) {
      validationErrors.name = 'Your name is required.';
    }

    if (!formData.phone.trim()) {
      validationErrors.phone = 'Phone number is required.';
    } else if (!/^\d{11}$/.test(formData.phone)) {
      validationErrors.phone = 'Phone number must be 11 digits.';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = 'Invalid email address.';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
    
      console.log('Form data:', formData);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-danger text-center mb-4">Submit Property</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="governorate" className="form-label">
            Governorate:
          </label>
          <input
            type="text"
            className={`form-control ${errors.governorate && 'is-invalid'}`}
            id="governorate"
            name="governorate"
            value={formData.governorate}
            onChange={handleChange}
            required
          />
          {errors.governorate && (
            <div className="invalid-feedback">{errors.governorate}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City:
          </label>
          <input
            type="text"
            className={`form-control ${errors.city && 'is-invalid'}`}
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          {errors.city && (
            <div className="invalid-feedback">{errors.city}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="region" className="form-label">
            Region:
          </label>
          <input
            type="text"
            className={`form-control ${errors.region && 'is-invalid'}`}
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
            required
          />
          {errors.region && (
            <div className="invalid-feedback">{errors.region}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="street" className="form-label">
            Street:
          </label>
          <input
            type="text"
            className={`form-control ${errors.street && 'is-invalid'}`}
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
          />
          {errors.street && (
            <div className="invalid-feedback">{errors.street}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="type" className="form-label">
            Type:
          </label>
          <select
            className={`form-select ${errors.type && 'is-invalid'}`}
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="sell">Sale</option>
            <option value="rent">Rent</option>
          </select>
          {errors.type && (
            <div className="invalid-feedback">{errors.type}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="area" className="form-label">
            Space (Square Meters):
          </label>
          <input
            type="text"
            className={`form-control ${errors.area && 'is-invalid'}`}
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
          />
          {errors.area && (
            <div className="invalid-feedback">{errors.area}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="rooms" className="form-label">
            Number of Rooms:
          </label>
          <input
            type="text"
            className={`form-control ${errors.rooms && 'is-invalid'}`}
            id="rooms"
            name="rooms"
            value={formData.rooms}
            onChange={handleChange}
            required
          />
          {errors.rooms && (
            <div className="invalid-feedback">{errors.rooms}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="text"
            className={`form-control ${errors.price && 'is-invalid'}`}
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
          {errors.price && (
            <div className="invalid-feedback">{errors.price}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name:
          </label>
          <input
            type="text"
            className={`form-control ${errors.name && 'is-invalid'}`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Your Phone Number:
          </label>
          <input
            type="tel"
            className={`form-control ${errors.phone && 'is-invalid'}`}
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && (
            <div className="invalid-feedback">{errors.phone}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Your Email Address:
          </label>
          <input
            type="email"
            className={`form-control ${errors.email && 'is-invalid'}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="photo" className="form-label">
            Upload Photo:
          </label>
          <input
            type="file"
            className={`form-control ${errors.photo && 'is-invalid'}`}
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleFileUpload}
            required
          />
          {errors.photo && (
            <div className="invalid-feedback">{errors.photo}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="otherInfo" className="form-label">
            Other Information:
          </label>
          <textarea
            className="form-control"
            id="otherInfo"
            name="otherInfo"
            value={formData.otherInfo}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Sell;
