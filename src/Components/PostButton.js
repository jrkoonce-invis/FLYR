import React from "react"

// components
import Form from "./Form"


const PostButton = ({postClick}) => {

    const [modalShowing, setModalShowing] = React.useState(false)

    const showModal = () => {
        setModalShowing(true)
        postClick()
    }

    const closeModal = () => {
        setModalShowing(false)
    }

    return (
        <div>
            <div className="btn btn-neutral" onClick={showModal}>
                POST A FLYER HERE
            </div>

            {modalShowing &&
                <div className="fixed z-50 bg-base-200 h-screen w-full top-0 left-0 grid items-center justify-items-center overflow-auto py-10">
                    <button onClick={closeModal} className="btn btn-outline btn-secondary absolute top-8 w-min right-5 md:left-5">Cancel</button>
                    {/* <div className="fixed top-5 left-5" onClick={closeModal}>Cancel</div> */}
                    <Form callBack={closeModal}></Form>
                </div>
            }
        </div>
    )
}

export default PostButton