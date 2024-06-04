import React from 'react'

function PositionInfo() {
    return (
        <div>
            <label>Position Number (for Existing position)</label>
            <input type="text" />
            <label>Ministry</label>
            <select type="text">
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
            <input type="text" />
            <label>Division</label>
            <input type="text" />
            <label>Branch</label>
            <input type="text" />
            <label>Department Description</label>
            <input type="text" />
            <label>Department Number</label>
            <input type="text" />
            <label>Position Title</label>
            <input type="text" />
            <label>Job Code (for existing position)</label>
            <input type="text" />
            <label>Position Status</label>
            <select>
                <option>Temporary</option>
                <option>Permanent</option>
            </select>
            <label>Number of Positions</label>
            <input type="text" />
            <label>Designated Bilingual Position</label>
            <select>
                <option>Unilingual</option>
                <option>Bilingual</option>
            </select>



        </div>
    )
}

export default PositionInfo