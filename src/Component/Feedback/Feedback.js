import React from 'react';
import './Feedback.css'

const Feedback = () => {
    return (
        <>
            <div className="feedback-section">
             <h1>Thank you so much for taking the time</h1>
             <p>Please provide the below details!</p>
         </div>
         <div>
             <form>
                 <div className="form-group">
                     <label for="FirstName">First Name:</label>
                     <input type="text" class="form-control" id="" placeholder="John" required/>
                 </div>
                 <div className="form-group">
                     <label for="LastName">Last Name:</label>
                     <input type="text" class="form-control" id="" placeholder="Doe" required/>
                 </div>
                 <div className="form-group">
                     <label for="Adress">Adress:</label>
                     <textarea class="form-control" id="description" placeholder="Enter your full postal adress" required/>
                 </div>
                 <div className="form-group">
                     <label for="country">Country:</label>
                     {/* <input type="country" class="form-control" id="" placeholder="India" required/> */}
                     <input class="form-control search-box d-block mx-auto " type="search" placeholder="&#xF002; Search Your Country..." aria-label="Search"/>

                 </div>
                 <div className="form-group">
                     <label for="email">Email Id:</label>
                     <input type="email" class="form-control" id="" placeholder="example@sample.com" required/>
                 </div>
                 <div className="form-group">
                     <div className="row">
                         <div className="col-md-3">
                         <label for="email">Phone</label>
                         <input type="number" class="form-control" id="" placeholder="+91" required/>
                         </div>
                         <div className="col-md-9">
                         <label className="text-left" for="">Number:</label>
                         <input  type="number" class="form-control" id="" placeholder="123456789" required/>
                         </div>
                     </div>
                 </div>
                 <button className="submit-button m-3" type="submit">Submit Feedback</button>
             </form>
         </div>
        </>
    );
};

export default Feedback;