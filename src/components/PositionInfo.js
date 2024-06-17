import React from 'react'

function PositionInfo({ formData, setFormData }) {
    return (
        <div>

            <label>Position Number (for Existing position)</label>
            <input type="text"
                value={formData.position_number}
                onChange={(event) =>
                    setFormData({ ...formData, position_number: event.target.value })} />
            <label>Ministry</label>
            <select type="text"
                value={formData.ministry}
                onChange={(event) =>
                    setFormData({ ...formData, ministry: event.target.value })} >
                <option>
                    Cabinet Office
                </option>
                <option>
                    Ministry of Agriculture, Food and Rural Affairs
                </option>
                <option>
                    Ministry of Children, Community and Social Services
                </option>
                <option>
                    Ministry of Citizenship and Multiculturalism
                </option>
                <option>Ministry of Colleges and Universities</option>
                <option>Ministry of Economic Development, Job Creation and Trade</option>
                <option>
                    Ministry of Education
                </option>
                <option>Ministry of Energy</option>
                <option>Ministry of Finance</option>
                <option>Ministry of Francophone Affairs</option>
                <option>Ministry of Health</option>
                <option>Ministry of Indigenous Affairs</option>
            </select>
            <label>Ministry Code</label>
            <input type="text" value={formData.ministry}
                onChange={(event) =>
                    setFormData({ ...formData, ministry: event.target.value })} />
            <label>Division</label>
            <input type="text" value={formData.division}
                onChange={(event) =>
                    setFormData({ ...formData, division: event.target.value })} />
            <label>Branch</label>
            <input type="text" value={formData.branch}
                onChange={(event) =>
                    setFormData({ ...formData, branch: event.target.value })} />
            <label>Department Description</label>
            <input type="text" value={formData.department_description}
                onChange={(event) =>
                    setFormData({ ...formData, department_description: event.target.value })} />
            <label>Department Number</label>
            <input type="text" value={formData.department_number}
                onChange={(event) =>
                    setFormData({ ...formData, department_number: event.target.value })} />
            <label>Position Title</label>
            <input type="text" value={formData.position_title}
                onChange={(event) =>
                    setFormData({ ...formData, position_title: event.target.value })} />
            <label>Job Code (for existing position)</label>
            <input type="text" value={formData.job_code_for_existing_position}
                onChange={(event) =>
                    setFormData({ ...formData, job_code_for_existing_position: event.target.value })} />
            <label>Position Status</label>
            <select value={formData.position_status}
                onChange={(event) =>
                    setFormData({ ...formData, position_status: event.target.value })}>
                <option>Temporary</option>
                <option>Permanent</option>
            </select>
            <label>Number of Positions</label>
            <input type="text" value={formData.number_of_positions}
                onChange={(event) =>
                    setFormData({ ...formData, number_of_positions: event.target.value })} />
            <label>Designated Bilingual Position</label>
            <select value={formData.designated_bilingual_position}
                onChange={(event) =>
                    setFormData({ ...formData, designated_bilingual_position: event.target.value })} >
                <option>Unilingual</option>
                <option>Bilingual</option>
            </select>



        </div>
    )
}

export default PositionInfo