import React, { useState } from 'react'
import Service from './Service';
import PositionInfo from './PositionInfo';
import AboutTheJob from './AboutTheJob';
import SupportingDocuments from './SupportingDocuments';
import HRContact from './HRContact';
import Authorization from './Authorization';

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        position_number: "",
        ministry: "",
        ministry_code: "",
        division: "",
        branch: "",
        department_description: "",
        department_number: "",
        position_title: "",
        job_code_for_existing_position: "",
        position_status: "",
        number_of_positions: "",
        designated_bilingual_position: "",
        duties_responsibilities: "",
        skills: "",
        job_duties: "",
        organizational_change_description: "",
        organizational_chart: "",
        business_rational: "",
        hr_contact: "",
        last_name: "",
        first_name: "",
        telephone_number: "",
        email_address: "",
        contact_person: "",
        cp_last_name: "",
        cp_first_name: "",
        cp_telephone_number: "",
        cp_email_address: "",
        date_of_submission: "",
    });
    const FormTitles = ["Service", "Position Information", "About the Job", "Supporting Document", "HR Contact", "Authorization"]
    const PageDisplay = () => {
        if (page === 0) {
            return <Service />;
        }
        else if (page === 1) {
            return <PositionInfo formData={formData} setFormData={setFormData} />
        }
        else if (page === 2) {
            return <AboutTheJob formData={formData} setFormData={setFormData} />
        }
        else if (page === 3) {
            return <SupportingDocuments formData={formData} setFormData={setFormData} />
        }
        else if (page === 4) {
            return <HRContact formData={formData} setFormData={setFormData} />
        }
        else {
            return <Authorization formData={formData} setFormData={setFormData} />
        }
    };
    const SubmitButtonDisplay = () => {
        if (page === FormTitles.length - 1) {
            return "Submit";
        } else return "Next";
    }
    return (
        <div className='form'>
            <div className='progressbar'>
                <div style={{ width: page === 0 ? "16.6%" : page == 1 ? "33.2%" : page == 2 ? "49.8%" : page == 3 ? "66.4%" : page == 4 ? "83%" : "100%" }}></div>
            </div>
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
                        onClick={() => { setPage((currPage) => currPage + 1) }}>{SubmitButtonDisplay()}</button>
                </div>
            </div>
        </div>

    );

}
export default Form; 