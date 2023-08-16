import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faPlus,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
const Button = (props) => {
  const {
    dataToggle,
    dataTarget,
    buttonText,
    buttonCategory,
    dataDismiss,
    onClick,
    className,
  } = props;

  const buttonIconMappings = {
    add: faPlus,
    edit: faEdit,
    exit: faTimes,
    "close-modal": faTimes,
    delete: faTrash,
  };

  const icon = buttonIconMappings[buttonCategory];

  return (
    <button
      type="button"
      className={`${buttonCategory || ""} ${className || ""}`}
      data-toggle={dataToggle}
      data-target={dataTarget}
      data-dismiss={dataDismiss}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {buttonText}
    </button>
  );
};

export default Button;
