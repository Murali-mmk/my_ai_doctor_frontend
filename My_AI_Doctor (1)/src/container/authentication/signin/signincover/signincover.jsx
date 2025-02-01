import { FC, Fragment, useEffect, useState } from 'react';
import { Button, Col, Form, InputGroup } from 'react-bootstrap';
// import desktoplogo from "../../../../assets/images/brand-logos/desktop-logo.png";
import desktopdarklogo from "../../../../assets/images/brand-logos/desktop-dark.png";
import desktoplogo from "../../../../assets/images/authentication/logo.jpeg";
import sliderimg1 from '../../../../assets/images/authentication/sliderimg1.jpeg';
import sliderimg2 from '../../../../assets/images/authentication/sliderimg2.jpeg';
// import sliderimg3 from '../../../../assets/images/authentication/sliderimg3.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react';
// import img2 from "../../../../assets/images/authentication/2.png";
// import img3 from "../../../../assets/images/authentication/3.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Signincover = () => {
  const [passwordshow1, setpasswordshow1] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(null);
    try {
      const response = await fetch('http://192.168.1.89:8000/api/auth/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('accessToken', data.access);
        localStorage.setItem('refreshToken', data.refresh);
        localStorage.setItem('patient_id',data.profile.patient_id)
        console.log(data)
        console.log(data.profile.patient_id)

        navigate('/dashboards/patient'); // Redirect to the dashboard after login
      } else {
        const errorData = await response.json();
        setError(errorData.detail || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  useEffect(() => {
    const rootDiv = document.getElementById('root');
    if (rootDiv) {
      // rootDiv.className = 'grid grid-cols-12 gap-6 w-full';
    }
    return () => {
      if (rootDiv) {
        rootDiv.className = ''; // Remove the className when component unmounts
      }
    };
  }, []);

  return (
    <Fragment>
      <Helmet>
        <body className="bg-white"></body>
      </Helmet>

      <div className="row authentication mx-0">
        <Col xxl={7} xl={7} lg={12}>
          <div className="row justify-content-center align-items-center h-100">
            <Col xxl={6} xl={7} lg={7} md={7} sm={8} className="col-12">
              <div className="p-5">
                <div className="mb-3">
                  <Link to="/dashboards/crm/">
                    <img src={desktoplogo} alt="" className="authentication-brand desktop-logo" />
                    <img src={desktopdarklogo} alt="" className="authentication-brand desktop-dark" />
                  </Link>
                </div>
                <p className="h5 fw-semibold mb-2">Sign In</p>
                <p className="mb-3 text-muted op-7 fw-normal">Welcome back !</p>
                {error && <p className="text-danger">{error}</p>}
                <div className="row gy-3">
                  <Col xl={12} className="mt-0">
                    <Form.Label htmlFor="signin-username" className="form-label text-default">
                        User Email
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control-lg"
                      id="signin-useremail"
                      placeholder="user email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                  <Col xl={12} className="mb-3">
                    <Form.Label htmlFor="signin-password" className="form-label text-default d-block">
                      Password
                      <Link to="/authentication/resetpassword/resetcover" className="float-end text-danger">
                        Forget password?
                      </Link>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={passwordshow1 ? 'text' : 'password'}
                        className="form-control-lg"
                        id="signin-password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <Button
                        variant="light"
                        className="btn"
                        onClick={() => setpasswordshow1(!passwordshow1)}
                      >
                        <i
                          className={`${
                            passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'
                          } align-middle`}
                          aria-hidden="true"
                        ></i>
                      </Button>
                    </InputGroup>
                  </Col>
                  <Col xl={12} className="d-grid mt-2">
                    <Button
                      className="btn btn-lg btn-primary"
                      onClick={handleLogin}
                    >
                      Sign In
                    </Button>
                  </Col>
                </div>
                <div className="text-center">
                  <p className="fs-12 text-muted mt-4">
                    Don’t have an account?{' '}
                    <Link to="/authentication/signup/signupcover/" className="text-primary">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </Col>
          </div>
        </Col>
        <Col xxl={5} xl={5} lg={5} className="d-xl-block d-none px-0">
          <div className="authentication-cover">
            <div className="aunthentication-cover-content rounded">
              <div className="swiper keyboard-control">
                <Swiper
                  spaceBetween={30}
                  navigation={true}
                  centeredSlides={true}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  modules={[Pagination, Autoplay, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                      <div>
                        <div className="mb-5">
                          <img src={sliderimg1} className="authentication-image" alt="" />
                        </div>
                        <h6 className="fw-semibold text-fixed-white">Sign In</h6>
                        <p className="fw-normal fs-14 op-7">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                        <div>
                          <div className="mb-5">
                            <img src={sliderimg2} className="authentication-image" alt="" />
                          </div>
                          <h6 className="fw-semibold text-fixed-white">Sign In</h6>
                          <p className="fw-normal fs-14 op-7">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </Col>
      </div>
    </Fragment>
  );
};

export default Signincover;
