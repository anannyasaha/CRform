import React from 'react'

function Authorization({ formData, setFormData }) {
    return (
        <div>
            <p>I authorize the classification request and confirm there is associated funding</p>
            <label>Contact Person</label>
            <select type="text" value={formData.contact_person}
                onChange={(event) =>
                    setFormData({ ...formData, contact_person: event.target.value })}>
                <option>Manager</option>
                <option>Delegated Authority</option>
            </select>

            <label>Last Name</label>
            <input type="text" value={formData.cp_last_name}
                onChange={(event) =>
                    setFormData({ ...formData, cp_last_name: event.target.value })}></input>
            <label>First Name</label>
            <input type="text" value={formData.cp_first_name}
                onChange={(event) =>
                    setFormData({ ...formData, cp_first_name: event.target.value })}></input>
            <label>Telephone Number</label>
            <input type="text" value={formData.cp_telephone_number}
                onChange={(event) =>
                    setFormData({ ...formData, cp_telephone_number: event.target.value })}></input>
            <label>Email Address</label>
            <input type="text" value={formData.cp_email_address}
                onChange={(event) =>
                    setFormData({ ...formData, cp_email_address: event.target.value })}></input>
            <label>Date of Submission</label>
            <input type="date" value={formData.date_of_submission}
                onChange={(event) =>
                    setFormData({ ...formData, date_of_submission: event.target.value })}></input>

        </div>
    )
}

export default Authorization