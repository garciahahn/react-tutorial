function Message() {
  // JSX: JavaScript XML
  const name = "garciahahn";
  if (name) return <h1>Hello {name}</h1>;
  else return <h1>Hello planet Earth!</h1>;
}

export default Message;
