import './App.css';

function App() {
  return (
		<div className="App">
			{/* first div  */}
			<div className="imageContainer">
				<img
					alt="special"
					class="specialImg"
					src="https://firebasestorage.googleapis.com/v0/b/specialimages-fe01e.appspot.com/o/Screenshot%20from%202023-12-25%2021-33-22.png?alt=media&token=618bdbf2-2b0b-4d6c-8ba2-9889b93862b3"
				/>
			</div>
			{/* first div ended  */}
			{/* second div started  */}
			<div className="secondDiv">
				<div className="secondInnerDiv1">
					<h1>Select Any 3 Activities That You Like</h1>
					<p>It is stablished fact the a reader will distracted.</p>
				</div>

				<div className="secondInnerDiv2">
					<div className="specialContainer">
						<button className="specialButton">Rafting</button>
					</div>
					<div className="specialContainer redBack">
						<button className="specialButton">Paragliding</button>
					</div>
					<div className="specialContainer">
						<button className="specialButton">Cycling</button>
					</div>
					<div className="specialContainer">
						<button className="specialButton">Trekking</button>
					</div>
					<div className="specialContainer">
						<button className="specialButton">Scuba Diving</button>
					</div>
					<div className="specialContainer">
						<button className="specialButton">Bike Riding</button>
					</div>
					<div className="specialContainer">
						<button className="specialButton">Cliff Jumping</button>
					</div>
					<div className="specialContainer">
						<button className="specialButton">Hot Air Balloning</button>
					</div>
				</div>

				<hr />

				<div className="secondInnerDiv1">
					<h1>Select Activiry Difficulty That You Like</h1>
					<p>It is stablished fact that a reader will distracted.</p>
				</div>

				<div className="secondInnerDiv2">
					<div className="specialContainer">
						<button className="specialButton">Beginner</button>
					</div>
					<div className="specialContainer redBack">
						<button className="specialButton">Intermediate</button>
					</div>
					<div className="specialContainer">
						<button className="specialButton">Advanced</button>
					</div>
				</div>

				<div className="secondInnerDiv1">
					<div className="submitContainer">
						<button className="submitButton">Submit</button>
					</div>
          <h1>Skip</h1>
				</div>
			</div>
			{/* second div ended  */}
		</div>
	);
}

export default App;
