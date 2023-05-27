import PropTypes from "prop-types";

function Button({text, deco}) {
    return <button className={deco}>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired
};

export default Button