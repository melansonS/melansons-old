const convertText = (text) => {
  const bits = text.split("##");

  const elements = bits.map((bit, i) => {
    if (bit[0] !== "B" && bit[0] !== "P" && bit[0] !== "F") {
      return <span key={`span-${i}`}>{bit}</span>;
    }
    if (bit[0] === "B") {
      return <b key={`b-${i}`}>{bit.substring(1)}</b>;
    } else if (bit[0] === "P") {
      return (
        <span className="pop" key={`pop-${i}`}>
          {bit.substring(1)}
        </span>
      );
    } else if (bit[0] === "F") {
      return (
        <span className="first-pop" key={`F-${i}`}>
          {bit.substring(1)}
        </span>
      );
    } else return null;
  });
  return elements;
};

export default convertText;
