// Home.js
"use client";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f2f2f2',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const headingStyle = {
    color: '#333333',
    fontSize: '2rem',
    marginBottom: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#1b88f4',
    color: '#ffffff',
    fontSize: '1rem',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const handleClick = () => {
    router.push("/home/hostingtoall/hosting/hosting6/hosting5");
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Click here to get to the proper website</h1>
      <button style={buttonStyle} onClick={handleClick}>Click here</button>
    </div>
  );
};

export default Home;
