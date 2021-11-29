"use strict";

import React, { PureComponent } from "react";
import showPop from "COMPONENTS/showPop";
import classnames from "classnames";

export default class Popwin extends PureComponent {
  render() {
    const {
      className = "",
      title,
      content,
      onConfirm = () => {},
      onCancel = () => {},
      closeDialog = () => {},
      cancelTxt = "取消",
      confirmTxt = "确认",
      mode,
    } = this.props;
    // mode === 'yesorno' 两个按钮
    // 默认一个按钮
    const btnsCls = mode === "yesorno" ? "popBtns popBtnsTwo" : "popBtns";
    const popWinNameClz = classnames("mp-popwin", className);
    let confirmCls = "popBtn popConfirm";

    return (
      <div className={popWinNameClz}>
        <div className="mp-popMain">
          {title ? <div className="popTitle">{title}</div> : ""}
          <div className="popContent">{content}</div>
          <div className={btnsCls}>
            {mode === "yesorno" && (
              <div
                className="popBtn popCancel"
                onClick={() => {
                  closeDialog();
                  onCancel();
                }}
              >
                {cancelTxt || "取消"}
              </div>
            )}
            <div
              className={confirmCls}
              onClick={() => {
                closeDialog();
                onConfirm();
              }}
            >
              {confirmTxt || "确定"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export function showPopwin(props, container = document.body) {
  let closeDialog = showPop(
    <Popwin
      {...props}
      closeDialog={() => {
        closeDialog();
      }}
    />,
    {},
    container
  );
}
