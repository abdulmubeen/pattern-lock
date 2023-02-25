import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {
  DropdownButton,
  DropdownItem,
  DropdownList,
  DropdownWrapper,
} from "./dropdown.styles";

const DropdownMenu = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsDropdownOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={handleDropdownToggle}>
        <div className="text">{selectedOption || "Options "}</div>
        <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} />
      </DropdownButton>
      {isDropdownOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default DropdownMenu;
