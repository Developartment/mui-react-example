import { LinkProps } from "@mui/material/Link";
import * as _ from "lodash";
import { forwardRef, Ref } from "react";
import { Link } from "react-router-dom";

/**
 * Link wrapper
 */
const LinkWrapper = forwardRef(function Wrapper(
    props: LinkProps,
    ref: Ref<HTMLAnchorElement>
): JSX.Element {
    const linkProps = _.omit(props, ["color", "component"]);
    return <Link ref={ref} to={props.href as string} {...linkProps} />;
});

export default LinkWrapper;
