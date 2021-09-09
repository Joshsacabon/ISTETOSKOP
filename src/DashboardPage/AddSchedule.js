import React from 'react'
import { useForm } from 'react-hook-form'
import Modal from 'react-modal'

export const AddSchedule = ({modalIsOpen,sched, onSubmit }) => {

    const {register, handleSubmit} = useForm({
        defaultValues:{
            fname: sched ? sched.fname : "",
            lname: sched ? sched.lname : "",
            time: sched ? sched.time : "",
            date: sched ? sched.date : "",
            description: sched ? sched.description : "",

        }
    })


    const submitHandler =  handleSubmit ((data) => {
        onSubmit(data)
    })

    return(
        <Modal 
        isOpen={modalIsOpen} 
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
        <form onSubmit={submitHandler}>
        <div class="container" style={{ textAlign:'left', fontWeight: 'bold'}}>
          <div className="form-group">
              <div class="row g-3 align-items-center">
                  <div class="col-6"> 
                      <label htmlFor="fname" class="col-12">First Name:</label>
                      <input
                      className="form-control"
                      {...register("fname")}
                      type="text"
                      class="col-12"
                      />
                  </div>
                  <div class="col-6"> 
                      <label htmlFor="lname" class="col-12">Last Name:</label>
                      <input
                      className="form-control"
                      {...register("lname")}
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
                      {...register("time")}
                      type="time"
                      class="col-12"
                      />
                  </div>
                  <div class="col-6"> 
                      <label htmlFor="date" class="col-12">Date:</label>
                      <input
                      className="form-control"
                      {...register("date")}
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
                      {...register("description")}
                      type="description"
                      id="description"
                      />
                  </div>
               </div>
          </div>
              <div className="row g-3 align-items-center">
                  <div class="col-12">
                      <button type="submit" className="infobutton" >
                          Save Schedule
                      </button>
                  </div>
              </div>
        </div>
        </form>
        </Modal>
    )
}