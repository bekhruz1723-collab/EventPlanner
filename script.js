const IMGBB_API_KEY = "2c1ddc5d3460afdea892c6c069777616";

// === TRANSLATIONS ===
const translations = {
	ru: {
		// Header
		header_done: "Готово",
		header_todo: "В плане",
		header_create: "Создать",

		// Modal titles
		modal_new_event: "Новое событие",
		modal_edit_event: "Редактировать событие",

		// Form labels
		form_title: "Название события",
		form_title_placeholder: "Например: Свадьба Олега и Маши",
		form_description: "Описание",
		form_desc_placeholder: "Детали мероприятия, контакты, заметки...",
		form_photos: "Фотографии (макс. 8)",
		form_no_files: "Файлы не выбраны",
		form_deadline: "Дедлайн",
		form_tasks: "Список задач",
		form_add_task: "+ Добавить задачу",
		form_task_placeholder: "Задача...",

		// Buttons
		btn_cancel: "Отмена",
		btn_save: "Сохранить",
		btn_saving: "Сохранение...",
		btn_delete: "Удалить",
		btn_edit: "Изменить",
		btn_close: "Закрыть",
		btn_details: "Подробнее",

		// Timer
		timer_remaining: "Осталось времени",
		timer_completed: "Завершено",
		timer_days: "д",
		timer_hours: "ч",
		timer_mins: "м",

		// Progress
		progress_label: "Прогресс",
		progress_tasks: "Задачи",

		// Card/Details
		card_created: "Создано:",
		card_no_desc: "Нет описания",
		card_no_photo: "Нет фото",
		card_no_images: "Нет изображений",
		detail_remaining: "Осталось",

		// Messages
		msg_limit_exceeded: "Лимит превышен! Сейчас фото:",
		msg_can_add: "Вы можете добавить еще максимум",
		msg_too_many_photos:
			"Слишком много фотографий! Удалите старые или выберите меньше новых.",
		msg_upload_error: "Ошибка загрузки фото. Попробуйте еще раз.",
		msg_delete_photo:
			"Удалить это фото? (Изменения применятся после нажатия 'Сохранить')",
		msg_delete_event: "Вы уверены, что хотите удалить событие?",
		msg_no_events: "Событий пока нет. Создайте новое!",
		msg_files_selected: "Выбрано новых файлов:",
		msg_uploading: "⏳ Загрузка фото...",
	},
	en: {
		// Header
		header_done: "Done",
		header_todo: "To Do",
		header_create: "Create",

		// Modal titles
		modal_new_event: "New Event",
		modal_edit_event: "Edit Event",

		// Form labels
		form_title: "Event Title",
		form_title_placeholder: "E.g.: John & Mary's Wedding",
		form_description: "Description",
		form_desc_placeholder: "Event details, contacts, notes...",
		form_photos: "Photos (max. 8)",
		form_no_files: "No files selected",
		form_deadline: "Deadline",
		form_tasks: "Task List",
		form_add_task: "+ Add Task",
		form_task_placeholder: "Task...",

		// Buttons
		btn_cancel: "Cancel",
		btn_save: "Save",
		btn_saving: "Saving...",
		btn_delete: "Delete",
		btn_edit: "Edit",
		btn_close: "Close",
		btn_details: "Details",

		// Timer
		timer_remaining: "Time Remaining",
		timer_completed: "Completed",
		timer_days: "d",
		timer_hours: "h",
		timer_mins: "m",

		// Progress
		progress_label: "Progress",
		progress_tasks: "Tasks",

		// Card/Details
		card_created: "Created:",
		card_no_desc: "No description",
		card_no_photo: "No photo",
		card_no_images: "No images",
		detail_remaining: "Remaining",

		// Messages
		msg_limit_exceeded: "Limit exceeded! Current photos:",
		msg_can_add: "You can add maximum",
		msg_too_many_photos:
			"Too many photos! Delete old ones or select fewer new ones.",
		msg_upload_error: "Photo upload error. Please try again.",
		msg_delete_photo:
			"Delete this photo? (Changes will apply after clicking 'Save')",
		msg_delete_event: "Are you sure you want to delete this event?",
		msg_no_events: "No events yet. Create a new one!",
		msg_files_selected: "New files selected:",
		msg_uploading: "⏳ Uploading photos...",
	},
	uz: {
		// Header
		header_done: "Bajarildi",
		header_todo: "Rejada",
		header_create: "Yaratish",

		// Modal titles
		modal_new_event: "Yangi tadbir",
		modal_edit_event: "Tadbirni tahrirlash",

		// Form labels
		form_title: "Tadbir nomi",
		form_title_placeholder: "Masalan: Ali va Oyshaning to'yi",
		form_description: "Tavsif",
		form_desc_placeholder: "Tafsilotlar, kontaktlar, izohlar...",
		form_photos: "Rasmlar (maks. 8)",
		form_no_files: "Fayllar tanlanmagan",
		form_deadline: "Muddat",
		form_tasks: "Vazifalar ro'yxati",
		form_add_task: "+ Vazifa qo'shish",
		form_task_placeholder: "Vazifa...",

		// Buttons
		btn_cancel: "Bekor qilish",
		btn_save: "Saqlash",
		btn_saving: "Saqlanmoqda...",
		btn_delete: "O'chirish",
		btn_edit: "O'zgartirish",
		btn_close: "Yopish",
		btn_details: "Batafsil",

		// Timer
		timer_remaining: "Qolgan vaqt",
		timer_completed: "Yakunlandi",
		timer_days: "k",
		timer_hours: "s",
		timer_mins: "daq",

		// Progress
		progress_label: "Jarayon",
		progress_tasks: "Vazifalar",

		// Card/Details
		card_created: "Yaratildi:",
		card_no_desc: "Tavsif yo'q",
		card_no_photo: "Rasm yo'q",
		card_no_images: "Rasmlar yo'q",
		detail_remaining: "Qolgan",

		// Messages
		msg_limit_exceeded: "Limit oshib ketdi! Hozirgi rasmlar:",
		msg_can_add: "Yana qo'shishingiz mumkin:",
		msg_too_many_photos:
			"Rasmlar juda ko'p! Eskilarini o'chiring yoki kamroq tanlang.",
		msg_upload_error: "Yuklashda xatolik. Qaytadan urinib ko'ring.",
		msg_delete_photo:
			"Bu rasmni o'chirasizmi? (O'zgarishlar 'Saqlash' bosilgandan keyin kuchga kiradi)",
		msg_delete_event: "Tadbirni o'chirishga ishonchingiz komilmi?",
		msg_no_events: "Hozircha tadbirlar yo'q. Yangisini yarating!",
		msg_files_selected: "Tanlangan yangi fayllar:",
		msg_uploading: "⏳ Rasmlar yuklanmoqda...",
	},
};

