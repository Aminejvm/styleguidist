import styled from "styled-components";
import PropTypes from "prop-types";

const Stack = styled.div(({ horizontal = false, gap = 0, ...props }) => ({
  display: "flex",
  flexDirection: horizontal ? "row" : "column",
  ...props,
  "& > * + *": horizontal
    ? {
        marginLeft: gap,
      }
    : {
        marginTop: gap,
      },
}));

Stack.propTypes = {
  /** Size of the pbuton */
  gap: PropTypes.number.isRequired,
  horizontal: PropTypes.bool,
};

/** @component */
export default Stack;
