"use client";

import React, { useState, useEffect } from "react";
import InputWithIcon from "../../baseComponents/InputWithIcon";

import { MdSearch } from "react-icons/md";
import List from "./List";

const ListView = ({ tools }) => {
	const [searchText, setSearchText] = useState("");
	const [data, setData] = useState(tools);

	const filterData = (text) => {
		const result = tools.filter((tool) => {
			return tool.name.toLowerCase().includes(text.toLowerCase());
		});

		setData(result);
	};

	useEffect(() => {
		filterData(searchText);
	}, [searchText]);

	const handleChange = (e) => {
		if (e.target.value.length > 0) {
			setSearchText(e.target.value);
		} else {
			setSearchText("");
		}
	};

	return (
		<>
			<InputWithIcon
				name="search"
				placeholder="Search..."
				icon={<MdSearch size={21} color="gray" className="-mt-1 me-3" />}
				handleChange={handleChange}
				className="w-[20%] mx-auto"
			/>
			{data && <List tools={data} />}
		</>
	);
};

export default ListView;