let currentLang = localStorage.getItem("eventPlannerLang") || "ru";

function t(key) {
	return translations[currentLang][key] || key;
}

function toggleLanguage() {
	if (currentLang === "ru") {
		currentLang = "en";
	} else if (currentLang === "en") {
		currentLang = "uz";
	} else {
		currentLang = "ru";
	}

	localStorage.setItem("eventPlannerLang", currentLang);
	applyTranslations();
	renderEvents();

	// Update language button
	const langBtn = document.getElementById("lang-btn");
	langBtn.textContent = currentLang.toUpperCase();

	// Update HTML lang attribute
	document.documentElement.lang = currentLang;
}

function applyTranslations() {
	// Apply translations to all elements with data-i18n
	document.querySelectorAll("[data-i18n]").forEach((el) => {
		const key = el.getAttribute("data-i18n");
		el.textContent = t(key);
	});

	// Apply placeholder translations
	document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
		const key = el.getAttribute("data-i18n-placeholder");
		el.placeholder = t(key);
	});

	// Update step inputs placeholders
	document.querySelectorAll(".step-input-field").forEach((el) => {
		if (!el.value) {
			el.placeholder = t("form_task_placeholder");
		}
	});
}

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
	applyTranslations();
	renderEvents();
	setInterval(updateTimers, 1000);

	// Set initial language button
	const langBtn = document.getElementById("lang-btn");
	langBtn.textContent = currentLang.toUpperCase();
	document.documentElement.lang = currentLang;
});

fileInput.addEventListener("change", (e) => {
	const files = Array.from(e.target.files);
	const total = keptImages.length + files.length;

	if (total > 8) {
		alert(
			`${t("msg_limit_exceeded")} ${keptImages.length}. ${t("msg_can_add")} ${
				8 - keptImages.length
			}.`
		);
		fileInput.value = "";
		selectedNewFiles = [];
		uploadStatus.innerText = t("form_no_files");
		return;
	}

	selectedNewFiles = files;
	if (selectedNewFiles.length > 0) {
		uploadStatus.innerText = `${t("msg_files_selected")} ${
			selectedNewFiles.length
		}`;
		uploadStatus.style.color = "var(--success)";
	} else {
		uploadStatus.innerText = t("form_no_files");
		uploadStatus.style.color = "var(--text-sec)";
	}
});

