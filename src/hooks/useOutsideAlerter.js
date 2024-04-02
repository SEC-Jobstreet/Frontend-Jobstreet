/* eslint-disable no-unused-vars */
import { useEffect } from "react";

function useOutsideAlerter(ref, onOutsideClick) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick();
      }
    }
    // Thêm "click" event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Dọn dẹp event listener khi component bị unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onOutsideClick]);
}

export default useOutsideAlerter;
