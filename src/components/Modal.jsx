import { Box } from "@mui/material";
import "./Modal.css";
import sports from "../assets/sports.png";

const Modal = () => {
  const userData = {
    user: {
      id: "06162299-8a85-4646-ac58-53d671139618",
      first_name: "Vaibhav",
      last_name: "Bandal",
      email: "email3@yopmail.com",
      mobile_number: "1234567890",
      verified: true,
      image:
        "http://stcfileupload.mobilefirsthq.com/uploads/649ad319bb42b_cctv.png",
      organizationAdmin: true,
      role: "reseller",
      sub_role_first: "null",
      user_type: "vendor",
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

  const {
    user,
    organization,
    organizationCategory,
    organizationAddress,
    organizationRole,
  } = userData;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      marginTop="20px"
      padding="20px"
    >
      <Box
        width="250px"
        height="250px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          border: "3px solid #C4C4C4",
          borderRadius: "50%",
          marginInline: "30px",
        }}
      >
        <img
          src={sports}
          alt="sports"
          style={{
            width: "200px",
          }}
        />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        width="43%"
        sx={{ border: "1px solid #C4C4C4", borderRadius: "12px" }}
        padding="20px"
      >
        <Box justifyContent="flex-start" gap="0px">
          <h2 style={{ marginBottom: "0px" }}>Organization</h2>
          <p>
            {organization.active ? (
              <p style={{ fontSize: "19px" }}>
                {organization.name} <span className="active">Active</span>
              </p>
            ) : (
              <p style={{ fontSize: "19px" }}>
                {organization.name} <span className="inactive">Inactive</span>
              </p>
            )}
          </p>
          <p className="sub-heading">Market Segment</p>
          <p>{organization.marketSegment}</p>
          <p className="sub-heading">No.of.EMP</p>
          <p>{organization.num_of_employee}</p>
          <p className="sub-heading">Created At</p>
          <p>{organization.createdAt}</p>
          <p className="sub-heading"> Founded Year</p>
          <p>{organization.yearFounded}</p>
        </Box>
        <Box>
          <div>
            {organization.active ? (
              <h2>
                {user.first_name} {user.last_name}{" "}
                <span className="active">Verified</span>
              </h2>
            ) : (
              <h2>
                {user.first_name} {user.last_name}{" "}
                <span className="inactive">Un-Verified</span>
              </h2>
            )}
            <p className="sub-heading">Email</p>
            <p>{user.email}</p>
            <p className="sub-heading">Mobile</p>
            <p>{user.mobile_number}</p>
            <p className="sub-heading">Role</p>
            <p>{user.role}</p>
            <p className="sub-heading">Sub_Role_First</p>
            <p>{user.sub_role_first}</p>
            <p className="sub-heading">Organization Admin</p>
            <p>{user.organizationAdmin ? "True" : "False"}</p>
          </div>
        </Box>
      </Box>
      <Box
        width="20%"
        height="150px"
        sx={{
          border: "1px solid #C4C4C4",
          borderRadius: "12px",
          padding: "20px",
        }}
      >
        <h1 className="heading">Organization Category</h1>
        <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
          {organizationCategory.map((category) => (
            <li
              key={category.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                border: "1px solid #C4C4C4",
                borderRadius: "5px",
                height: "30px",
                paddingInline: "10px",
              }}
            >
              <img
                src={category.icon}
                alt="icon"
                style={{ width: "20px", height: "20px" }}
              />
              <p>{category.name}</p>
            </li>
          ))}
        </ul>
      </Box>
      <a
        href=""
        style={{
          color: "#ff6600",
          textDecoration: "none",
          fontSize: "20px",
          fontWeight: "500",
        }}
      >
        Close
      </a>
    </Box>
  );
};

export default Modal;
