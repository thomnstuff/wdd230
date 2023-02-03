const btn = document.querySelector("button");

btn.addEventListener('click', function() {
	const list = document.getElementById("list");
	const input =
	document.getElementById("favchap").value;
	let newEl = document.createElement("li");
	let delBtn = document.createElement("button");
	newEl.innerHTML = input;
	list.append(newEl);
	delBtn.textContent = "X";
	newEl.append(delBtn);
	delBtn.addEventListener("click", function(){
		newEl.remove();
		document.getElementById("favchap").focus();
  })
	document.getElementById("favchap").focus();
	document.querySelector("input").value = "";
});