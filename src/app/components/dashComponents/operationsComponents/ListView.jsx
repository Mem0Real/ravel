"use client";

import React, { createContext, useState, useEffect } from "react";
import List from "./List";

import Search from "./Search";
import ToolForm from "./ToolForm";

import FramerButton from "../../baseComponents/FramerButton";
import { CiCirclePlus } from "react-icons/ci";

import { signal } from "@preact/signals";

export const ActionContext = createContext();
export const SelectedContext = createContext();

// const data = signal(null);

const ListView = ({ tools }) => {
	const [searchText, setSearchText] = useState("");

	const [data, setData] = useState();
	const [selectedTool, setSelectedTool] = useState(null);

	const [addTool, showAddTool] = useState(false);

	const [editTool, showEditTool] = useState(false);
	const [deleteTool, showDeleteTool] = useState(false);

	useEffect(() => {
		if (tools !== data) setData(tools);
		console.log("Updated");
	}, [tools]);

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
		if (text) {
			const result = tools.filter((tool) => {
				return tool.name.toLowerCase().includes(text.toLowerCase());
			});

			setData(result);
		} else setData(tools);
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
				value={{
					selectedTool,
					addTool,
					editTool,
					deleteTool,
					closeTool,
					setSearchText,
				}}
			>
				<ToolForm />
			</SelectedContext.Provider>

			{/* Search input and add trigger */}
			<div className="w-[30%] mx-auto flex justify-evenly items-center z-10">
				<Search
					handleChange={handleChange}
					handleClick={() => toggleTool("add")}
					searchText={searchText}
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

			<ActionContext.Provider value={{ handleEdit, handleDelete }}>
				{data ? (
					<List tools={data} />
				) : (
					<p className="text-center text-2xl mt-10">Loading...</p>
				)}
			</ActionContext.Provider>
		</>
	);
};

export default ListView;
