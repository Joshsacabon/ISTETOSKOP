import React from 'react'

export const Dashboard = () => {
    return(
        <div class="tabcontent">

            <div class="headname">Welcome, Dr. Dela Cruz!</div>
            <div class="row">

                <div class="col-10">
                    <div class="dashboardtext"> Today's Schedule <button class="plusbutton">+</button> </div>

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