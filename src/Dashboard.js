import React, {useState} from 'react'
import Modal from 'react-modal'

export const Dashboard = () => {
    const  [modalIsOpen , setmodalIsOpen ] = useState(false)
    return(
        <div class="tabcontent">

            <div class="headname">Welcome, Dr. Dela Cruz!</div>
            <div class="row">

                <div class="col-10">
                    <div class="dashboardtext"> Today's Schedule <button class="plusbutton" onClick={() => setmodalIsOpen(true)}>+</button> </div>

                    <Modal 
              isOpen={modalIsOpen} 
              onRequestClose={() => setmodalIsOpen(false)} 
              style={
                {
                  overlay:{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255,255,255,0)'
                  },
                  content:{
                    height: '50%',
                    width: '30%',
                    top: 280,
                    left: 800,
                    borderRadius: 20,
                    backgroundColor: '#2FBCBC',
                    boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'
                  }
                }
              }
              >
                  <div class="container" style={{ textAlign:'left', fontWeight: 'bold'}}>
                    <div className="form-group">
                        <div class="row g-3 align-items-center">
                            <div class="col-6"> 
                                <label htmlFor="fname" class="col-12">First Name:</label>
                                <input
                                className="form-control"
                                name="fname"
                                type="text"
                                class="col-12"
                                />
                            </div>
                            <div class="col-6"> 
                                <label htmlFor="lname" class="col-12">Last Name:</label>
                                <input
                                className="form-control"
                                name="lname"
                                type="text"
                                class="col-12"
                                />
                            </div>
                        </div>

                        <div class="infomodal">Information</div>
                         <div class="row g-3 align-items-center">
                            <div class="col-6"> 
                                <label htmlFor="time" class="col-12">Time:</label>
                                <input
                                className="form-control"
                                name="time"
                                type="time"
                                class="col-12"
                                />
                            </div>
                            <div class="col-6"> 
                                <label htmlFor="date" class="col-12">Date:</label>
                                <input
                                className="form-control"
                                name="date"
                                type="date"
                                class="col-12"
                                />
                            </div>
                        </div>
                        <div class="row g-3 align-items-center">
                            <div class="col-12"> 
                                <label htmlFor="description">Description:</label>
                                <textarea
                                className="form-control"
                                name="description"
                                type="description"
                                id="description"
                                />
                            </div>
                         </div>
                    </div>
                        <div className="row g-3 align-items-center">
                            <div class="col-12"> 
                                <button type="submit" className="infobutton">
                                    Add Schedule
                                </button>
                            </div>
                        </div>
                  </div>
            </Modal>




                
                    <table className="table table-borderless mt-3">
                        <tbody>
                        <button class="listbutton justify-content-center">
                        <tr class="row g-3 align-items-center">
                            <td class="col-4">
                                Joshua C. Sacabon
                            </td>
                            <td class="col-4">
                                date
                            </td>
                            <td class="col-4">
                                Patient
                            </td>
                            </tr>
                        </button>
                        </tbody>
                    </table>
                </div>

            </div>

    </div>     
    )
}