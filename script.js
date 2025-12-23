const IMGBB_API_KEY = "2c1ddc5d3460afdea892c6c069777616";

let events = JSON.parse(localStorage.getItem("myEvents")) || [];
let currentSliderIndices = {};

let selectedNewFiles = [];
let keptImages = [];

let currentDetailId = null;

const grid = document.getElementById("events-grid");
const modal = document.getElementById("modal");
const detailsModal = document.getElementById("details-modal");
const form = document.getElementById("event-form");
const stepsWrapper = document.getElementById("steps-wrapper");
const uploadStatus = document.getElementById("upload-status");
const submitBtn = document.getElementById("submit-btn");
const fileInput = document.getElementById("image-files");

const existingImagesWrapper = document.getElementById(
	"existing-images-wrapper"
);
const existingImagesGrid = document.getElementById("existing-images-grid");

document.addEventListener("DOMContentLoaded", () => {
	renderEvents();
	setInterval(updateTimers, 1000);
});

fileInput.addEventListener("change", (e) => {
	const files = Array.from(e.target.files);
	const total = keptImages.length + files.length;

	if (total > 8) {
		alert(
			`Лимит превышен! Сейчас фото: ${
				keptImages.length
			}. Вы можете добавить еще максимум ${8 - keptImages.length}.`
		);
		fileInput.value = "";
		selectedNewFiles = [];
		uploadStatus.innerText = "Файлы не выбраны";
		return;
	}

	selectedNewFiles = files;
	if (selectedNewFiles.length > 0) {
		uploadStatus.innerText = `Выбрано новых файлов: ${selectedNewFiles.length}`;
		uploadStatus.style.color = "var(--success)";
	} else {
		uploadStatus.innerText = "Файлы не выбраны";
		uploadStatus.style.color = "var(--text-sec)";
	}
});

function openModal(editId = null) {
	modal.classList.add("active");

	form.reset();
	selectedNewFiles = [];
	keptImages = [];
	fileInput.value = "";
	uploadStatus.innerText = "Файлы не выбраны";
	uploadStatus.style.color = "var(--text-sec)";
	stepsWrapper.innerHTML = "";

	if (editId) {
		const ev = events.find((e) => e.id === editId);
		if (!ev) {
			closeModal();
			return;
		}

		document.getElementById("modal-title").innerText = "Редактировать событие";
		document.getElementById("event-id").value = ev.id;
		document.getElementById("title").value = ev.title;
		document.getElementById("description").value = ev.description;
		document.getElementById("deadline").value = ev.deadline;

		keptImages = ev.images ? [...ev.images] : [];
		renderExistingImagesManager();

		if (ev.checklist && ev.checklist.length > 0) {
			ev.checklist.forEach((task) => addStepRow(task.text, task.done));
		} else {
			addStepRow();
		}
	} else {
		document.getElementById("modal-title").innerText = "Новое событие";
		document.getElementById("event-id").value = "";

		existingImagesWrapper.style.display = "none";

		for (let i = 0; i < 3; i++) addStepRow();
	}
}

function closeModal() {
	modal.classList.remove("active");
	keptImages = [];
	selectedNewFiles = [];
}

function renderExistingImagesManager() {
	if (keptImages.length === 0) {
		existingImagesWrapper.style.display = "none";
		return;
	}
	existingImagesWrapper.style.display = "block";
	existingImagesGrid.innerHTML = "";

	keptImages.forEach((url, index) => {
		const div = document.createElement("div");
		div.className = "img-preview-item";
		div.innerHTML = `
            <img src="${url}">
            <button type="button" class="btn-remove-img" onclick="removeKeptImage(${index})">&times;</button>
        `;
		existingImagesGrid.appendChild(div);
	});
}

function removeKeptImage(index) {
	if (
		confirm(
			"Удалить это фото? (Изменения применятся после нажатия 'Сохранить')"
		)
	) {
		keptImages.splice(index, 1);
		renderExistingImagesManager();
	}
}

function addStepRow(text = "", done = false) {
	const div = document.createElement("div");
	div.className = "step-row";
	div.innerHTML = `
        <input type="checkbox" class="step-checkbox-edit" ${
					done ? "checked" : ""
				}>
        <input type="text" class="step-input-field" placeholder="Задача..." value="${text}">
    `;
	stepsWrapper.appendChild(div);
}

