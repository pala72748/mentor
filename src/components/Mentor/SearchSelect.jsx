import React, { useState } from 'react';
import Select from 'react-select';

const Searchselect = ({ style, label }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    const options = [
        { value: "india", label: "India" },
        { value: "pakistan", label: "Pakistan" },
        { value: "bhutan", label: "Bhutan" },
    ];
    
    return (
        <div className={style}>
            <label htmlFor="select">{label}</label>
            <Select
                value={selectedOption}
                onChange={handleChange}
                options={options}
                isSearchable={true} // Added for search functionality
            />
        </div>
    );
};

export default Searchselect;
