import styled from "styled-components";
import { layout, space, color, typography, flexbox, grid, background, border, position, shadow } from "styled-system";
import { propType } from "@styled-system/prop-types";

const Box = styled.div(space, layout, color, typography, flexbox, grid, background, border, position, shadow);

Box.propTypes = {
  /**  styled-system layout proptypes*/
  ...propType.layout,
  /**  styled-system layout proptypes */
  ...propType.space,
};

/** @component */
export default Box;
