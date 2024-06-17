import React from 'react'

function SupportingDocuments() {
    return (
        <div>
            <h2>Attach supporting document: </h2>
            <p>Organizational chart: it is mandatory to attach a complete organizational chart (with position numbers, job titles, and existing job
                classification levels), see
                sample organizational chart
                for reference.</p>
            <p>Complete organizational chart is mandatory, with department number/s, position number/s and the classification levels.
                Insufficient information will delay the processing of the request</p>
            <input type="file" name="picture" />
            <button>Submit</button>
            <p>Please provide business rationale supporting your request; for example, what is driving the need for the new position creation and/or update/review job description or reorganization.</p>
            <textarea></textarea>
        </div>
    )
}

export default SupportingDocuments