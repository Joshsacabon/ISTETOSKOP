import React from 'react'

function Home() {
    return (
        <div className="body1">
              <div class="row g-3 align-items-center">
                    <div className="headerhome">
                        <button class="headerbutton">Logout</button> 
                        <div class="headerbutton"> | </div>
                        <button class="headerbutton">Contact Us</button>  
                        <div class="headerbutton"> | </div>
                        <button class="headerbutton">About</button> 
                </div>
            </div>
            <div className="row g-3 align-items-center">
                <div className="col-12">
                    <div class="sidenav ">
                    <img class="imgalign" src="https://www.freeiconspng.com/thumbs/medical-icon-png/health-insurance-icon-png-3.png" title="Title of image" alt="alt text here"/>
                        <hr className="linehr"/>
                        <button class="tablinks" onclick="contenttab(event, 'Dashboard')" id="defaultOpen"> Dashboard </button>
                        <hr className="linehr"/>
                        <button class="tablinks" onclick="contenttab(event, 'Client')" >Client</button>
                        <hr className="linehr"/>
                        <button class="tablinks" onclick="contenttab(event, 'Calendar')" > Calendar</button>
                        <hr className="linehr"/>
                    </div>
                </div>
            </div>
            <div>
                <div className='col-7'>
                    asdadagas
                </div>
            </div>

        </div>

    )
}
export default Home;