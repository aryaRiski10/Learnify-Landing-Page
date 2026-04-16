export default function Course() {

    const courses = [
        {
            icon: '⚛️',
            title: 'React.js dari Nol',
            description: 'Kuasai framework frontend paling populer dari dasar hingga membangun aplikasi nyata siap produksi.',
            bgClass: 'cc-blue'
        },
        {
            icon: '🐍',
            title: 'Python &amp; Data Science',
            description: 'Pelajari Python untuk analisis data, visualisasi, dan machine learning dengan proyek nyata berbasis dataset.',
            bgClass: 'cc-green'
        },
        {
            icon: '🎨',
            title: 'UI/UX Design dengan Figma',
            description: 'Desain antarmuka yang indah dan fungsional. Pelajari prinsip desain, wireframing, dan prototyping profesional.',
            bgClass: 'cc-orange'
        }
    ]

    const listCourses = courses.map((course, index) => {
        return (
            <div className="course-card" key={index}>
                <div className={`course-thumb ${course.bgClass}`}>{course.icon}</div>
                <div className="course-body p-[1.25rem]">
                    <div className="course-header">
                        <div className="course-meta flex items-center gap-2 mb-[0.75rem]">
                            <span className="level-badge lb-beginner">Pemula</span>
                            <span className="dot-sep"></span>
                            <span className="dur-text">24 jam</span>
                        </div>
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                    </div>
                    <div className="course-footer flex items-center justify-between">
                        <span className="stars">★★★★★
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>4.9 (2.3k)</span>
                        </span>
                        <button className="enroll-btn">Daftar Sekarang</button>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <section className="courses-section bg-[#111118]">
            <div className="courses-inner w-max-width py-[5rem] px-[3rem]">
                <div className="section-tag">Kursus Populer</div>
                <h2 className="section-title">Mulai dari yang paling<br />banyak diminati</h2>
                <p className="section-sub" style={{ marginBottom: '2.5rem' }}>Dipilih dan direkomendasikan berdasarkan permintaan industri saat ini.</p>
                <div className="courses-grid grid grid-cols-3 gap-[2rem]">
                    {listCourses}
                </div>
            </div>
        </section>
    )
}