function openModal(editId = null) {
	modal.classList.add("active");

	form.reset();
	selectedNewFiles = [];
	keptImages = [];
	fileInput.value = "";
	uploadStatus.innerText = t("form_no_files");
	uploadStatus.style.color = "var(--text-sec)";
	stepsWrapper.innerHTML = "";

	if (editId) {
		const ev = events.find((e) => e.id === editId);
		if (!ev) {
			closeModal();
			return;
		}

		document.getElementById("modal-title").innerText = t("modal_edit_event");
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
		document.getElementById("modal-title").innerText = t("modal_new_event");
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
	if (confirm(t("msg_delete_photo"))) {
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
        <input type="text" class="step-input-field" placeholder="${t(
					"form_task_placeholder"
				)}" value="${text}">
    `;
	stepsWrapper.appendChild(div);
}

form.addEventListener("submit", async (e) => {
	e.preventDefault();

	if (keptImages.length + selectedNewFiles.length > 8) {
		alert(t("msg_too_many_photos"));
		return;
	}

	submitBtn.disabled = true;
	submitBtn.querySelector("span").innerText = t("btn_saving");

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
		uploadStatus.innerText = t("msg_uploading");
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
			alert(t("msg_upload_error"));
			submitBtn.disabled = false;
			submitBtn.querySelector("span").innerText = t("btn_save");
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
	submitBtn.querySelector("span").innerText = t("btn_save");
});

function openDetails(id) {
	const event = events.find((e) => e.id === id);
	if (!event) return;
	currentDetailId = id;

	document.getElementById("detail-title-text").innerText = event.title;
	document.getElementById("detail-desc-text").innerText =
		event.description || t("card_no_desc");
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
            <div class="progress-header"><span>${t(
							"progress_label"
						)}</span><span>${doneCount} / ${total}</span></div>
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
		if (confirm(t("msg_delete_event"))) {
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
			? `<div style="color:var(--text-sec); font-weight:500;">${t(
					"card_no_images"
			  )}</div>`
			: `<div class="card-no-image">${t("card_no_photo")}</div>`;
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
		grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--text-sec)"><h3>${t(
			"msg_no_events"
		)}</h3></div>`;
		return;
	}

	events.forEach((event) => {
		currentSliderIndices[event.id] = 0;
		const card = document.createElement("div");
		card.className = "card";
		card.id = `card-${event.id}`;

		const createdDate = new Date(event.createdAt).toLocaleDateString(
			currentLang === "ru" ? "ru-RU" : currentLang === "uz" ? "uz-UZ" : "en-US"
		);
		const sliderHTML = generateSliderHTML(event.id, event.images, false);

		let progressHTML = "";
		if (event.checklist && event.checklist.length > 0) {
			const total = event.checklist.length;
			const done = event.checklist.filter((t) => t.done).length;
			const pct = (done / total) * 100;
			progressHTML = `
                <div class="progress-container">
                    <div class="progress-header"><span>${t(
											"progress_tasks"
										)}</span><span>${done}/${total}</span></div>
                    <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: ${pct}%"></div></div>
                </div>
            `;
		}

		card.innerHTML = `
            <div class="card-img-area" onclick="openDetails('${event.id}')">
                <div class="card-date-badge">${t(
									"card_created"
								)} ${createdDate}</div>
                ${sliderHTML}
            </div>
            <div class="card-body">
                <h3 class="card-title">${event.title}</h3>
                <p class="card-desc">${
									event.description || t("card_no_desc")
								}</p>
                
                <div class="timer-box">
                    <div class="timer-label">${t("detail_remaining")}</div>
                    <div class="timer-val" id="timer-${event.id}">...</div>
                </div>

                ${progressHTML}

                <div class="card-footer">
                    <button class="btn btn-sm" onclick="openDetails('${
											event.id
										}')">${t("btn_details")}</button>
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
	if (dist < 0) return t("timer_completed");
	const d = Math.floor(dist / (1000 * 60 * 60 * 24));
	const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
	return `${d}${t("timer_days")} ${h}${t("timer_hours")} ${m}${t(
		"timer_mins"
	)}`;
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
