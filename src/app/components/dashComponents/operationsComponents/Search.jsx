import React from "react";
import InputWithIcon from "../../baseComponents/InputWithIcon";

import { MdSearch } from "react-icons/md";
const Search = ({ handleChange, searchText }) => {
	return (
		<InputWithIcon
			name="search"
			placeholder="Search..."
			icon={<MdSearch size={21} color="gray" className="-mt-1 me-3" />}
			handleChange={handleChange}
			className="w-[60vw] z-10 mr-5"
			value={searchText}
		/>
	);
};

export default Search;
