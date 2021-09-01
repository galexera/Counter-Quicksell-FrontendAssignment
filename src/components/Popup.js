import "./Popup.css";
const Popup = ({ isOpen, setIsOpen, content }) => {
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div id="box">
        <h2>{content}</h2>
        <button id="close" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