form.addEventListener("submit", async (e) => {
	e.preventDefault();

	if (keptImages.length + selectedNewFiles.length > 8) {
		alert(
			"Слишком много фотографий! Удалите старые или выберите меньше новых."
		);
		return;
	}

	submitBtn.disabled = true;
	submitBtn.innerText = "Сохранение...";

	const idField = document.getElementById("event-id").value;
	const title = document.getElementById("title").value;
	const desc = document.getElementById("description").value;
	const deadline = document.getElementById("deadline").value;

	const stepRows = document.querySelectorAll(".step-row");
	const checklist = [];
	stepRows.forEach((row) => {
		const txt = row.querySelector(".step-input-field").value.trim();
		const isDone = row.querySelector(".step-checkbox-edit").checked;
		if (txt.length > 0) {
			checklist.push({ text: txt, done: isDone });
		}
	});

	let finalImages = [...keptImages];

	if (selectedNewFiles.length > 0) {
		uploadStatus.innerText = "⏳ Загрузка фото...";
		try {
			const uploadPromises = selectedNewFiles.map((file) => {
				const formData = new FormData();
				formData.append("image", file);
				return fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
					method: "POST",
					body: formData,
				}).then((res) => res.json());
			});

			const results = await Promise.all(uploadPromises);
			results.forEach((res) => {
				if (res.success) finalImages.push(res.data.url);
			});
		} catch (error) {
			console.error(error);
			alert("Ошибка загрузки фото. Попробуйте еще раз.");
			submitBtn.disabled = false;
			submitBtn.innerText = "Сохранить";
			return;
		}
	}

	if (idField) {
		events = events.map((ev) => {
			if (ev.id === idField) {
				return {
					...ev,
					title: title,
					description: desc,
					deadline: deadline,
					checklist: checklist,
					images: finalImages,
				};
			}
			return ev;
		});
	} else {
		const newEvent = {
			id: Date.now().toString(),
			createdAt: new Date().toISOString(),
			title,
			description: desc,
			images: finalImages,
			deadline,
			checklist,
		};
		events.push(newEvent);
	}

	saveData();
	closeModal();

	if (idField && currentDetailId === idField) {
		openDetails(idField);
	}

	submitBtn.disabled = false;
	submitBtn.innerText = "Сохранить";
});

function openDetails(id) {
	const event = events.find((e) => e.id === id);
	if (!event) return;
	currentDetailId = id;

	document.getElementById("detail-title-text").innerText = event.title;
	document.getElementById("detail-desc-text").innerText =
		event.description || "Нет описания";
	document
		.getElementById("detail-timer-val")
		.setAttribute("data-target", event.deadline);

	const sliderBox = document.getElementById("detail-slider-container");
	sliderBox.innerHTML = generateSliderHTML(event.id, event.images, true);
	currentSliderIndices["detail"] = 0;

	const checkDiv = document.getElementById("detail-checklist");
	const progressSection = document.getElementById("detail-progress-section");

	checkDiv.innerHTML = "";
	progressSection.innerHTML = "";

	if (event.checklist && event.checklist.length > 0) {
		checkDiv.style.display = "block";
		const total = event.checklist.length;
		const doneCount = event.checklist.filter((t) => t.done).length;
		const percent = Math.round((doneCount / total) * 100);

		progressSection.innerHTML = `
            <div class="progress-header"><span>Прогресс</span><span>${doneCount} / ${total}</span></div>
            <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: ${percent}%"></div></div>
        `;

		event.checklist.forEach((task, idx) => {
			const item = document.createElement("label");
			item.className = `checklist-item ${task.done ? "completed" : ""}`;
			item.innerHTML = `
                <input type="checkbox" ${
									task.done ? "checked" : ""
								} onchange="toggleTask('${event.id}', ${idx})">
                <span>${task.text}</span>
            `;
			checkDiv.appendChild(item);
		});
	} else {
		checkDiv.style.display = "none";
	}

	const delBtn = document.getElementById("btn-delete-event");
	delBtn.onclick = () => {
		if (confirm("Вы уверены, что хотите удалить событие?")) {
			events = events.filter((e) => e.id !== id);
			saveData();
			closeDetailsModal();
		}
	};

	detailsModal.classList.add("active");
	updateTimers();
}

function openEditModalFromDetails() {
	if (currentDetailId) {
		const idToEdit = currentDetailId;
		closeDetailsModal();
		setTimeout(() => {
			openModal(idToEdit);
		}, 200);
	}
}

function closeDetailsModal() {
	detailsModal.classList.remove("active");
	currentDetailId = null;
}

function toggleTask(eventId, index) {
	const ev = events.find((e) => e.id === eventId);
	if (ev && ev.checklist && ev.checklist[index]) {
		ev.checklist[index].done = !ev.checklist[index].done;
		saveData();

		if (
			detailsModal.classList.contains("active") &&
			currentDetailId === eventId
		) {
			openDetails(eventId);
		}
	}
}

function generateSliderHTML(id, images, isDetail = false) {
	if (!images || images.length === 0) {
		return isDetail
			? `<div style="color:var(--text-sec); font-weight:500;">Нет изображений</div>`
			: `<div class="card-no-image">Нет фото</div>`;
	}

	const slides = images
		.map(
			(url, idx) =>
				`<img src="${url}" class="slider-img ${
					idx === 0 ? "active" : ""
				}" data-idx="${idx}">`
		)
		.join("");

	const context = isDetail ? "detail" : id;

	if (images.length > 1) {
		const dots = images
			.map((_, idx) => `<div class="dot ${idx === 0 ? "active" : ""}"></div>`)
			.join("");
		return `
            ${slides}
            <button type="button" class="slider-btn prev-btn" onclick="moveSlide(event, '${context}', -1)">&#10094;</button>
            <button type="button" class="slider-btn next-btn" onclick="moveSlide(event, '${context}', 1)">&#10095;</button>
            <div class="slider-dots">${dots}</div>
        `;
	}
	return slides;
}

