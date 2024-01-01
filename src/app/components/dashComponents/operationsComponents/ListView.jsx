"use client";

import React, { createContext, useState, useEffect } from "react";
import List from "./List";

import Search from "./Search";
import ToolForm from "./ToolForm";

import FramerButton from "../../baseComponents/FramerButton";
import { CiCirclePlus } from "react-icons/ci";

export const ActionContext = createContext();
export const SelectedContext = createContext();

const ListView = ({ tools }) => {
	const [searchText, setSearchText] = useState("");

	const [data, setData] = useState();
	const [selectedTool, setSelectedTool] = useState(null);

	const [addTool, showAddTool] = useState(false);

	const [editTool, showEditTool] = useState(false);
	const [deleteTool, showDeleteTool] = useState(false);

	const toggleTool = (tool) => {
		switch (tool) {
			case "add":
				showAddTool(!addTool);
				break;
			case "edit":
				showEditTool(!editTool);
				break;
			case "delete":
				showDeleteTool(!deleteTool);
				break;
		}
	};

	const closeTool = (tool) => {
		switch (tool) {
			case "add":
				showAddTool(false);
				break;
			case "edit":
				showEditTool(false);
				break;
			case "delete":
				showDeleteTool(false);
				break;
		}
		setSelectedTool(null);
	};

	const handleEdit = (id, name, description) => {
		// Select tool to edit
		setSelectedTool({ id, name, description });

		showEditTool(true);
	};

	const handleDelete = (id, name) => {
		// Select tool to delete
		setSelectedTool({ id, name });

		showDeleteTool(true);
	};

	// Filter data on search
	const filterData = (text) => {
		const result = tools.filter((tool) => {
			return tool.name.toLowerCase().includes(text.toLowerCase());
		});

		setData(result);
	};

	// Filter data on search
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
			{/* Modal to add, edit or delete */}
			<SelectedContext.Provider
				value={{ selectedTool, addTool, editTool, deleteTool, closeTool }}
			>
				<ToolForm />
			</SelectedContext.Provider>

			{/* Search input and add trigger */}
			<div className="w-[30%] mx-auto flex justify-evenly items-center z-10">
				<Search
					handleChange={handleChange}
					handleClick={() => toggleTool("add")}
				/>
				<FramerButton
					text={
						<CiCirclePlus
							size={30}
							color="#228B22"
							className="self-end place-self-end mb-1.5"
						/>
					}
					handleClick={() => toggleTool("add")}
					icon
				/>
			</div>

			{/* Display list */}
			<ActionContext.Provider value={{ handleEdit, handleDelete }}>
				{searchText ? <List tools={data} /> : <List tools={tools} />}
			</ActionContext.Provider>
		</>
	);
};

export default ListView;
