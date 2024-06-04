import React, { useState } from 'react'
import Service from './Service';
import PositionInfo from './PositionInfo';
import AboutTheJob from './AboutTheJob';
import SupportingDocuments from './SupportingDocuments';
import HRContact from './HRContact';
import Authorization from './Authorization';

function Form() {
    const [page, setPage] = useState(0);
    const FormTitles = ["Service", "Position Information", "About the Job", "Supporting Document", "HR Contact", "Authorization"]
    const PageDisplay = () => {
        if (page === 0) {
            return <Service />;
        }
        else if (page === 1) {
            return <PositionInfo />
        }
        else if (page === 2) {
            return <AboutTheJob />
        }
        else if (page === 3) {
            return <SupportingDocuments />
        }
        else if (page === 4) {
            return <HRContact />
        }
        else {
            return <Authorization />
        }
    };
    return (
        <div className='form'>
            <div className='progressbar'></div>
            <div className='form-container'>
                <div className='header'>
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className="Instructions">
                    <div className='Classification'>If you would like to submit a classification request,
                        select the ‘Submit a Classification Request’ option
                        from the ‘Select a service’ drop-down menu below.
                        Complete the mandatory fields wherever applicable
                        and attach the required documents. Once
                        completed, click on the ‘submit’ button and your JE
                        Specialist will contact you within 3 business days to
                        discuss your request. After submission, you will
                        receive a confirmation email with a tracking number.</div>
                    <div className='Consultation'>If you would like to have an initial consultation with
                        your Job Evaluation (JE) Specialist before submitting
                        this form, select one of the Consultation Services
                        from the ‘Select a Service’ drop-down menu below.
                        Click on the ‘submit’ button and your JE Specialist
                        will contact you within 3 business days. If you have
                        further questions in filling out the form, please refer
                        to the
                        User Guide
                        . After submission, you will receive
                        a confirmation email with a tracking number.</div>
                </div>
                <div className='body'>{PageDisplay()}</div>
                <div className='footer'>
                    <button
                        disabled={page == 0}
                        onClick={() => { setPage((currPage) => currPage - 1) }}>Prev</button>

                    <button
                        disabled={page == FormTitles.length - 1}
                        onClick={() => { setPage((currPage) => currPage + 1) }}>Next</button>
                </div>
            </div>
        </div>

    );

}
export default Form; 