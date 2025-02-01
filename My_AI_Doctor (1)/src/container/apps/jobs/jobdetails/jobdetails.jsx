import { FC, Fragment } from 'react';
import { Button, Card, Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import logo8 from "../../../../assets/images/company-logos/8.png";
import logo6 from "../../../../assets/images/company-logos/6.png";
import logo3 from "../../../../assets/images/company-logos/3.png";
import logo5 from "../../../../assets/images/company-logos/5.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Jobdetails = () => {
    return (
        <Fragment>
            <Pageheader title="Job Details" heading="Jobs" active="Job Details" />
            <div className="container">
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex flex-wrap align-items-top justify-content-between gap-2">
                                    <div>
                                        <div className="d-flex flex-wrap gap-2">
                                            <div>
                                                <span className="avatar avatar-rounded avatar-lg">
                                                    <img src={logo8} alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <h4 className="fw-bold mb-0 d-flex align-items-center"><Link to="#">UI Developer - Fresher</Link></h4>
                                                <Link to="#" className="fw-semibold"><i className="bi bi-building"></i> Spruko Technologies .PVT.LTD</Link>
                                                <div className="d-flex fs-14 mt-3">
                                                    <div>
                                                        <p className="mb-1"><i className="bi bi-geo-alt me-1"></i>Banglore, Karnataka</p>
                                                        <p><i className="bi bi-briefcase me-1"></i>1 - 3+ years Experience</p>
                                                    </div>
                                                    <div className="ms-4">
                                                        <p className="mb-1"><i className="bi bi-coin me-1"></i><b>10,000 - 20,000</b> / per month (+incentives)</p>
                                                        <p><i className="bi bi-mortarboard  me-1"></i>Graduate and Above</p>
                                                    </div>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link to="#" className="badge rounded-pill bg-info-transparent me-1"><i className="bi bi-clock me-1"></i>Full Time</Link>
                                                    <Link to="#" className="badge rounded-pill bg-danger-transparent"><i className="bi bi-briefcase me-1"></i>13 Openings</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="btn-list mb-2">
                                            <Link to="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#apply"><i className="fa fa-check me-1"></i> Apply Now</Link>
                                            <Link to="#" className="btn btn-icon btn-primary-light btn-wave">
                                                <i className="ri-heart-line"></i>
                                            </Link>
                                            <Link to="#" className="btn btn-icon btn-primary-light btn-wave">
                                                <i className="ri-share-line"></i>
                                            </Link>
                                        </div>
                                        <p className="mb-0"><i className="bi bi-info-circle text-danger" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="45 days left"></i> <b>45 days left </b> to apply this job</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={8}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Job Highlights</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <div className="col-sm-4">
                                        <p className="fs-14 mb-2">
                                            <span className="avatar avatar-rounded me-2 bg-light text-default">
                                                <i className="ri-time-line fs-15"></i>
                                            </span>
                                            09:30 AM - 06:00 PM
                                        </p>
                                        <p className="fs-14 mb-2">
                                            <span className="avatar avatar-rounded me-2 bg-light text-default">
                                                <i className="bi bi-mortarboard fs-15"></i>
                                            </span>
                                            Graduate and Above
                                        </p>
                                    </div>
                                    <div className="col-sm-4">
                                        <p className="fs-14 mb-2">
                                            <span className="avatar avatar-rounded me-2 bg-light text-default">
                                                <i className="bi bi-calendar fs-15"></i>
                                            </span>
                                            5 Working Days
                                        </p>
                                        <p className="fs-14 mb-2">
                                            <span className="avatar avatar-rounded me-2 bg-light text-default">
                                                <i className="bi bi-person-check fs-15"></i>
                                            </span>
                                            Bachelors Preferred
                                        </p>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Body>
                                    <h5 className="fw-semibold">Job Description</h5>
                                    <p className="op-9">Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.A officiis optio temporibus minima facilis...</p>
                                    <p className="mb-4 op-9">Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</p>
                                    <h5 className="fw-semibold">Key Responsibilities</h5>
                                    <ol className="list-group border-0 list-unstyled list-group-numbered mb-3">
                                        <li className="list-group-item border-0 py-1">Design thoughtful, beautiful, and useful software user interfaces and experiences in a team environment..</li>
                                        <li className="list-group-item border-0 py-1">Create user-centered designs by considering market analysis, customer feedback, site metrics, and usability findings.</li>
                                        <li className="list-group-item border-0 py-1">Work with stakeholders to plan projects for effective delivery while maintaining high standards for design..</li>
                                        <li className="list-group-item border-0 py-1">Be a passionate and effective advocate for design with non-design audiences..</li>
                                        <li className="list-group-item border-0 py-1">Use business requirements, user and market research to assist in developing scenarios, use cases, and high-level requirements..</li>
                                    </ol>
                                    <h5 className="fw-semibold">Requirements</h5>
                                    <ol className="list-group border-0 list-unstyled list-group-numbered mb-3">
                                        <li className="list-group-item border-0 py-1">Design thoughtful, beautiful, and useful software user interfaces and experiences in a team environment..</li>
                                        <li className="list-group-item border-0 py-1">Create user-centered designs by considering market analysis, customer feedback, site metrics, and usability findings.</li>
                                        <li className="list-group-item border-0 py-1">Work with stakeholders to plan projects for effective delivery while maintaining high standards for design..</li>
                                        <li className="list-group-item border-0 py-1">Be a passionate and effective advocate for design with non-design audiences..</li>
                                        <li className="list-group-item border-0 py-1">Use business requirements, user and market research to assist in developing scenarios, use cases, and high-level requirements..</li>
                                    </ol>
                                </Card.Body>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card border bg-primary-transparent shadow-none">
                            <Card.Body>
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <h5 className="fw-semibold mb-0">&#128400; Was this job fit for someone?</h5>
                                    </div>
                                    <div className="col-lg-6 text-end">
                                        <Link to="#" className="btn btn-success btn-lg" role="button">
                                            <i className="ri-share-line me-2 align-middle d-inline-block"></i>Share Now
                                        </Link>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <div>
                            <h4 className="fw-semibold mb-0">Related Jobs</h4>
                            <p className="">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            <div className="swiper swiper-related-jobs">
                                <div className="swiper-wrapper">
                                    <Swiper spaceBetween={30} autoplay={{ delay: 2500, disableOnInteraction: false, }} breakpoints={{ '@0.00': { slidesPerView: 1, spaceBetween: 10, }, '@2.00': { slidesPerView: 2, spaceBetween: 20, }}} navigation={true}
                                        modules={[Autoplay, Navigation]} className="mySwiper swiper-related-jobs" watchSlidesProgress={true}>
                                        <Col md={6}>
                                            <SwiperSlide key={1}>
                                                <Card className="custom-card featured-jobs">
                                                    <Card.Body>
                                                        <div className="btn-list float-end">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link to="#" className="avatar avatar-sm avatar-rounded bg-light text-default">
                                                                    <span><i className="bi bi-heart"></i></span></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Featured Jobs</Tooltip>}>
                                                                <Link to="#" className="avatar avatar-sm avatar-rounded bg-warning-transparent">
                                                                    <span><i className="bi bi-star-fill"></i></span></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div className="d-flex mb-3 flex-wrap gap-2">
                                                            <div>
                                                                <span className="avatar avatar-lg avatar-rounded bg-primary bg-opacity-10 border">

                                                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M21.46777,2.3252A1.00007,1.00007,0,0,0,20.73,2H3.27a1.00039,1.00039,0,0,0-.99609,1.08887l1.52,17a.99944.99944,0,0,0,.72851.87451l7.2002,2A.99628.99628,0,0,0,11.99023,23a1.01206,1.01206,0,0,0,.26709-.03613l7.21973-2a1.00055,1.00055,0,0,0,.729-.875l1.52-17A1,1,0,0,0,21.46777,2.3252Zm-3.19238,16.896L11.99072,20.9624,5.72461,19.22168,4.36328,4H19.63672ZM7.81982,13h6.895l-.32714,3.271-2.56788.917L8.65625,16.05811a1.00017,1.00017,0,1,0-.67285,1.88378l3.5,1.25a1.00291,1.00291,0,0,0,.67285,0l3.5-1.25a1.00044,1.00044,0,0,0,.65869-.84228l.5-5A1.00064,1.00064,0,0,0,15.81982,11H8.72461L8.4248,8h7.895a1,1,0,0,0,0-2h-9a1.00064,1.00064,0,0,0-.99511,1.09961l.5,5A1.00012,1.00012,0,0,0,7.81982,13Z"></path></svg></span>
                                                            </div>
                                                            <div className="ms-2">
                                                                <h5 className="fw-semibold mb-0 d-flex align-items-center"><Link to="#"> HTML Developer</Link></h5>
                                                                <Link to="#"><i className="bi bi-building"></i> Spotech Technical Solutions</Link>
                                                            </div>
                                                        </div>
                                                        <div className="popular-tags mb-3">
                                                            <Link to="#" className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-geo-alt text-muted me-1"></i> Hyderabad</Link>
                                                            <Link to="#" className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-mortarboard text-muted me-1"></i> Graduate</Link>
                                                            <Link to="#" className="badge rounded-pill bg-light text-default"><i className="bi bi-clock text-muted me-1"></i> Min - 2Years</Link>
                                                        </div>
                                                        <div className="d-flex justify-content-between">
                                                            <h6 className="fw-semibold mb-0">$25,000 - $35,000</h6>
                                                            <Link to="#" className="text-primary fw-semibold fs-14">
                                                                Apply Now <i className="fe fe-arrow-right"></i>
                                                            </Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </SwiperSlide>
                                        </Col>
                                        <Col md={6}>
                                            <SwiperSlide key={2}>
                                                <Card className="custom-card featured-jobs">
                                                    <Card.Body>
                                                        <div className="btn-list float-end">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link to="#" className="avatar avatar-sm avatar-rounded bg-light text-default">
                                                                    <span><i className="bi bi-heart"></i></span></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Featured Jobs</Tooltip>}>
                                                                <Link to="#" className="avatar avatar-sm avatar-rounded bg-warning-transparent">
                                                                    <span><i className="bi bi-star-fill"></i></span></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div className="d-flex flex-wrap gap-2 mb-3">
                                                            <div>
                                                                <span className="avatar avatar-lg avatar-rounded bg-primary bg-opacity-10 border"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M11.103,10.43793a1.78593,1.78593,0,1,0,2.43957.65362A1.786,1.786,0,0,0,11.103,10.43793Zm8.0047,1.93768q-.17587-.201-.37116-.40308.13641-.14337.264-.28649c1.60583-1.80427,2.28357-3.61371,1.65558-4.70154-.60217-1.043-2.39343-1.35382-4.63593-.91779q-.33132.06482-.659.14624-.06272-.21624-.13343-.43C14.467,3.49042,13.2381,1.99921,11.98206,2,10.77765,2.00055,9.61359,3.39709,8.871,5.5575q-.10959.31969-.20276.64471-.21908-.05375-.44-.0993c-2.366-.48578-4.27167-.16584-4.89844.9226-.601,1.04376.02753,2.74982,1.52851,4.47211q.22329.25562.45922.49976c-.18542.191-.361.38189-.52465.57171-1.4646,1.698-2.05719,3.37616-1.45716,4.41541.61969,1.07348,2.49854,1.42437,4.7854.97436q.278-.05511.55292-.124.10071.35156.22095.697c.73932,2.11706,1.89685,3.46863,3.097,3.4682,1.23944-.00073,2.48194-1.45288,3.23474-3.65875.05945-.17432.11573-.35535.16907-.54175q.35514.08835.71485.1568c2.20336.41687,3.95251.089,4.55145-.951C21.28058,15.93109,20.64288,14.12933,19.10767,12.37561ZM4.07019,7.45184c.38586-.67,1.94324-.93139,3.98608-.512q.19584.04027.39838.09a20.464,20.464,0,0,0-.42126,2.67767,20.88659,20.88659,0,0,0-2.10389,1.6936q-.21945-.22695-.42718-.4649l.00006.00006C4.21631,9.46057,3.708,8.08081,4.07019,7.45184Zm3.88666,5.72809c-.51056-.3866-.98505-.78265-1.41571-1.181.43036-.39587.90515-.79059,1.41467-1.17615q-.02746.58915-.02722,1.1792Q7.929,12.59117,7.95685,13.17993Zm-.00061,3.94061a7.23675,7.23675,0,0,1-2.63971.09314,1.766,1.766,0,0,1-1.241-.65631c-.36407-.63067.11176-1.978,1.36432-3.43023q.23621-.273.48791-.53174a20.49026,20.49026,0,0,0,2.10712,1.70007,20.80226,20.80226,0,0,0,.42621,2.712Q8.21011,17.07023,7.95624,17.12054Zm7.10113-8.03936q-.50309-.317-1.01861-.61365-.5073-.292-1.0268-.56207c.593-.24933,1.17591-.46228,1.73865-.63581A18.21775,18.21775,0,0,1,15.05737,9.08118ZM9.679,5.83521c.63623-1.85114,1.57763-2.98053,2.30352-2.98084.77308-.00037,1.77753,1.21826,2.43433,3.19763q.064.19355.121.38928a20.478,20.478,0,0,0-2.52716.9712,20.06145,20.06145,0,0,0-2.519-.98194Q9.578,6.13062,9.679,5.83521ZM9.27863,7.259a18.30717,18.30717,0,0,1,1.72967.642Q9.95746,8.4433,8.96094,9.0824C9.0412,8.4444,9.148,7.83313,9.27863,7.259ZM8.9624,14.91968q.49695.31813,1.00843.61273.52174.30039,1.05737.57556a18.19577,18.19577,0,0,1-1.74445.66492C9.15161,16.1908,9.04364,15.56879,8.9624,14.91968Zm5.45569,3.14551A7.23556,7.23556,0,0,1,13.18,20.39844l-.00006.00006a1.76585,1.76585,0,0,1-1.18841.747c-.72821.00042-1.65766-1.085-2.28992-2.89545q-.11169-.32108-.20551-.648a20.10863,20.10863,0,0,0,2.52918-1.0097,20.79976,20.79976,0,0,0,2.54736.97851Q14.50141,17.81983,14.41809,18.06519Zm.36224-1.32422c-.56921-.176-1.16058-.39252-1.76214-.64551q.50867-.2677,1.02472-.56543.52955-.30579,1.0321-.62689A18.1524,18.1524,0,0,1,14.78033,16.741Zm.44629-4.74268q.00111.91095-.05688,1.82044c-.49268.33343-1.01282.659-1.554.97143-.53894.31116-1.07293.59711-1.59674.8559q-.82682-.39624-1.62176-.854-.79047-.455-1.54468-.969-.06894-.90921-.06946-1.82172l.00012.00019q-.00063-.91187.06794-1.82184c.49255-.33637,1.00891-.66168,1.54278-.96991.53632-.30969,1.077-.59442,1.61469-.85248q.81664.39688,1.60382.85065.78992.454,1.549.95868.06519.91443.06524,1.83166Zm.95673-5.09283c1.92133-.37372,3.37-.12232,3.73291.50622.3866.66962-.16748,2.1485-1.55383,3.70636l-.00006.00006q-.1149.12891-.23841.25891A20.06118,20.06118,0,0,0,15.98,9.68915a20.04054,20.04054,0,0,0-.40546-2.64893Q15.88486,6.96387,16.18335,6.90546Zm-.12988,3.8847A18.16447,18.16447,0,0,1,17.51483,11.978a18.11912,18.11912,0,0,1-1.45672,1.20831q.02325-.59391.02288-1.18842Q16.08072,11.39389,16.05347,10.79016Zm3.8681,5.78876c-.36346.63116-1.76788.89435-3.65222.53784q-.32391-.06115-.66474-.14557a20.069,20.069,0,0,0,.38746-2.68176,19.93914,19.93914,0,0,0,2.13708-1.71588q.17643.18329.33563.36487v-.00007a7.23437,7.23437,0,0,1,1.40308,2.23792A1.76563,1.76563,0,0,1,19.92157,16.57892Z"></path></svg></span>
                                                            </div>
                                                            <div className="ms-2">
                                                                <h5 className="fw-semibold mb-0 d-flex align-items-center"><Link to="#"> React Developer</Link></h5>
                                                                <Link to="#"><i className="bi bi-building"></i> Infratech PVT LTD</Link>
                                                            </div>
                                                        </div>
                                                        <div className="popular-tags mb-3">
                                                            <Link to="#" className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-geo-alt text-muted me-1"></i> Hyderabad</Link>
                                                            <Link to="#" className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-mortarboard text-muted me-1"></i> Graduate</Link>
                                                            <Link to="#" className="badge rounded-pill bg-light text-default"><i className="bi bi-clock text-muted me-1"></i> Min - 2Years</Link>
                                                        </div>
                                                        <div className="d-flex justify-content-between">
                                                            <h6 className="fw-semibold mb-0">$25,000 - $35,000</h6>
                                                            <Link to="#" className="text-primary fw-semibold fs-14">
                                                                Apply Now <i className="fe fe-arrow-right"></i>
                                                            </Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </SwiperSlide>
                                        </Col>
                                        <Col md={6}>
                                            <SwiperSlide key={3}>
                                                <Card className="custom-card featured-jobs">
                                                    <Card.Body>
                                                        <div className="btn-list float-end">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link to="#" className="avatar avatar-sm avatar-rounded bg-light text-default">
                                                                    <span><i className="bi bi-heart"></i></span></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Featured Jobs</Tooltip>}>
                                                                <Link to="#" className="avatar avatar-sm avatar-rounded bg-warning-transparent">
                                                                    <span><i className="bi bi-star-fill"></i></span></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div className="d-flex flex-wrap gap-2 mb-3">
                                                            <div>
                                                                <span className="avatar avatar-lg avatar-rounded bg-primary bg-opacity-10 border"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24">
                                                                    <path fill="var(--primary-color)" d="M22.86723,3.374a.99906.99906,0,0,0-.86622-.50195l-4.97064-.00391-.00738-.001-3.64356.001a1.00172,1.00172,0,0,0-.81787.42481l-.55859.7959L11.43851,3.291a.9983.9983,0,0,0-.81591-.42286l-3.646-.001H6.97611l-.00146.00018-.00147-.00018H6.96781l-4.97314.02734a.99989.99989,0,0,0-.85742,1.50586L11.15678,21.50586A1.00068,1.00068,0,0,0,12.01957,22h.001a1.00062,1.00062,0,0,0,.86328-.49609L22.8643,4.376A1.00212,1.00212,0,0,0,22.86723,3.374ZM10.10453,4.86816l1.085,1.53321a.99856.99856,0,0,0,.81641.42285h.00146a1.00252,1.00252,0,0,0,.8169-.42481l1.07519-1.53125,1.36267-.001-3.244,5.45373L8.7432,4.86719Zm1.9126,14.14942L3.7393,4.88477l2.66992-.01465,4.75342,7.918a1.00082,1.00082,0,0,0,.85742.48535H12.022l.001-.00012.001.00012h.002a1,1,0,0,0,.85742-.48926l4.708-7.916,2.66949.00293Z"></path></svg></span>
                                                            </div>
                                                            <div className="ms-2">
                                                                <h5 className="fw-semibold mb-0 d-flex align-items-center"><Link to="#"> Vuejs Developer</Link></h5>
                                                                <Link to="#">G Technical Solutions</Link>
                                                            </div>
                                                        </div>
                                                        <div className="popular-tags mb-3">
                                                            <Link to="#" className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-geo-alt text-muted me-1"></i> Hyderabad</Link>
                                                            <Link to="#" className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-mortarboard text-muted me-1"></i> Graduate</Link>
                                                            <Link to="#" className="badge rounded-pill bg-light text-default"><i className="bi bi-clock text-muted me-1"></i> Min - 2Years</Link>
                                                        </div>
                                                        <div className="d-flex justify-content-between">
                                                            <h6 className="fw-semibold mb-0">$25,000 - $35,000</h6>
                                                            <Link to="#" className="text-primary fw-semibold fs-14">
                                                                Apply Now <i className="fe fe-arrow-right"></i>
                                                            </Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </SwiperSlide>
                                        </Col>
                                        <Col md={6}>
                                            <SwiperSlide key={4}>
                                                <Card className="custom-card featured-jobs">
                                                    <Card.Body>
                                                        <div className="btn-list float-end">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link to="#" className="avatar avatar-sm avatar-rounded bg-light text-default">
                                                                    <span><i className="bi bi-heart"></i></span></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Featured Jobs</Tooltip>}>
                                                                <Link to="#" className="avatar avatar-sm avatar-rounded bg-warning-transparent">
                                                                    <span><i className="bi bi-star-fill"></i></span></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div className="d-flex flex-wrap gap-2 mb-3">
                                                            <div>
                                                                <span className="avatar avatar-lg avatar-rounded bg-primary bg-opacity-10 border"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24">
                                                                    <path fill="var(--primary-color)" d="M12,2a10.00009,10.00009,0,1,0,10,9.99976A10.01117,10.01117,0,0,0,12,2ZM3.00928,11.99976a8.95547,8.95547,0,0,1,.77844-3.659L8.07654,20.09131A8.99123,8.99123,0,0,1,3.00928,11.99976ZM12,20.99121a8.98726,8.98726,0,0,1-2.54-.36633l2.69788-7.83869,2.7633,7.57135a.84386.84386,0,0,0,.06446.12391A8.97138,8.97138,0,0,1,12,20.99121ZM13.239,7.78436c.54126-.02844,1.02906-.08539,1.02906-.08539a.37165.37165,0,0,0-.05738-.741s-1.4563.11432-2.39648.11432c-.8833,0-2.3678-.11432-2.3678-.11432a.37165.37165,0,0,0-.057.741s.4585.05695.943.08539l1.40075,3.838-1.968,5.90087L6.49133,7.78436C7.033,7.75592,7.52026,7.699,7.52026,7.699a.37166.37166,0,0,0-.05749-.741s-1.45593.11432-2.39612.11432c-.1687,0-.36768-.00415-.57861-.01093A8.98815,8.98815,0,0,1,18.07117,5.36957c-.0387-.00238-.07654-.0072-.11634-.0072A1.55669,1.55669,0,0,0,16.445,6.958a4.21016,4.21016,0,0,0,.88317,2.1087,4.73577,4.73577,0,0,1,.74122,2.47955,10.88314,10.88314,0,0,1-.68409,2.9065l-.897,2.99634ZM16.52,19.771l2.74609-7.9397A8.489,8.489,0,0,0,19.94983,8.611a6.9105,6.9105,0,0,0-.06043-.92456A8.99224,8.99224,0,0,1,16.52,19.771Z"></path></svg></span>
                                                            </div>
                                                            <div className="ms-2">
                                                                <h5 className="fw-semibold mb-0 d-flex align-items-center"><Link to="#"> Wordpress Developer</Link></h5>
                                                                <Link to="#">Hardware Private Solutions</Link>
                                                            </div>
                                                        </div>
                                                        <div className="popular-tags mb-3">
                                                            <Link to="#" className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-geo-alt text-muted me-1"></i> Hyderabad</Link>
                                                            <Link to="#" className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-mortarboard text-muted me-1"></i> Graduate</Link>
                                                            <Link to="#" className="badge rounded-pill bg-light text-default"><i className="bi bi-clock text-muted me-1"></i> Min - 2Years</Link>
                                                        </div>
                                                        <div className="d-flex justify-content-between">
                                                            <h6 className="fw-semibold mb-0">$25,000 - $35,000</h6>
                                                            <Link to="#" className="text-primary fw-semibold fs-14">
                                                                Apply Now <i className="fe fe-arrow-right"></i>
                                                            </Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </SwiperSlide>
                                        </Col>
                                    </Swiper>

                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card border">
                            <Card.Header>
                                <Card.Title>
                                    Similar Jobs
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item mb-2">
                                        <div className="d-flex">
                                            <span className="avatar avatar-md avatar-rounded bg-primary bg-opacity-10 border">
                                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M11.103,10.43793a1.78593,1.78593,0,1,0,2.43957.65362A1.786,1.786,0,0,0,11.103,10.43793Zm8.0047,1.93768q-.17587-.201-.37116-.40308.13641-.14337.264-.28649c1.60583-1.80427,2.28357-3.61371,1.65558-4.70154-.60217-1.043-2.39343-1.35382-4.63593-.91779q-.33132.06482-.659.14624-.06272-.21624-.13343-.43C14.467,3.49042,13.2381,1.99921,11.98206,2,10.77765,2.00055,9.61359,3.39709,8.871,5.5575q-.10959.31969-.20276.64471-.21908-.05375-.44-.0993c-2.366-.48578-4.27167-.16584-4.89844.9226-.601,1.04376.02753,2.74982,1.52851,4.47211q.22329.25562.45922.49976c-.18542.191-.361.38189-.52465.57171-1.4646,1.698-2.05719,3.37616-1.45716,4.41541.61969,1.07348,2.49854,1.42437,4.7854.97436q.278-.05511.55292-.124.10071.35156.22095.697c.73932,2.11706,1.89685,3.46863,3.097,3.4682,1.23944-.00073,2.48194-1.45288,3.23474-3.65875.05945-.17432.11573-.35535.16907-.54175q.35514.08835.71485.1568c2.20336.41687,3.95251.089,4.55145-.951C21.28058,15.93109,20.64288,14.12933,19.10767,12.37561ZM4.07019,7.45184c.38586-.67,1.94324-.93139,3.98608-.512q.19584.04027.39838.09a20.464,20.464,0,0,0-.42126,2.67767,20.88659,20.88659,0,0,0-2.10389,1.6936q-.21945-.22695-.42718-.4649l.00006.00006C4.21631,9.46057,3.708,8.08081,4.07019,7.45184Zm3.88666,5.72809c-.51056-.3866-.98505-.78265-1.41571-1.181.43036-.39587.90515-.79059,1.41467-1.17615q-.02746.58915-.02722,1.1792Q7.929,12.59117,7.95685,13.17993Zm-.00061,3.94061a7.23675,7.23675,0,0,1-2.63971.09314,1.766,1.766,0,0,1-1.241-.65631c-.36407-.63067.11176-1.978,1.36432-3.43023q.23621-.273.48791-.53174a20.49026,20.49026,0,0,0,2.10712,1.70007,20.80226,20.80226,0,0,0,.42621,2.712Q8.21011,17.07023,7.95624,17.12054Zm7.10113-8.03936q-.50309-.317-1.01861-.61365-.5073-.292-1.0268-.56207c.593-.24933,1.17591-.46228,1.73865-.63581A18.21775,18.21775,0,0,1,15.05737,9.08118ZM9.679,5.83521c.63623-1.85114,1.57763-2.98053,2.30352-2.98084.77308-.00037,1.77753,1.21826,2.43433,3.19763q.064.19355.121.38928a20.478,20.478,0,0,0-2.52716.9712,20.06145,20.06145,0,0,0-2.519-.98194Q9.578,6.13062,9.679,5.83521ZM9.27863,7.259a18.30717,18.30717,0,0,1,1.72967.642Q9.95746,8.4433,8.96094,9.0824C9.0412,8.4444,9.148,7.83313,9.27863,7.259ZM8.9624,14.91968q.49695.31813,1.00843.61273.52174.30039,1.05737.57556a18.19577,18.19577,0,0,1-1.74445.66492C9.15161,16.1908,9.04364,15.56879,8.9624,14.91968Zm5.45569,3.14551A7.23556,7.23556,0,0,1,13.18,20.39844l-.00006.00006a1.76585,1.76585,0,0,1-1.18841.747c-.72821.00042-1.65766-1.085-2.28992-2.89545q-.11169-.32108-.20551-.648a20.10863,20.10863,0,0,0,2.52918-1.0097,20.79976,20.79976,0,0,0,2.54736.97851Q14.50141,17.81983,14.41809,18.06519Zm.36224-1.32422c-.56921-.176-1.16058-.39252-1.76214-.64551q.50867-.2677,1.02472-.56543.52955-.30579,1.0321-.62689A18.1524,18.1524,0,0,1,14.78033,16.741Zm.44629-4.74268q.00111.91095-.05688,1.82044c-.49268.33343-1.01282.659-1.554.97143-.53894.31116-1.07293.59711-1.59674.8559q-.82682-.39624-1.62176-.854-.79047-.455-1.54468-.969-.06894-.90921-.06946-1.82172l.00012.00019q-.00063-.91187.06794-1.82184c.49255-.33637,1.00891-.66168,1.54278-.96991.53632-.30969,1.077-.59442,1.61469-.85248q.81664.39688,1.60382.85065.78992.454,1.549.95868.06519.91443.06524,1.83166Zm.95673-5.09283c1.92133-.37372,3.37-.12232,3.73291.50622.3866.66962-.16748,2.1485-1.55383,3.70636l-.00006.00006q-.1149.12891-.23841.25891A20.06118,20.06118,0,0,0,15.98,9.68915a20.04054,20.04054,0,0,0-.40546-2.64893Q15.88486,6.96387,16.18335,6.90546Zm-.12988,3.8847A18.16447,18.16447,0,0,1,17.51483,11.978a18.11912,18.11912,0,0,1-1.45672,1.20831q.02325-.59391.02288-1.18842Q16.08072,11.39389,16.05347,10.79016Zm3.8681,5.78876c-.36346.63116-1.76788.89435-3.65222.53784q-.32391-.06115-.66474-.14557a20.069,20.069,0,0,0,.38746-2.68176,19.93914,19.93914,0,0,0,2.13708-1.71588q.17643.18329.33563.36487v-.00007a7.23437,7.23437,0,0,1,1.40308,2.23792A1.76563,1.76563,0,0,1,19.92157,16.57892Z"></path></svg>
                                            </span>
                                            <div className="ms-2 flex-grow-1">
                                                <p className="fw-semibold fs-14 mb-1"><Link to="#"> React Lead Developer</Link></p>
                                                <p className="mb-0 me-3"><i className="bi bi-building text-muted"></i> Infratech PVT LTD</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item mb-2">
                                        <div className="d-flex">
                                            <span className="avatar avatar-md avatar-rounded bg-primary bg-opacity-10 border">
                                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M21.46777,2.3252A1.00007,1.00007,0,0,0,20.73,2H3.27a1.00039,1.00039,0,0,0-.99609,1.08887l1.52,17a.99944.99944,0,0,0,.72851.87451l7.2002,2A.99628.99628,0,0,0,11.99023,23a1.01206,1.01206,0,0,0,.26709-.03613l7.21973-2a1.00055,1.00055,0,0,0,.729-.875l1.52-17A1,1,0,0,0,21.46777,2.3252Zm-3.19238,16.896L11.99072,20.9624,5.72461,19.22168,4.36328,4H19.63672ZM7.81982,13h6.895l-.32714,3.271-2.56788.917L8.65625,16.05811a1.00017,1.00017,0,1,0-.67285,1.88378l3.5,1.25a1.00291,1.00291,0,0,0,.67285,0l3.5-1.25a1.00044,1.00044,0,0,0,.65869-.84228l.5-5A1.00064,1.00064,0,0,0,15.81982,11H8.72461L8.4248,8h7.895a1,1,0,0,0,0-2h-9a1.00064,1.00064,0,0,0-.99511,1.09961l.5,5A1.00012,1.00012,0,0,0,7.81982,13Z"></path></svg>
                                            </span>
                                            <div className="ms-2 flex-grow-1">
                                                <p className="fw-semibold fs-14 mb-1"><Link to="#"> HTML Developer - Fresher</Link></p>
                                                <p className="mb-0 me-3"><i className="bi bi-building text-muted"></i> Spruko Technologies PVT LTD</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item mb-2">
                                        <div className="d-flex">
                                            <span className="avatar avatar-md avatar-rounded bg-primary bg-opacity-10 border">
                                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M12,2a10.00009,10.00009,0,1,0,10,9.99976A10.01117,10.01117,0,0,0,12,2ZM3.00928,11.99976a8.95547,8.95547,0,0,1,.77844-3.659L8.07654,20.09131A8.99123,8.99123,0,0,1,3.00928,11.99976ZM12,20.99121a8.98726,8.98726,0,0,1-2.54-.36633l2.69788-7.83869,2.7633,7.57135a.84386.84386,0,0,0,.06446.12391A8.97138,8.97138,0,0,1,12,20.99121ZM13.239,7.78436c.54126-.02844,1.02906-.08539,1.02906-.08539a.37165.37165,0,0,0-.05738-.741s-1.4563.11432-2.39648.11432c-.8833,0-2.3678-.11432-2.3678-.11432a.37165.37165,0,0,0-.057.741s.4585.05695.943.08539l1.40075,3.838-1.968,5.90087L6.49133,7.78436C7.033,7.75592,7.52026,7.699,7.52026,7.699a.37166.37166,0,0,0-.05749-.741s-1.45593.11432-2.39612.11432c-.1687,0-.36768-.00415-.57861-.01093A8.98815,8.98815,0,0,1,18.07117,5.36957c-.0387-.00238-.07654-.0072-.11634-.0072A1.55669,1.55669,0,0,0,16.445,6.958a4.21016,4.21016,0,0,0,.88317,2.1087,4.73577,4.73577,0,0,1,.74122,2.47955,10.88314,10.88314,0,0,1-.68409,2.9065l-.897,2.99634ZM16.52,19.771l2.74609-7.9397A8.489,8.489,0,0,0,19.94983,8.611a6.9105,6.9105,0,0,0-.06043-.92456A8.99224,8.99224,0,0,1,16.52,19.771Z"></path></svg>
                                            </span>
                                            <div className="ms-2 flex-grow-1">
                                                <p className="fw-semibold fs-14 mb-1"><Link to="#"> Wordpress Developer - Remote</Link></p>
                                                <p className="mb-0 me-3"><i className="bi bi-building text-muted"></i> Hardware Private Solutions</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex">
                                            <span className="avatar avatar-md avatar-rounded bg-primary bg-opacity-10 border">
                                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M22.86723,3.374a.99906.99906,0,0,0-.86622-.50195l-4.97064-.00391-.00738-.001-3.64356.001a1.00172,1.00172,0,0,0-.81787.42481l-.55859.7959L11.43851,3.291a.9983.9983,0,0,0-.81591-.42286l-3.646-.001H6.97611l-.00146.00018-.00147-.00018H6.96781l-4.97314.02734a.99989.99989,0,0,0-.85742,1.50586L11.15678,21.50586A1.00068,1.00068,0,0,0,12.01957,22h.001a1.00062,1.00062,0,0,0,.86328-.49609L22.8643,4.376A1.00212,1.00212,0,0,0,22.86723,3.374ZM10.10453,4.86816l1.085,1.53321a.99856.99856,0,0,0,.81641.42285h.00146a1.00252,1.00252,0,0,0,.8169-.42481l1.07519-1.53125,1.36267-.001-3.244,5.45373L8.7432,4.86719Zm1.9126,14.14942L3.7393,4.88477l2.66992-.01465,4.75342,7.918a1.00082,1.00082,0,0,0,.85742.48535H12.022l.001-.00012.001.00012h.002a1,1,0,0,0,.85742-.48926l4.708-7.916,2.66949.00293Z"></path></svg>
                                            </span>
                                            <div className="ms-2 flex-grow-1">
                                                <p className="fw-semibold fs-14 mb-1"><Link to="#"> Vuejs Frontend Developer</Link></p>
                                                <p className="mb-0 me-3"><i className="bi bi-building text-muted"></i> G Technical Solutions</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Body>
                            <Card.Footer className="card-footer">
                                <Link to="#" className="text-primary fw-semibold fs-14 mt-2">
                                    View All <i className="fe fe-arrow-right"></i>
                                </Link>
                            </Card.Footer>
                        </Card>
                        <Card className="custom-card border">
                            <Card.Header>
                                <Card.Title>
                                    Featured Companies
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="card-body p-0">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item mb-2">
                                        <div className="d-flex">
                                            <span className="avatar avatar-md avatar-rounded bg-gray-200 border">
                                                <img src={logo3} alt="" />
                                            </span>
                                            <div className="ms-2 flex-grow-1">
                                                <p className="fw-semibold fs-14 mb-1"><Link to="#">Infratech PVT LTD</Link></p>
                                                <p className="mb-0 me-3"><i className="bi bi-briefcase text-muted"></i> React Lead Developer </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item mb-2">
                                        <div className="d-flex">
                                            <span className="avatar avatar-md avatar-rounded bg-gray-200 border">
                                                <img src={logo6} alt="" />
                                            </span>
                                            <div className="ms-2 flex-grow-1">
                                                <p className="fw-semibold fs-14 mb-1"><Link to="#">Spruko Technologies PVT LTD</Link></p>
                                                <p className="mb-0 me-3"><i className="bi bi-briefcase text-muted"></i>  HTML Developer - Fresher</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item mb-2">
                                        <div className="d-flex">
                                            <span className="avatar avatar-md avatar-rounded bg-gray-200 border">
                                                <img src={logo8} alt="" />
                                            </span>
                                            <div className="ms-2 flex-grow-1">
                                                <p className="fw-semibold fs-14 mb-1"><Link to="#">Hardware Private Solutions </Link></p>
                                                <p className="mb-0 me-3"><i className="bi bi-briefcase text-muted"></i> Wordpress Developer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item mb-2">
                                        <div className="d-flex">
                                            <span className="avatar avatar-md avatar-rounded bg-gray-200 border">
                                                <img src={logo5} alt="" />
                                            </span>
                                            <div className="ms-2 flex-grow-1">
                                                <p className="fw-semibold fs-14 mb-1"><Link to="#"> G Technical Solutions</Link></p>
                                                <p className="mb-0 me-3"><i className="bi bi-briefcase text-muted"></i> Vuejs Frontend Developer</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Body>
                            <Card.Footer className="card-footer">
                                <Link to="#" className="text-primary fw-semibold fs-14 mt-2">
                                    View All <i className="fe fe-arrow-right"></i>
                                </Link>
                            </Card.Footer>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="">
                                    <h5 className="fw-semibold mb-3">Get Latest Job Alerts</h5>
                                    <p>Latest jobs updates on the go to recieved direct to your email. Stay updated with your latest new jobs.</p>
                                    <div className="input-group mb-3">
                                        <Form.Control type="text" className="form-control" placeholder="Email Here" aria-label="blog-email" aria-describedby="blog-subscribe" />
                                        <Button variant='primary' className="btn" type="button" id="blog-subscribe">Subscribe</Button>
                                    </div>
                                    <Form.Label className="form-check-label">
                                        By Subscribing you accept to <Link to="#" className="text-success"><u>privacy policy</u></Link>
                                    </Form.Label>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </div>
        </Fragment>
    );
};

export default Jobdetails;
