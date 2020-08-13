import React from "react";

const withChildFunction = (fn) => (Wrapped) => {
  return (props) => {
    return (
        <Wrapped {...props}>
          { fn }
        </Wrapped>
    )
  }
};

const withChildFunctionProps = (fn) => (Wrapped) => {
  return (props) => {
    return (
        <Wrapped {...props}>
          { fn.props.children }
        </Wrapped>
    )
  }
};

export {
  withChildFunction,
  withChildFunctionProps
}
