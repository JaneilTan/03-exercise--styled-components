import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faPlus,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const StyledButton = styled.button`
  padding: 0.30rem 1.15rem;
  border: none;
  border-radius: 0.5rem;

  background-color: ${(props) => props.$styledButtonBg || ""}
`;
const StyledIcon = styled(FontAwesomeIcon)`
  margin: auto;
`

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

  const colors = {
    add: "#15872f",
    edit: "#ffc107",
    delete: "#dc3545",
    exit: "#dc3545",
    "close-modal": "transparent"

  };
  

  return (
    <StyledButton
      type="button"
      className={`${buttonCategory || ""} ${className || ""}`}
      data-toggle={dataToggle}
      data-target={dataTarget}
      data-dismiss={dataDismiss}
      onClick={onClick}
      $styledButtonBg={colors[buttonCategory]}
     
    >
    {icon && <StyledIcon icon={icon} />}
      {buttonText}
    </StyledButton>
    
  );
};

export default Button;
