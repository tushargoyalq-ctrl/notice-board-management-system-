const defaultNotices = [
    {
        id: 1,
        title: "CSE Mid-Term Examination Schedule",
        category: "Exams",
        department: "CSE",
        urgency: "High Priority",
        date: "2026-11-05",
        content: "The mid-term examinations for B.Tech CSE 2nd and 3rd year students will commence from November 5, 2026. Detailed seating arrangement will be shared via student portal soon. Attendance is mandatory."
    },
    {
        id: 2,
        title: "Smart India Hackathon Registration Open",
        category: "Events",
        department: "All Departments",
        urgency: "High Priority",
        date: "2026-11-10",
        content: "Global Institute of Technology is inviting interested student teams to register for Smart India Hackathon internal selections. Submit your abstract to the department coordinator by Nov 10."
    },
    {
        id: 3,
        title: "Campus Placement Drive: Tech Mahindra",
        category: "Placements",
        department: "CSE",
        urgency: "Normal",
        date: "2026-11-15",
        content: "Tech Mahindra is conducting an off-campus/on-campus hiring drive for final year engineering graduates. Eligible students with 65% and above must register on the placement portal by Nov 12."
    }
];

let notices = JSON.parse(localStorage.getItem('git_notices')) || defaultNotices;

document.getElementById('current-date').innerText = new Date().toLocaleDateString('en-IN', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
});

const noticesGrid = document.getElementById('notices-grid');
const searchInput = document.getElementById('search-input');
const categoryTabs = document.getElementById('category-tabs');

const noticeModal = document.getElementById('notice-modal');
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const noticeForm = document.getElementById('notice-form');

const detailModal = document.getElementById('detail-modal');
const closeDetailBtn = document.getElementById('close-detail-btn');
const detailTitle = document.getElementById('detail-title');
const detailCategory = document.getElementById('detail-category');
const detailDept = document.getElementById('detail-dept');
const detailDate = document.getElementById('detail-date');
const detailText = document.getElementById('detail-text');

let currentCategory = 'All';

function renderNotices(filterText = '', category = 'All') {
    noticesGrid.innerHTML = '';

    const filtered = notices.filter(notice => {
        const matchesCategory = category === 'All' || notice.category === category || (category === 'Urgent' && notice.urgency === 'High Priority');
        const matchesSearch = notice.title.toLowerCase().includes(filterText.toLowerCase()) || 
                              notice.content.toLowerCase().includes(filterText.toLowerCase()) ||
                              notice.department.toLowerCase().includes(filterText.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        noticesGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748b; padding: 2rem;">No notices found.</p>`;
        return;
    }

    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    filtered.forEach(notice => {
        const card = document.createElement('div');
        card.className = 'notice-card';
        card.onclick = () => openDetailModal(notice);

        const isUrgent = notice.urgency === 'High Priority';

        card.innerHTML = `
            <div>
                <div class="card-header">
                    <span class="badge ${isUrgent ? 'urgent' : ''}">${notice.category}</span>
                    <span class="badge-dept">${notice.department}</span>
                </div>
                <h3>${notice.title}</h3>
                <p>${notice.content}</p>
            </div>
            <div class="card-footer">
                <span>📅 ${notice.date}</span>
                <span style="color: ${isUrgent ? '#991b1b' : '#3b82f6'}; font-weight: 500;">${notice.urgency}</span>
            </div>
        `;
        noticesGrid.appendChild(card);
    });
}

searchInput.addEventListener('input', (e) => {
    renderNotices(e.target.value, currentCategory);
});

categoryTabs.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        currentCategory = e.target.getAttribute('data-category');
        renderNotices(searchInput.value, currentCategory);
    }
});

openModalBtn.onclick = () => noticeModal.classList.add('active');
closeModalBtn.onclick = () => noticeModal.classList.remove('active');
closeDetailBtn.onclick = () => detailModal.classList.remove('active');

window.onclick = (e) => {
    if (e.target === noticeModal) noticeModal.classList.remove('active');
    if (e.target === detailModal) detailModal.classList.remove('active');
}

function openDetailModal(notice) {
    detailTitle.innerText = notice.title;
    detailCategory.innerText = notice.category;
    detailCategory.className = `badge ${notice.urgency === 'High Priority' ? 'urgent' : ''}`;
    detailDept.innerText = `Department: ${notice.department}`;
    detailDate.innerText = `Date: ${notice.date}`;
    detailText.innerText = notice.content;
    detailModal.classList.add('active');
}

noticeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newNotice = {
        id: Date.now(),
        title: document.getElementById('notice-title').value,
        category: document.getElementById('notice-category').value,
        department: document.getElementById('notice-department').value,
        urgency: document.getElementById('notice-urgency').value,
        date: document.getElementById('notice-date').value,
        content: document.getElementById('notice-content').value
    };

    notices.push(newNotice);
    localStorage.setItem('git_notices', JSON.stringify(notices));

    noticeForm.reset();
    noticeModal.classList.remove('active');
    renderNotices(searchInput.value, currentCategory);
});

renderNotices();