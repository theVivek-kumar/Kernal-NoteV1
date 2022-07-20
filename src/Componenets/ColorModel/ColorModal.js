// import React, { useState } from "react";
import { MdClose } from "react-icons/md";
// import { Toast } from "../../components/Toast/Toast";
import "../ColorModel/ColorModal.css";

function ColorModal() {
    return (
        <div style={{ display: "block" }} className="modal--container">
            <div id="myModal" className=" color-modal modal">
                <ul className="flex-row-center flex-start-color">
                    <li className="color-palette"></li>
                    <li className="color-palette"></li>
                    <li className="color-palette"></li>
                    <li className="color-palette"></li>
                </ul>
            </div>
        </div>
    );
}

export { ColorModal };
