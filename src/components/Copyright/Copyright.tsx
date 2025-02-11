const Copyright = () => {
  return (
    //     color: var(--text);
    //   text-align: center;
    //   font-size: clamp(12px,2vw,18px);
    <footer>
      <h1 style={{ textAlign: "center", fontSize: "clamp(12px,2vw,18px)" }}>
        &copy; {new Date().getFullYear()} Nika Tedozashvili
      </h1>
    </footer>
  );
};

export default Copyright;
