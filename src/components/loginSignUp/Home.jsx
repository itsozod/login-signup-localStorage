export const Home = () => {
  const logOut = () => {
    localStorage.removeItem("signup");
    window.location.reload();
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        className="container"
      >
        <h1>Home Page</h1>
        <button onClick={() => logOut()}>Log Out</button>
      </div>
    </>
  );
};
