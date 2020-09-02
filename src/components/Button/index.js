import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  padding: 1rem 2rem;
  min-width: 100px;
  width: fit-content;

  font-size: 1rem;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  color: rgb(22, 44, 111);

  background-color: rgb(239, 231, 216);
  border-radius: 4px;
  border-style: none;

  transition: 0.4s all;
  cursor: pointer;

  &:hover:enabled {
    transform: translateY(-2px);
    box-shadow: 0 6px 30px -3px rgb(239, 231, 216);
  }

  &:disabled {
    background-color: rgb(189, 196, 208);
    cursor: progress;
  }
`;

Button.propTypes = {
  // Note(Amine): Testing if styleguide supports proptypes.
  /** Size of the button*/
  size: PropTypes.string.isRequired,
};

/** @component */
export default Button;