function moveSlide(e, context, dir) {
	if (e) e.stopPropagation();
	let images = [];

	if (context === "detail") {
		const ev = events.find((ev) => ev.id === currentDetailId);
		if (ev) images = ev.images;
	} else {
		const ev = events.find((ev) => ev.id === context);
		if (ev) images = ev.images;
	}

	if (!images || images.length < 2) return;
	if (currentSliderIndices[context] === undefined)
		currentSliderIndices[context] = 0;

	let newIdx = currentSliderIndices[context] + dir;
	if (newIdx >= images.length) newIdx = 0;
	if (newIdx < 0) newIdx = images.length - 1;

	currentSliderIndices[context] = newIdx;

	let container;
	if (context === "detail")
		container = document.getElementById("detail-slider-container");
	else {
		const card = document.getElementById(`card-${context}`);
		if (card) container = card.querySelector(".card-img-area");
	}

	if (container) {
		const imgs = container.querySelectorAll(".slider-img");
		imgs.forEach((img) => img.classList.remove("active"));
		if (imgs[newIdx]) imgs[newIdx].classList.add("active");

		const dots = container.querySelectorAll(".dot");
		dots.forEach((d) => d.classList.remove("active"));
		if (dots[newIdx]) dots[newIdx].classList.add("active");
	}
}

function renderEvents() {
	grid.innerHTML = "";
	events.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

	if (events.length === 0) {
		grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--text-sec)"><h3>Событий пока нет. Создайте новое!</h3></div>`;
		return;
	}

	events.forEach((event) => {
		currentSliderIndices[event.id] = 0;
		const card = document.createElement("div");
		card.className = "card";
		card.id = `card-${event.id}`;

		const createdDate = new Date(event.createdAt).toLocaleDateString("ru-RU");
		const sliderHTML = generateSliderHTML(event.id, event.images, false);

		let progressHTML = "";
		if (event.checklist && event.checklist.length > 0) {
			const total = event.checklist.length;
			const done = event.checklist.filter((t) => t.done).length;
			const pct = (done / total) * 100;
			progressHTML = `
                <div class="progress-container">
                    <div class="progress-header"><span>Задачи</span><span>${done}/${total}</span></div>
                    <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: ${pct}%"></div></div>
                </div>
            `;
		}

		card.innerHTML = `
            <div class="card-img-area" onclick="openDetails('${event.id}')">
                <div class="card-date-badge">Создано: ${createdDate}</div>
                ${sliderHTML}
            </div>
            <div class="card-body">
                <h3 class="card-title">${event.title}</h3>
                <p class="card-desc">${event.description || "Нет описания"}</p>
                
                <div class="timer-box">
                    <div class="timer-label">Осталось</div>
                    <div class="timer-val" id="timer-${event.id}">...</div>
                </div>

                ${progressHTML}

                <div class="card-footer">
                    <button class="btn btn-sm" onclick="openDetails('${
											event.id
										}')">Подробнее</button>
                </div>
            </div>
        `;
		grid.appendChild(card);
	});
	updateTimers();
	updateGlobalStats();
}

function saveData() {
	localStorage.setItem("myEvents", JSON.stringify(events));
	renderEvents();
}

function updateTimers() {
	const now = new Date().getTime();
	events.forEach((ev) => {
		const el = document.getElementById(`timer-${ev.id}`);
		if (el) el.innerText = getDiff(ev.deadline, now);
	});
	const detailTimer = document.getElementById("detail-timer-val");
	if (detailTimer && detailsModal.classList.contains("active")) {
		const target = detailTimer.getAttribute("data-target");
		if (target) detailTimer.innerText = getDiff(target, now);
	}
}

function getDiff(deadline, now) {
	const dist = new Date(deadline).getTime() - now;
	if (dist < 0) return "Завершено";
	const d = Math.floor(dist / (1000 * 60 * 60 * 24));
	const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
	return `${d}д ${h}ч ${m}м`;
}
function updateGlobalStats() {
	let totalDone = 0;
	let totalTodo = 0;

	events.forEach((ev) => {
		if (ev.checklist && ev.checklist.length > 0) {
			ev.checklist.forEach((task) => {
				if (task.done) {
					totalDone++;
				} else {
					totalTodo++;
				}
			});
		}
	});

	animateValue("global-done", totalDone);
	animateValue("global-todo", totalTodo);
}

function animateValue(id, end) {
	const obj = document.getElementById(id);
	if (!obj) return;
	const start = parseInt(obj.innerText) || 0;
	if (start === end) return;

	obj.innerText = end;
}
