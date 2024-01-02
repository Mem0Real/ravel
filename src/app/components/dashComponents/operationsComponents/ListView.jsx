"use client";

import React, { createContext, useState, useEffect, useRef } from "react";
import List from "./List";

import Search from "./Search";
import ToolForm from "./ToolForm";

import FramerButton from "../../baseComponents/FramerButton";
import { CiCirclePlus } from "react-icons/ci";
import Skeleton from "../../Skeleton";

export const ActionContext = createContext();
export const SelectedContext = createContext();

const ListView = ({ tools }) => {
	const [searchText, setSearchText] = useState("");

	const [data, setData] = useState();
	const [selectedTool, setSelectedTool] = useState(null);

	const [addTool, showAddTool] = useState(false);

	const [editTool, showEditTool] = useState(false);
	const [deleteTool, showDeleteTool] = useState(false);

	const modalRef = useRef();

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

			setTimeout(() => {
				setData(result);
			}, 500);
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
					modalRef,
				}}
			>
				<ToolForm />
			</SelectedContext.Provider>

			{/* Search input and add trigger */}
			<div className="w-[30vw] mx-auto flex justify-around items-center z-10">
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
							className="self-end place-self-end"
						/>
					}
					handleClick={() => toggleTool("add")}
					icon
				/>
			</div>

			<ActionContext.Provider value={{ handleEdit, handleDelete }}>
				{data ? <List tools={data} /> : <Skeleton />}
			</ActionContext.Provider>
		</>
	);
};

export default ListView;
