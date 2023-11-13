import React from "react"

// components
import PostButton from "./PostButton"

const Sidebar = ({ postClick }) => {

    const [categories, setCategories] = React.useState(false)
    const [location, setLocation] = React.useState(false)
    const [time, setTime] = React.useState(false)

    const handleCategoriesAccordian = (e) => {
        if (categories) {
            setCategories(false)
        } else {
            setCategories(true)
            setLocation(false)
            setTime(false)
        }
    }

    const handleLocationAccordian = (e) => {
        if (location) {
            setLocation(false)
        } else {
            setLocation(true)
            setCategories(false)
            setTime(false)
        }
    }

    const handleTimeAccordian = (e) => {
        if (time) {
            setTime(false)
        } else {
            setTime(true)
            setCategories(false)
            setLocation(false)
        }
    }

    return (
        <div className="h-screen">

            {/* LOGO */}
            <div className="mt-8">
                <img className="object-contain w-60 h-32" src={require("../Assets/LOGO_DM.png")}  alt={"Logo"}/>
            </div>

            {/* CATEGORIES MODAL */}
            {/* <button className="btn bg-base-300" onClick={()=>document.getElementById('my_modal_3').showModal()}>Categories</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg mb-4">Select Categories Below</h3>
                    
                    <div className="grid grid-cols-3 gap-4">
                        <input type="checkbox" aria-label="Academic/Honor Societies" class="btn btn-outline" />
                        <input type="checkbox" aria-label="Activism" class="btn btn-outline" />
                        <input type="checkbox" aria-label="Business and Entrepreneurship" class="btn btn-outline" />
                        
                        <input type="checkbox" aria-label="Performing Arts" class="btn btn-outline" />
                        <input type="checkbox" aria-label="Cultural" class="btn btn-outline" />
                        <input type="checkbox" aria-label="Enviromental" class="btn btn-outline" />
                        
                        <input type="checkbox" aria-label="Governance" class="btn btn-outline" />
                        <input type="checkbox" aria-label="Graduate/PhD" class="btn btn-outline" />
                        <input type="checkbox" aria-label="Health and Wellness" class="btn btn-outline" />
                        
                        <input type="checkbox" aria-label="Arts and Media" class="btn btn-outline" />
                        <input type="checkbox" aria-label="Religious/Spiriitual" class="btn btn-outline" />
                        <input type="checkbox" aria-label="Enineering" class="btn btn-outline" />
                        
                        <input type="checkbox" aria-label="Sciences" class="btn btn-outline" />
                        <input type="checkbox" aria-label="University" class="btn btn-outline" />
                        <input type="checkbox" aria-label="Service" class="btn btn-outline" />
                        
                        <input type="checkbox" aria-label="Fraternaties/Sororities" class="btn btn-outline" />
                        <input type="checkbox" aria-label="Sports and Recreation" class="btn btn-outline" />
                        <input type="checkbox" aria-label="Free Food" class="btn btn-outline" />
                    </div>

                </div>
            </dialog> */}

            {/* CATEGORIES ACCORDIAN */}
            <div className="m-8 h-[calc(100%-10rem)]">
                <div className="collapse collapse-plus bg-base-300 mb-4">
                    <input type="checkbox" onChange={handleCategoriesAccordian} checked={categories} name="categories" /> 
                    <div className="collapse-title font-medium">Categories</div>
                    <div class="collapse-content form-control">
                    <div className="overflow-auto max-h-60 no-scrollbar">
                        <label class="cursor-pointer label">
                            <span class="label-text">Academic/Honor Societies</span>
                            <input type="checkbox" class="checkbox checkbox-primary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Activism</span>
                            <input type="checkbox" class="checkbox checkbox-secondary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Business and Entrepreneurship</span>
                            <input type="checkbox" class="checkbox checkbox-accent" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Performing Arts</span>
                            <input type="checkbox" class="checkbox checkbox-primary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Cultural</span>
                            <input type="checkbox" class="checkbox checkbox-secondary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Enviromental</span>
                            <input type="checkbox" class="checkbox checkbox-accent" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Governance</span>
                            <input type="checkbox" class="checkbox checkbox-primary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Graduate/PhD</span>
                            <input type="checkbox" class="checkbox checkbox-secondary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Health and Wellness</span>
                            <input type="checkbox" class="checkbox checkbox-accent" />
                        </label>
                    </div>

                    </div>
                </div>

                {/* LOCATION ACCORDIAN */}
                <div className="collapse collapse-plus bg-base-300 mb-4">
                    <input type="checkbox" checked={location} onChange={handleLocationAccordian} name="location" /> 
                    <div className="collapse-title font-medium">Location</div>
                    <div class="collapse-content form-control">
                        <label class="cursor-pointer label">
                            <span class="label-text">On-Campus</span>
                            <input type="checkbox" class="checkbox checkbox-primary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Off-Campus</span>
                            <input type="checkbox" class="checkbox checkbox-secondary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Remote</span>
                            <input type="checkbox" class="checkbox checkbox-accent" />
                        </label>
                    </div>
                </div>

                {/* TIME ACCORDIAN */}
                <div className="collapse collapse-plus bg-base-300 mb-4">
                    <input type="checkbox" checked={time} onChange={handleTimeAccordian} name="time" /> 
                    <div className="collapse-title font-medium">Time</div>
                    <div class="collapse-content form-control">
                        <label class="cursor-pointer label">
                            <span class="label-text">Within the Week</span>
                            <input type="checkbox" class="checkbox checkbox-primary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Within the Month</span>
                            <input type="checkbox" class="checkbox checkbox-secondary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Non-Event</span>
                            <input type="checkbox" class="checkbox checkbox-accent" />
                        </label>
                    </div>
                </div>
                <div className="grid justify-items-center mb-4">
                    <PostButton postClick={postClick}></PostButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar