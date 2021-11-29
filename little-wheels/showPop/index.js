import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";
import "./index.scss";

/**
 * forwardRef包装之后才能render
 */
export const Pop = React.forwardRef((props, ref) => {
  return ReactDOM.createPortal(
    <div className={classnames("defaultPop", props.className)} ref={ref}>
      {props.children}
    </div>,
    props.container
  );
});

/**
 * @param content 内容
 * @param { object }props 属性
 * @param { dom } container 需要插入的节点
 */
const showPop = (content, props = {}, container = document.body) => {
  let rel = document.createElement("div");
  container.appendChild(rel);
  ReactDOM.render(
    <Pop {...props} container={container}>
      {content}
    </Pop>,
    rel
  );

  const hide = () => {
    if (rel) {
      ReactDOM.unmountComponentAtNode(rel);
      container.removeChild(rel);
      rel = null;
    }
  };

  return hide;
};

export default showPop;
