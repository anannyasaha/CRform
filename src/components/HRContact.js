import React from 'react'

function HRContact({ formData, setFormData }) {
    return (
        <div>
            <p>I authorize the classification request and confirm there is associated funding</p>

            <label>HR Contact</label>
            <select type="text" value={formData.hr_contact}
                onChange={(event) =>
                    setFormData({ ...formData, hr_contact: event.target.value })}>
                <option>HR Advisorr</option>
                <option>SBU Advisor</option>
            </select>

            <label>Last Name</label>
            <input type="text" value={formData.last_name}
                onChange={(event) =>
                    setFormData({ ...formData, last_name: event.target.value })}></input>
            <label>First Name</label>
            <input type="text" value={formData.first_name}
                onChange={(event) =>
                    setFormData({ ...formData, first_name: event.target.value })}></input>
            <label>Telephone Number</label>
            <input type="text" value={formData.telephone_number}
                onChange={(event) =>
                    setFormData({ ...formData, telephone_number: event.target.value })}></input>
            <label>Email Address</label>
            <input type="text" value={formData.email_address}
                onChange={(event) =>
                    setFormData({ ...formData, email_address: event.target.value })}></input>
        </div>
    )
}

export default HRContact