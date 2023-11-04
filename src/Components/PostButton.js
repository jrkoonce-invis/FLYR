import React from "react"

// components
import Form from "./Form"

// css
import "../CSS/PostButton.css"

const PostButton = ({className}) => {

    const [modalShowing, setModalShowing] = React.useState(false)

    const showModal = () => {
        setModalShowing(true)
    }

    const closeModal = () => {
        setModalShowing(false)
    }

    return (
        <div className={className}>
            <p style={{cursor: "pointer"}} onClick={showModal}>POST A FLYER HERE</p>
            
            {modalShowing &&
                <div className="modal">
                    <div onClick={closeModal} className="cancel">Cancel</div>
                    <Form callBack={closeModal} className="form"></Form>
                </div>
            }

        </div>
    )
}

export default PostButton