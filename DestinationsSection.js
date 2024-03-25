import React, { useState, useRef } from 'react';
import parisImage from './paris.jpeg';
import tokyoImage from './tokyo.jpeg';
import romeImage from './rome.jpeg';
import santoriniImage from './santorini.jpeg';

const DestinationsSection = () => {
  const [bookingData, setBookingData] = useState({
    destination: '',
    duration: '',
    month: '',
    email: '',
  });
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showBookingSummary, setShowBookingSummary] = useState(false);
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const bookingRef = useRef(null);

  const handleExploreClick = (destination) => {
    // Set destination-specific data
    setBookingData({ destination, duration: '', month: '', email: '' });
    setShowBookingForm(true);
    setShowBookingSummary(false); // Hide booking summary when exploring

    // Scroll to booking section
    bookingRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Perform booking submission logic, e.g., send data to backend
    console.log('Booking submitted:', bookingData);
    setShowBookingSummary(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleMonthSelect = (month) => {
    setBookingData({ ...bookingData, month });
    setShowMonthDropdown(false);
  };

  // Define images for each destination
  const destinationImages = {
    Paris: parisImage,
    Tokyo: tokyoImage,
    Rome: romeImage,
    Santorini: santoriniImage,
  };

  // Define list of months
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="container" style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
      {/* Display Explore buttons for each destination */}
      {Object.keys(destinationImages).map((destination) => (
        <div key={destination} className="destination-card" style={{ marginBottom: '20px' }}>
          <img src={destinationImages[destination]} alt={destination} style={{ width: '50%', borderRadius: '8px' }} />
          <button onClick={() => handleExploreClick(destination)} style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Explore {destination}</button>
        </div>
      ))}

      {/* Booking section */}
      <div ref={bookingRef} style={{ paddingTop: '50px' }}>
        {/* Display booking form if Explore button is clicked */}
        {showBookingForm && (
          <form onSubmit={handleBookingSubmit} className="booking-form" style={{ marginTop: '20px' }}>
            <h2>Book your trip to {bookingData.destination}</h2>
            <label style={{ display: 'block', marginBottom: '10px' }}>
              Duration:
              <input type="text" name="duration" value={bookingData.duration} onChange={handleInputChange} style={{ marginLeft: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
            </label>
            <label style={{ display: 'block', marginBottom: '10px', position: 'relative' }}>
              Month:
              <input
                type="text"
                name="month"
                value={bookingData.month}
                onChange={handleInputChange}
                onFocus={() => setShowMonthDropdown(true)}
                onBlur={() => setShowMonthDropdown(false)}
                style={{ marginLeft: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '150px' }}
              />
              {/* Month dropdown */}
              {showMonthDropdown && (
                <div style={{ position: 'absolute', backgroundColor: '#fff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '5px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '5px', zIndex: '1000' }}>
                  {months.map((month) => (
                    <div key={month} onClick={() => handleMonthSelect(month)} style={{ cursor: 'pointer', padding: '5px' }}>{month}</div>
                  ))}
                </div>
              )}
            </label>
            <label style={{ display: 'block', marginBottom: '10px' }}>
              Email:
              <input type="email" name="email" value={bookingData.email} onChange={handleInputChange} style={{ marginLeft: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '200px' }} />
            </label>
            <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit Booking</button>
          </form>
        )}

        {/* Display booking summary */}
        {showBookingSummary && (
          <div className="booking-summary" style={{ marginTop: '20px', backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
            <h2>Booking Summary</h2>
            <p>Destination: {bookingData.destination}</p>
            <p>Duration: {bookingData.duration}</p>
            <p>Month: {bookingData.month}</p>
            <p>Email: {bookingData.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationsSection;
