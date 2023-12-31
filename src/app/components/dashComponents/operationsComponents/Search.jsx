import React from "react";
import InputWithIcon from "../../baseComponents/InputWithIcon";

import { MdSearch } from "react-icons/md";
const Search = ({ handleChange }) => {
	return (
		<InputWithIcon
			name="search"
			placeholder="Search..."
			icon={<MdSearch size={21} color="gray" className="-mt-1 me-3" />}
			handleChange={handleChange}
			className="w-fit z-10"
		/>
	);
};

export default Search;
