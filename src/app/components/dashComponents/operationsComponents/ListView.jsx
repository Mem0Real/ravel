"use client";

import React, { useState, useEffect, useRef } from "react";
import InputWithIcon from "../../baseComponents/InputWithIcon";

import { MdSearch } from "react-icons/md";
import List from "./List";
import { CiCirclePlus } from "react-icons/ci";
import { AnimatePresence } from "framer-motion";
import AddToolModal from "../../modals/AddToolModal";

import { flip } from "@/app/constants/variants";
import Modal from "../../Modal";
import FramerButton from "../../baseComponents/FramerButton";

const ListView = ({ tools }) => {
	const [searchText, setSearchText] = useState("");
	const [data, setData] = useState(tools);

	const [showAddTool, setShowAddTool] = useState(false);

	const toggleAddTool = () => {
		setShowAddTool(!showAddTool);
	};

	const closeAddTool = () => {
		setShowAddTool(false);
	};

	useEffect(() => {
		console.log(showAddTool);
	}, [showAddTool]);
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
			<div className="relative w-[90%] md:w-[50%] mx-auto bg-black z-20">
				<AnimatePresence
					initial={false}
					mode="wait"
					onExitComplete={() => null}
				>
					{showAddTool && (
						<Modal
							modalOpen={showAddTool}
							handleClose={closeAddTool}
							content={<AddToolModal handleClose={closeAddTool} />}
							variant={flip}
						/>
					)}
				</AnimatePresence>
			</div>
			<div className="w-[30%] mx-auto flex justify-evenly items-center z-10">
				<InputWithIcon
					name="search"
					placeholder="Search..."
					icon={<MdSearch size={21} color="gray" className="-mt-1 me-3" />}
					handleChange={handleChange}
					className="w-fit z-10"
				/>
				<FramerButton
					text={
						<CiCirclePlus
							size={30}
							color="#228B22"
							className="self-end place-self-end mb-1.5"
						/>
					}
					handleClick={toggleAddTool}
					icon
				/>
			</div>
			{data && <List tools={data} />}
		</>
	);
};

export default ListView;
