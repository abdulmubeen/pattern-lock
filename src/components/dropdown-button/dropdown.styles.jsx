import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.9375rem 1.25rem 0.9375rem 1.25rem;
  border: 1px solid #ccc;
  border-radius: 25px;
  background-color: #585563;
  color: #ceb992;
  font-weight: 400;
  cursor: pointer;

  .text {
    padding-right: 10px;
  }

  &:hover {
    background-color: #73937e;
    color: black;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  display: block;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const DropdownItem = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-bottom: 1px solid black;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;
