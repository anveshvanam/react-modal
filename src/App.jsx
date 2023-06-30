import Modal from "./components/Modal";

const userData = {
  user: {
    id: "06162299-8a85-4646-ac58-53d671139618",
    first_name: "vaibhav",
    last_name: "bandal",
    email: "mailto:email3@yopmail.com",
    mobile_number: "1234567890",
    verified: true,
    image:
      "http://stcfileupload.mobilefirsthq.com/uploads/649ad319bb42b_cctv.png",
    organizationAdmin: true,
  },
  organization: {
    id: "16ee5fc1-f07d-4d36-9525-5bbaf81caa01",
    name: "Hello",
    num_of_employee: 343,
    active: true,
    createdAt: "2023-06-05T11:11:14.607Z",
    yearFounded: 2323,
    about: "",
    marketSegment: "Regional",
  },
  organizationCategory: [
    {
      name: "Audio Playback",
      icon: "https://cdn-icons-png.flaticon.com/512/7088/7088436.png",
    },
    {
      name: "CG",
      icon: "https://cdn-icons-png.flaticon.com/512/7088/7088436.png",
    },
  ],
  organizationRole: {
    name: "Reseller",
    sub_role_first: null,
    userType: "vendor",
  },
  organizationAddress: {
    address_line_1: "",
    address_line_2: "",
    city: "",
    country: "",
    state: "",
  },
};

function App() {
  return <Modal userData={userData} />;
}

export default App;
