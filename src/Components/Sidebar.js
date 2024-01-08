import React from "react"

// components
import PostButton from "./PostButton"

const Sidebar = ({ postClick, setSelectedFilters, selectedFilters}) => {

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

    const aboutUsView = () => {
        document.getElementById('my_modal_2').showModal()
    }

    const refreshLogo = () => {
        window.location.reload();
    }

    // handle user selecting filters
    const handleFilter = (e) => {
        if(e.target.checked){
            setSelectedFilters(selectedFilters + "," + (e.target.value))
         } else {
            let filtersArray = selectedFilters.split(",")
            setSelectedFilters( (filtersArray.filter((i) => (i != e.target.value))).join(",") )
         }
    }

    return (
        <div className="h-screen flex flex-col justify-items-center justify-center">

            {/* LOGO */}
            <div className="mt-8">
                <img className="object-contain w-full h-32 hover:cursor-pointer" src={require("../Assets/LOGO_DM.png")} onClick={refreshLogo}  alt={"Logo"}/>
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
                            <input onChange={handleFilter} value="Academic/Honor Societies" type="checkbox" class="checkbox checkbox-primary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Activism</span>
                            <input onChange={handleFilter} value="Activism" type="checkbox" class="checkbox checkbox-secondary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Business and Entrepreneurship</span>
                            <input onChange={handleFilter} value="Business and Entrepreneurship" type="checkbox" class="checkbox checkbox-accent" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Performing Arts</span>
                            <input onChange={handleFilter} value="Performing Arts" type="checkbox" class="checkbox checkbox-primary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Cultural</span>
                            <input onChange={handleFilter} value="Cultural" type="checkbox" class="checkbox checkbox-secondary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Enviromental</span>
                            <input onChange={handleFilter} value="Enviromental" type="checkbox" class="checkbox checkbox-accent" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Governance</span>
                            <input onChange={handleFilter} value="Governance" type="checkbox" class="checkbox checkbox-primary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Graduate/PhD</span>
                            <input onChange={handleFilter} value="Graduate/PhD" type="checkbox" class="checkbox checkbox-secondary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Health and Wellness</span>
                            <input onChange={handleFilter} value="Health and Wellness" type="checkbox" class="checkbox checkbox-accent" />
                        </label>

                        <label class="cursor-pointer label">
                            <span class="label-text">Arts and Media</span>
                            <input onChange={handleFilter} value="Arts and Media" type="checkbox" class="checkbox checkbox-primary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Religious/Spiritual</span>
                            <input onChange={handleFilter} value="Religious/Spiriitual" type="checkbox" class="checkbox checkbox-secondary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Engineering</span>
                            <input onChange={handleFilter} value="Enineering" type="checkbox" class="checkbox checkbox-accent" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Sciences</span>
                            <input onChange={handleFilter} value="Sciences" type="checkbox" class="checkbox checkbox-primary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">University</span>
                            <input onChange={handleFilter} value="University" type="checkbox" class="checkbox checkbox-secondary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Service</span>
                            <input onChange={handleFilter} value="Service" type="checkbox" class="checkbox checkbox-accent" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Fraternaties/ Sororities</span>
                            <input onChange={handleFilter} value="Fraternaties/ Sororities" type="checkbox" class="checkbox checkbox-primary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Governance</span>
                            <input onChange={handleFilter} value="Governance" type="checkbox" class="checkbox checkbox-secondary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Sports and Recreation</span>
                            <input onChange={handleFilter} value="Sports and Recreation" type="checkbox" class="checkbox checkbox-accent" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Free Food</span>
                            <input onChange={handleFilter} value="Free Food" type="checkbox" class="checkbox checkbox-primary" />
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
                            <input onChange={handleFilter} value="oncampus" type="checkbox" class="checkbox checkbox-primary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Off-Campus</span>
                            <input onChange={handleFilter} value="offcampus" type="checkbox" class="checkbox checkbox-secondary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Remote</span>
                            <input onChange={handleFilter} value="remote" type="checkbox" class="checkbox checkbox-accent" />
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
                            <input onChange={handleFilter} value="week" type="checkbox" class="checkbox checkbox-primary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Within the Month</span>
                            <input onChange={handleFilter} value="month" type="checkbox" class="checkbox checkbox-secondary" />
                        </label>
                        <label class="cursor-pointer label">
                            <span class="label-text">Non-Event</span>
                            <input onChange={handleFilter} value="nonevent" type="checkbox" class="checkbox checkbox-accent" />
                        </label>
                    </div>
                </div>
                <div className="grid justify-items-center mb-4 mt-10">
                    <PostButton postClick={postClick}></PostButton>
                </div>

                <button className="btn btn-neutral w-full" onClick={aboutUsView}>About Us</button>
                <dialog id="my_modal_2" class="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">About Us</h3>
                        <p className="py-4">Hello! We are FLYR, an....</p>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>


            </div>
        </div>
    )
}

export default Sidebar