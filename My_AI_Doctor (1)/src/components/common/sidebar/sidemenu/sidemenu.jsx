export const MENUITEMS = [
  {
    menutitle: 'MAIN',
    Items: [
      {
        icon: <i className="side-menu__icon bx bx-home"></i>,
        type: 'sub',
        Name: '',
      
        title: 'Dashboards',
 
        
        // children: [
        //   {
        //     path: `${import.meta.env.BASE_URL}dashboards/doctorslist`,
        //     type: 'link',
        //     active: false,
        //     selected: false,
        //     title: 'Doctors',
        //   },
        //   {
        //     path: `${import.meta.env.BASE_URL}dashboards/patient`,
        //     type: 'link',
        //     active: false,
        //     selected: false,
        //     title: 'Patient Details',
        //   },
        //   {
        //     path: `${import.meta.env.BASE_URL}dashboards/patient-allergies`,
        //     type: 'link',
        //     active: false,
        //     selected: false,
        //     title: 'Patient Allergies',
        //   },
        //   {
        //     path: `${import.meta.env.BASE_URL}dashboards/patient-documents`,
        //     type: 'link',
        //     active: false,
        //     selected: false,
        //     title: 'Patient Documents',
        //   },
        //   {
        //     path: `${import.meta.env.BASE_URL}dashboards/patient-billing`,
        //     type: 'link',
        //     active: false,
        //     selected: false,
        //     title: 'Patient Billing',
        //   },
        //   {
        //     path: `${import.meta.env.BASE_URL}dashboards/patient-consent-records`,
        //     type: 'link',
        //     active: false,
        //     selected: false,
        //     title: 'Patient Consent Records',
        //   },
        //   {
        //     path: `${import.meta.env.BASE_URL}dashboards/contact-details`,
        //     type: 'link',
        //     active: false,
        //     selected: false,
        //     title: 'Contact Details',
        //   },
        //   {
        //     path: `${import.meta.env.BASE_URL}dashboards/emergency-contact`,
        //     type: 'link',
        //     active: false,
        //     selected: false,
        //     title: 'Emergency Contact',
        //   },
        //   {
        //     path: `${import.meta.env.BASE_URL}dashboards/family-medical-history`,
        //     type: 'link',
        //     active: false,
        //     selected: false,
        //     title: 'Family Medical History',
        //   },
        //   {
        //     path: `${import.meta.env.BASE_URL}dashboards/insurance-details`,
        //     type: 'link',
        //     active: false,
        //     selected: false,
        //     title: 'Insurance Details',
        //   },
        //   {
        //     path: `${import.meta.env.BASE_URL}dashboards/patient-audit-trail`,
        //     type: 'link',
        //     active: false,
        //     selected: false,
        //     title: 'Patient Audit Trail',
        //   },
        //   {
        //     path: `${import.meta.env.BASE_URL}dashboards/patient-medical-conditions`,
        //     type: 'link',
        //     active: false,
        //     selected: false,
        //     title: 'Patient Medical Conditions',
        //   },
        //   {
        //     path: `${import.meta.env.BASE_URL}dashboards/surgical-history`,
        //     type: 'link',
        //     active: false,
        //     selected: false,
        //     title: 'Surgical History',
        //   },

        //   {
        //     path: `${import.meta.env.BASE_URL}dashboards/bookappointments`,
        //     type: 'link',
        //     active: false,
        //     selected: false,
        //     title: 'Book Appointment',
        //   },
        //   {
        //     path: `${import.meta.env.BASE_URL}dashboards/appointments`,
        //     type: 'link',
        //     active: false,
        //     selected: false,
        //     title: 'Appointments',
        //   },







          
        //     // {
        //     //   path: `${import.meta.env.BASE_URL}dashboards/patientappointments`,
        //     //   type: 'link',
        //     //   active: false,
        //     //   selected: false,
        //     //   title: 'Patient Appointments'
        //     // },
        //     // {
        //     //   path: `${import.meta.env.BASE_URL}dashboards/patientbilling`,
        //     //   type: 'link',
        //     //   active: false,
        //     //   selected: false,
        //     //   title: 'Patient Billing'
        //     // },
        //     // {
        //     //   path: `${import.meta.env.BASE_URL}dashboards/surgicalhistory`,
        //     //   type: 'link',
        //     //   active: false,
        //     //   selected: false,
        //     //   title: 'Surgical History'
        //     // },
        //     // {
        //     //   path: `${import.meta.env.BASE_URL}dashboards/patientvitalsigns`,
        //     //   type: 'link',
        //     //   active: false,
        //     //   selected: false,
        //     //   title: 'Patient Vital Signs'
        //     // },
        //     // {
        //     //   path: `${import.meta.env.BASE_URL}dashboards/patientmedicalconditions`,
        //     //   type: 'link',
        //     //   active: false,
        //     //   selected: false,
        //     //   title: 'Patient Medical Conditions'
        //     // },
        //     // {
        //     //   path: `${import.meta.env.BASE_URL}dashboards/patientmedications`,
        //     //   type: 'link',
        //     //   active: false,
        //     //   selected: false,
        //     //   title: 'Patient Medications'
        //     // },
        //     // {
        //     //   path: `${import.meta.env.BASE_URL}dashboards/familymedicalhistory`,
        //     //   type: 'link',
        //     //   active: false,
        //     //   selected: false,
        //     //   title: 'Family Medical History'
        //     // },
        //     // {
        //     //   path: `${import.meta.env.BASE_URL}dashboards/patientdetails`,
        //     //   type: 'link',
        //     //   active: false,
        //     //   selected: false,
        //     //   title: 'Patient Details'
        //     // },
        //     // {
        //     //   path: `${import.meta.env.BASE_URL}dashboards/patientdocuments`,
        //     //   type: 'link',
        //     //   active: false,
        //     //   selected: false,
        //     //   title: 'Patient Documents'
        //     // },
        //     // {
        //     //   path: `${import.meta.env.BASE_URL}dashboards/patientallergies`,
        //     //   type: 'link',
        //     //   active: false,
        //     //   selected: false,
        //     //   title: 'Patient Allergies'
        //     // },
        //     // {
        //     //   path: `${import.meta.env.BASE_URL}dashboards/patientimmunizations`,
        //     //   type: 'link',
        //     //   active: false,
        //     //   selected: false,
        //     //   title: 'Patient Immunizations'
        //     // },
        //     // {
        //     //   path: `${import.meta.env.BASE_URL}dashboards/insurancedetails`,
        //     //   type: 'link',
        //     //   active: false,
        //     //   selected: false,
        //     //   title: 'Insurance Details'
        //     // },
        //     // {
        //     //   path: `${import.meta.env.BASE_URL}dashboards/patientpaymentmethods`,
        //     //   type: 'link',
        //     //   active: false,
        //     //   selected: false,
        //     //   title: 'Patient Payment Methods'
        //     // },
        //     // {
        //     //   path: `${import.meta.env.BASE_URL}dashboards/contactdetails`,
        //     //   type: 'link',
        //     //   active: false,
        //     //   selected: false,
        //     //   title: 'Contact Details'
        //     // },
        //     // {
        //     //   path: `${import.meta.env.BASE_URL}dashboards/emergencycontactdetails`,
        //     //   type: 'link',
        //     //   active: false,
        //     //   selected: false,
        //     //   title: 'Emergency Contact Details'
        //     // }
          
          

        //   // { path: `${import.meta.env.BASE_URL}dashboards/crypto`, type: 'link', active: false, selected: false, title: 'Crypto' },
          
        // ]
      }
    ]
    
  },
  {
    menutitle: 'Doctors',
    Items: [
      { path: `${import.meta.env.BASE_URL}dashboards/doctorslist`,active: false, selected: false,title: 'Doctors',type: 'link',icon: <i className="side-menu__icon bx bx-user"></i>},
      // { path: `${import.meta.env.BASE_URL}dashboards/bookappointment`,type: 'link',active: false,selected: false,title: 'Book Appointment', icon: <i className="side-menu__icon bx bx-calendar"></i>},
      { path: `${import.meta.env.BASE_URL}dashboards/appointments`,type: 'link',active: false,selected: false,title: 'Appointments', icon: <i className="side-menu__icon bx bx-calendar"></i>},
    ]
  }
  
  // {
  //   Items: [
  //     {

  //       //THIS IS THE WAY TO LINK THE PAGES 
  //       type: 'sub',
  //       Name: '',
  //       active: false,
  //       selected: false,
  //       title: "FORMS",
  //       badge: '',
        
  //       class: 'badge bg-warning-transparent ms-2',
  //       children: [
  //         { path: `${import.meta.env.BASE_URL}dashboards/patient`, type: 'link', active: false, selected: false, title: 'Patient Details' },

  //       ]
  //       // path: `${import.meta.env.BASE_URL}dashboards/doctorslist`,active: false, selected: false,
  //     },
  //   ]
  // },
  
  // {
  //   menutitle: 'OUR SERVICES',
  //   Items: [
  //     {

  //       //THIS IS THE WAY TO LINK THE PAGES 
  //       type: 'sub',
  //       Name: '',
  //       active: false,
  //       selected: false,
  //       title: "DOCTORS",
  //       badge: '',
        
  //       class: 'badge bg-warning-transparent ms-2',
  //       children:[

  //       ]
  //        path: `${import.meta.env.BASE_URL}dashboards/doctorlist/doctorlist`,active: false, selected: false,
       
       
  //     }

  //   ]
  // },
 
  // {

  //   Items: [
  //     {

  //       //THIS IS THE WAY TO LINK THE PAGES 
  //       type: 'sub',
  //       Name: '',
  //       active: false,
  //       selected: false,
  //       title: "HEALTH-ADVISOR",
  //       badge: '',
        
  //       class: 'badge bg-warning-transparent ms-2',
  //       children:[

  //       ]
  //       // path: `${import.meta.env.BASE_URL}dashboards/doctorslist`,active: false, selected: false,
       
       
  //     }

  //   ]

  // },
  // {
  //   Items: [
  //     {

  //       //THIS IS THE WAY TO LINK THE PAGES 
  //       type: 'sub',
  //       Name: '',
  //       active: false,
  //       selected: false,
  //       title: "RECEPTION",
  //       badge: '',
        
  //       class: 'badge bg-warning-transparent ms-2',
  //       children:[

  //       ]
  //       // path: `${import.meta.env.BASE_URL}dashboards/doctorslist`,active: false, selected: false,
       
       
  //     }

  //   ]

  // },
  // {
  //   Items: [
  //     {

  //       //THIS IS THE WAY TO LINK THE PAGES 
  //       type: 'sub',
  //       Name: '',
  //       active: false,
  //       selected: false,
  //       title: "CLAIM-PROCESSOR",
  //       badge: '',
        
  //       class: 'badge bg-warning-transparent ms-2',
  //       children:[

  //       ]
  //       // path: `${import.meta.env.BASE_URL}dashboards/doctorslist`,active: false, selected: false,
       
       
  //     }

  //   ]
  // },
  // {
  //   Items: [
  //     {

  //       //THIS IS THE WAY TO LINK THE PAGES 
  //       type: 'sub',
  //       Name: '',
  //       active: false,
  //       selected: false,
  //       title: "DIET & NUTRITION",
  //       badge: '',
        
  //       class: 'badge bg-warning-transparent ms-2',
  //       children:[

  //       ]
  //       // path: `${import.meta.env.BASE_URL}dashboards/doctorslist`,active: false, selected: false,
       
       
  //     }

  //   ]
  // },
  // {
  //   Items: [
  //     {

  //       //THIS IS THE WAY TO LINK THE PAGES 
  //       type: 'sub',
  //       Name: '',
  //       active: false,
  //       selected: false,
  //       title: "LAB TEACHNICIAN",
  //       badge: '',
        
  //       class: 'badge bg-warning-transparent ms-2',
  //       children:[

  //       ]
  //       // path: `${import.meta.env.BASE_URL}dashboards/doctorslist`,active: false, selected: false,
       
       
  //     }

  //   ]
  // },
  // {
  //   Items: [
  //     {

  //       //THIS IS THE WAY TO LINK THE PAGES 
  //       type: 'sub',
  //       Name: '',
  //       active: false,
  //       selected: false,
  //       title: "THERAPIST",
  //       badge: '',
        
  //       class: 'badge bg-warning-transparent ms-2',
  //       children:[

  //       ]
  //       // path: `${import.meta.env.BASE_URL}dashboards/doctorslist`,active: false, selected: false,
       
       
  //     }

  //   ]
  // },
  // {
  //   Items: [
  //     {

  //       //THIS IS THE WAY TO LINK THE PAGES 
  //       type: 'sub',
  //       Name: '',
  //       active: false,
  //       selected: false,
  //       title: "PHARMACIST",
  //       badge: '',
        
  //       class: 'badge bg-warning-transparent ms-2',
  //       children:[

  //       ]
  //       // path: `${import.meta.env.BASE_URL}dashboards/doctorslist`,active: false, selected: false,
       
       
  //     }

  //   ]
  // },
  // {
  //   Items: [
  //     {

  //       //THIS IS THE WAY TO LINK THE PAGES 
  //       type: 'sub',
  //       Name: '',
  //       active: false,
  //       selected: false,
  //       title: "ADMIN",
  //       badge: '',
        
  //       class: 'badge bg-warning-transparent ms-2',
  //       children:[

  //       ]
  //       // path: `${import.meta.env.BASE_URL}dashboards/doctorslist`,active: false, selected: false,
       
       
  //     }

  //   ]
  // }
 
];
