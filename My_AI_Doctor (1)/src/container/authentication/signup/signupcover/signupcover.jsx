import { FC, Fragment, useEffect, useState } from 'react';
import { Button, Col, Form, InputGroup, Alert } from 'react-bootstrap';
// import desktoplogo from "../../../../assets/images/brand-logos/desktop-logo.png";
import desktopdarklogo from "../../../../assets/images/brand-logos/desktop-dark.png";
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react';
import img2 from "../../../../assets/images/authentication/2.png";
import img3 from "../../../../assets/images/authentication/3.png";
import desktoplogo from "../../../../assets/images/authentication/logo.jpeg";
import sliderimg1 from '../../../../assets/images/authentication/sliderimg1.jpeg';
import sliderimg2 from '../../../../assets/images/authentication/sliderimg2.jpeg';
import sliderimg3 from '../../../../assets/images/authentication/sliderimg3.jpeg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Signupcover = () => {
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        setErrorMessage('');  // Reset the error message
        setSuccessMessage(''); // Reset success message before submission
        e.preventDefault();
        try {
            const response = await fetch('http://192.168.1.89:8000/api/auth/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    role: 'patient', // Default role is "patient"
                }),
            });
    
            if (response.ok) {
                const data = await response.json();
                setSuccessMessage(`Registration successful! Please check your email: ${formData.email}`);
                setTimeout(() => navigate(`${import.meta.env.BASE_URL}authentication/signin/signincover/`), 3000);
            } else {
                const errorData = await response.json();
                console.log(errorData);  // Log the error data to check its structure
                setErrorMessage(errorData.message || errorData.error || 'Registration failed. Please try again.');
            }
        } catch (error) {
            setErrorMessage('An error occurred. Please try again.');
        }
    };
    

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
                                    <Link to={`${import.meta.env.BASE_URL}dashboards/crm/`}>
                                        <img src={desktoplogo} alt="" className="authentication-brand desktop-logo" />
                                        <img src={desktopdarklogo} alt="" className="authentication-brand desktop-dark" />
                                    </Link>
                                </div>
                                <p className="h5 fw-semibold mb-2">Sign Up</p>
                                <p className="mb-3 text-muted op-7 fw-normal">Welcome & Join us by creating a free account!</p>
                                {successMessage && <Alert variant="success">{successMessage}</Alert>}
                                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                    <div className="row gy-3">
                                        <Col xl={12} className="mt-0">
                                            <Form.Label htmlFor="signup-username" className="text-default">Username</Form.Label>
                                            <Form.Control
                                                type="text"
                                                className="form-control form-control-lg"
                                                id="signup-username"
                                                placeholder="username"
                                                name="username"
                                                value={formData.username}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label htmlFor="signup-email" className="text-default">Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                className="form-control form-control-lg"
                                                id="signup-email"
                                                placeholder="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label htmlFor="signup-password" className="text-default">Password</Form.Label>
                                            <InputGroup>
                                                <Form.Control
                                                    type={passwordshow1 ? 'text' : "password"}
                                                    className="form-control-lg"
                                                    id="signup-password"
                                                    placeholder="password"
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <Button
                                                    variant='light'
                                                    className="btn"
                                                    onClick={() => setpasswordshow1(!passwordshow1)}
                                                >
                                                    <i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} aria-hidden="true"></i>
                                                </Button>
                                            </InputGroup>
                                        </Col>
                                        <Col xl={12} className="d-grid mt-2">
                                            <Button type="submit" variant='primary' className="btn btn-lg">Create Account</Button>
                                        </Col>
                                    </div>
                                </Form>
                                <div className="text-center">
                                    <p className="fs-12 text-muted mt-4">Already have an account? <Link to={`${import.meta.env.BASE_URL}authentication/signin/signincover/`} className="text-primary">Sign In</Link></p>
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
                                    autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                    pagination={{ clickable: true, }}
                                    modules={[Pagination, Autoplay, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                                            <div>
                                                <div className="mb-5">
                                                    <img src={sliderimg2} className="authentication-image" alt="" />
                                                </div>
                                                <h6 className="fw-semibold text-fixed-white">Sign Up</h6>
                                                <p className="fw-normal fs-14 op-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                                                <div>
                                                    <div className="mb-5">
                                                        <img src={sliderimg3} className="authentication-image" alt="" />
                                                    </div>
                                                    <h6 className="fw-semibold text-fixed-white">Sign Up</h6>
                                                    <p className="fw-normal fs-14 op-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                                            <div>
                                                <div className="mb-5">
                                                    <img src={sliderimg1} className="authentication-image" alt="" />
                                                </div>
                                                <h6 className="fw-semibold text-fixed-white">Sign Up</h6>
                                                <p className="fw-normal fs-14 op-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
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

export default Signupcover;
