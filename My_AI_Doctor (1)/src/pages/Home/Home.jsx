import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../../components/Navbar/Nav";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    phone: "",
    doctor: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form data submission here, e.g., sending it to an API
    console.log(formData);
    setShowModal(false); // Close the modal after form submission
  };

  return (
    <>
      <Nav></Nav>
      {/* Hero Section */}
      <div className="container p-0">
        <div className="w-100 text-center">
          <img
            src="https://cdn-ijphb.nitrocdn.com/RHWoEaqpOxVKJjUNeLaispPPVzoVqNkU/assets/images/optimized/rev-57e2736/mayurahospitals.com/wp-content/uploads/2023/02/Mayura-logo-v2-02.png"
            className="img-fluid w-100"
            style={{ height: "500px", objectFit: "fill" }}
          />
        </div>
      </div>

      <section className="container d-flex align-items-center mt-4">
        <div className="text-section">
          <h1>Your Trusted Path to Recovery</h1>
          <p>
            At Medicio hospital, we believe that healthcare should be more than
            just a service. It should be a compassionate and collaborative
            journey towards wellness.
          </p>
          <div className="d-flex gap-3">
            {/* Book Appointment Button */}
            <button
              className="hero-btn1"
              style={{ width: "200px" }}
              onClick={handleShowModal}
            >
              Get Appointment
            </button>
            <button className="hero-btn2" style={{ width: "150px" }}>
              Watch Video
            </button>
          </div>
        </div>
        <div className="image-section">
          <img
            src="https://dranupamadentalandestheticclinic.com/wp-content/uploads/2024/11/hero-img.png"
            alt="Doctor"
            className="img-fluid"
            style={{ borderRadius: "8px" }}
          />
        </div>
      </section>
      {/* Hero Section */}

      {/* Modal for Appointment */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: showModal ? "block" : "none" }}
        aria-labelledby="appointmentModalLabel"
        aria-hidden={!showModal}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="appointmentModalLabel">
                Book an Appointment
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleCloseModal}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="patientName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="patientName"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="doctorSelect" className="form-label">
                    Select Doctor
                  </label>
                  <select
                    className="form-select"
                    id="doctorSelect"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose Doctor</option>
                    <option value="Dr. Hanu">Dr. Hanu</option>
                    <option value="Dr. Anupam">Dr. Anupam</option>
                    <option value="Dr. Rina">Dr. Rina</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="appointmentDate" className="form-label">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="appointmentDate"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="appointmentTime" className="form-label">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="appointmentTime"
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for Appointment */}

      {/* Additional Section with Images and Content */}
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left Section with Images */}
          <div className="col-lg-6">
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
              <img
                src="https://dranupamadentalandestheticclinic.com/wp-content/uploads/2024/11/Abou-us.png"
                width="500"
                height="200"
                alt="Patient"
                className="img-fluid "
              />
            </div>
          </div>

          {/* Right Section with Content */}
          <div className="col-lg-6">
            <h5 className="text-primary fs-3 mb-4 ">ABOUT US</h5>
            <h2>
              Commitment to your{" "}
              <span className="text-primary">Smile's Health</span> and Beauty
            </h2>
            <p className="mt-4">
              Welcome to Dr. Hanu Dental and Aesthetic Clinic, where we believe
              that everyone deserves a healthy, confident smile. Whether it's a
              routine dental check-up, a cosmetic procedure, or specialized
              dental care, our goal is to ensure your dental health and enhance
              your natural beauty.
            </p>
            <div className="row my-4">
              <div className="col-6">
                <h3>600+</h3>
                <p>Guarantee Smile</p>
              </div>
              <div className="col-6">
                <h3>97%</h3>
                <p>Satisfaction</p>
              </div>
            </div>
            <div className="d-flex align-items-center mt-4 mx-4"></div>
          </div>
        </div>
      </div>
      {/* Our Process */}

      {/*  <div className="container my-5">
        <div className="text-center">
          <h1 className="text-primary fw-bold m-5">OUR PROCESS</h1>
          <h2 className="fw-bold">
            Your Journey to a{" "}
            <span className="text-primary">Confident Smile</span> Starts Here!
          </h2>
          <p className="text-muted">
            The goal of our clinic is to provide caring and friendly dentistry
            services of the highest level. We provide specialist, general and
            cosmetic dental treatments.
          </p>
          <button className="btn btn-primary">Treatment</button>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6 d-flex align-items-start my-3">
            <div
              className="rounded-circle bg-primary text-white text-center"
              style={{
                width: "50px",
                height: "50px",
                lineHeight: "50px",
                fontSize: "20px",
                marginRight: "15px",
              }}
            >
              1
            </div>
            <div>
              <h5 className="fw-bold">Initial Consultation</h5>
              <p className="text-muted">
                We assess your needs and discuss treatment options for giving
                optimal results.
              </p>
            </div>
          </div>

          <div className="col-lg-6 d-flex align-items-start my-3">
            <div
              className="rounded-circle bg-primary text-white text-center"
              style={{
                width: "50px",
                height: "50px",
                lineHeight: "50px",
                fontSize: "20px",
                marginRight: "15px",
              }}
            >
              2
            </div>
            <div>
              <h5 className="fw-bold">Treatment By Experts</h5>
              <p className="text-muted">
                Our skilled professionals deliver customized care by using
                advanced techniques.
              </p>
            </div>
          </div>

          <div className="col-lg-6 d-flex align-items-start my-3">
            <div
              className="rounded-circle bg-primary text-white text-center"
              style={{
                width: "50px",
                height: "50px",
                lineHeight: "50px",
                fontSize: "20px",
                marginRight: "15px",
              }}
            >
              3
            </div>
            <div>
              <h5 className="fw-bold">Follow-Up Care</h5>
              <p className="text-muted">
                We ensure lasting results through regular check-ups and
                personalized aftercare support.
              </p>
            </div>
          </div>

          <div className="col-lg-6 d-flex align-items-start my-3">
            <div
              className="rounded-circle bg-primary text-white text-center"
              style={{
                width: "50px",
                height: "50px",
                lineHeight: "50px",
                fontSize: "20px",
                marginRight: "15px",
              }}
            >
              4
            </div>
            <div>
              <h5 className="fw-bold">Follow-Up Care</h5>
              <p className="text-muted">
                We ensure lasting results through regular check-ups and
                personalized aftercare support.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* Our Process */}
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Home;

// const HeroSection = () => {
//   return (
//     <section className="container d-flex align-items-center mt-5">
//     <div className="text-section">
//       <h1>Your Trusted Path to Recovery</h1>
//       <p>
//         At Medicio hospital, we believe that healthcare should be more than just a service.
//         It should be a compassionate and collaborative journey towards wellness.
//       </p>
//       <div className="d-flex gap-3">
//         <button className="btn btn-primary">Get Appointment</button>
//         <button className="btn btn-outline-primary">Watch Video</button>
//       </div>
//     </div>
//     <div className="image-section">
//       <img
//       src='https://dranupamadentalandestheticclinic.com/wp-content/uploads/2024/11/hero-img.png'
//         // src="/path/to/your/image.jpg"
//         alt="Doctor"
//         className="img-fluid"
//         style={{ borderRadius: '8px' }}
//       />

//     </div>
//   </section>

//   )
// }

// export default HeroSection
