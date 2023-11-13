import React from "react"

// components
import Form from "./Form"


const PostButton = () => {

    const [modalShowing, setModalShowing] = React.useState(false)

    const showModal = () => {
        setModalShowing(true)
    }

    const closeModal = () => {
        setModalShowing(false)
    }

    return (
        <div>
            <p className="text-pal-text" onClick={showModal}>POST A FLYER HERE</p>
            
            {modalShowing &&
                <div>
                    <div onClick={closeModal}>Cancel</div>
                    <Form callBack={closeModal}></Form>
                </div>
            }

        </div>
    )
}

export default PostButton