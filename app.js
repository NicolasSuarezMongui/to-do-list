const newTask = document.querySelector(".new-task");
var count=0
newTask.addEventListener("click", () => {
	const name = document.querySelector("#name-task");
	if (name.value === "") {
		alert("Ingresa algun texto");
	} else {
		const listItems = document.querySelector(".list-tasks");
		if (listItems.length < 1){
			count=0
		}else{
			count=count+1
			const newDiv = document.createElement("div");
			newDiv.classList.add("item");
			newDiv.setAttribute("id",count.toString())
			const lbl = document.createElement("label");
			const newCheckBox = document.createElement("input");
			newCheckBox.setAttribute("type", "checkbox");
			newCheckBox.addEventListener("change", ()=>{
				if (newCheckBox.checked){
					textLbl.style.textDecoration = "line-through"
					textLbl.style.color="gray"
				}else{
					textLbl.style.textDecoration = "none"
					textLbl.style.color="black"
				}
			})
			const delButton = document.createElement("button");
			delButton.setAttribute("id",count.toString())
			delButton.addEventListener("click", e=>{
				const id = e.target.getAttribute("id")
				listItems.removeChild(document.getElementById(id))
			})
			delButton.innerText = "Eliminar";
			const textLbl = document.createElement("span");
			textLbl.innerText = name.value;
			lbl.appendChild(newCheckBox);
			lbl.appendChild(textLbl);
			newDiv.appendChild(lbl);
			newDiv.appendChild(delButton);
			listItems.appendChild(newDiv);
			name.value = "";

		}
	}
});
