import React from "react";

const Input = ({ name, onChange, value, type, ...rest }) => {
    const changeHandler = (event) => {
      if (name === "title") {
        const currentText = event.target.value;
        onChange((oldText) =>
          currentText.length <= 50 ? currentText : oldText
        );
      } else {
        onChange(event.target.value);
      }
    };
  
    return (
      <>
        {type === "textarea" ? (
          <textarea
            {...rest}
            className="note-input__body"
            value={value}
            spellCheck={false}
            onChange={changeHandler}
          />
        ) : (
          <input
            {...rest}
            className="note-input__title"
            value={value}
            spellCheck={false}
            onChange={changeHandler}
          />
        )}
      </>
    );
  };
  
  export default Input;
  