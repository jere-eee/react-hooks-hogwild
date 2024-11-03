import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Hogs from "./Hogs";
import FilterHog from "./FilterHog";
import SortHog from "./SortHog";
import NewHogForm from "./NewHogForm";

function App() {
	const categories = ["All", "Greased", "Ungreased"]
	const sorts = ["Name", "Weight"]
	const [currentHogs, setCurrentHogs] = useState(hogs)
	const [currentCat, setCurrentCat] = useState("All")
	const [hiddenHogs, setHiddenHogs] = useState([])
	const [name, setName] = useState("");
	const [image, setImg] = useState("");
	const [specialty, setSpecialty] = useState("");
	const [weight, setWeight] = useState("");
	const [greased, setGreased] = useState("")
	const [hma, setHma] = useState("");


	function handleGreased(e) {
		setCurrentCat(e.target.textContent)
	}

	function handleHide(name) {
		const hiddenHog = currentHogs.find((hog) => hog.name === name);

		if (hiddenHog) {
			setCurrentHogs((prev) => {
				return prev.filter((hog) => hog.name !== name);;
			});

			setHiddenHogs((prev) => {
				return [...prev, hiddenHog];
			});
		}
	}

	function handleunHide(name) {
		const unhiddenHog = hiddenHogs.find((hog) => hog.name === name);

		if (unhiddenHog) {
			setHiddenHogs((prev) => {
				return prev.filter((hog) => hog.name !== name);
			});

			setCurrentHogs((prev) => {
				return [...prev, unhiddenHog];
			});
		}
	}

	function handleSort(e) {
		const sorter = e.target.textContent
		setCurrentHogs((prev) => {
			const newArr = [...prev].sort((a, b) => {
				if (sorter === "Weight") {
					return parseFloat(b.weight) - parseFloat(a.weight)
				} else if (sorter === "Name") {
					return a.name.localeCompare(b.name)
				} else return 0
			})
			return newArr
		}
		)
	}

	let newHogs = currentHogs.filter((hog) => {
		if (currentCat === "All") return hog

		if (currentCat === "Greased" && hog.greased) {
			return hog
		} else if (currentCat === "Ungreased" && !hog.greased) {
			return hog
		}
	})

	function handleSubmit(e) {
		e.preventDefault()
		const newHog = {
			name,
			specialty,
			weight,
			greased: greased ? true : false,
			image,
			"highest medal achieved": hma,
		}

		setCurrentHogs((prev) => [...prev, newHog])
		setName("")
		setSpecialty("")
		setWeight("")
		setGreased("")
		setImg("")
		setHma("")
	}

	return (
		<div className="App">
			<Nav />
			<SortHog sorts={sorts} sortCh={handleSort} />
			<FilterHog categories={categories} greaseCh={handleGreased} />
			<NewHogForm 
				onName={(e) => setName(e.target.value)}
				onImage={(e) => setImg(e.target.value)}
				onSpecialty={(e) => setSpecialty(e.target.value)}
				onWeight={(e) => setWeight(e.target.value)}
				onGreased={(e) => setGreased(e.target.value)}
				onHma={(e) => setHma(e.target.value)}
				onFormSub={handleSubmit}
			/>
			<Hogs hogs={newHogs} onHide={handleHide} />
			<Hogs title="Hidden Hogs" hogs={hiddenHogs} onUnhide={handleunHide} />
		</div>
	);
}

export default App;
