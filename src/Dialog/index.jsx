import React, { useEffect, useRef } from "react";
import './dialog.style.css'

export function Dialog({ isOpen, onClose }) {

  // const dialog = document.querySelector("dialog");
  const dialogRef = useRef(null)

  useEffect(() => {
    console.log('deveriamos mostrar a modal?', isOpen)
    if (isOpen) {
      openDialog()
    } else {
      closeDialog()
    }
  }, [isOpen])

  const openDialog = () => dialogRef.current?.showModal()
  const closeDialog = () => dialogRef.current?.close()

  return (
    <React.Fragment>
      <dialog ref={dialogRef}>
        <button autoFocus onClick={onClose}>Close</button>
        <p>This modal dialog has a groovy backdrop!</p>
      </dialog>
    </React.Fragment>
  )
}