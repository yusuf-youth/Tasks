import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../context/AppContext";

function Notes() {
  const { isDarkMode, notes, setNotes } = useContext(AppContext);
  const textareaRef = useRef(null);

  const onChange = (e) => {
    setNotes(e.target.value);
    adjustHeight();
  };

  const adjustHeight = () => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [notes]); 

  return (
    <div className={`notes ${isDarkMode ? " notes--dark" : ""}`}>
      <strong className="notes__label">Notes:</strong>
      <textarea
        ref={textareaRef}
        className="notes__field"
        value={notes || ""}
        onChange={onChange}
        placeholder="Some notes..."
        rows={1}
      />
    </div>
  );
}

export default Notes;
