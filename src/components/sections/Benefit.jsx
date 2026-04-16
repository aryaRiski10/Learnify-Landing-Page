export default function Benefit() {

    const benefits = [
        {
            icon: '🎬',
            title: 'Video HD Berkualitas',
            description: 'Konten video beresolusi tinggi yang bisa diakses kapan saja, termasuk mode offline untuk belajar tanpa internet.',
            iconClass: 'fi-orange'
        },
        {
            icon: '🤖',
            title: 'Mentor AI 24/7',
            description: 'Tanya apa saja kapan saja. Mentor AI kami siap membantu kamu melewati setiap kesulitan belajar secara instan.',
            iconClass: 'fi-purple'
        },
        {
            icon: '🏆',
            title: 'Sertifikat Terverifikasi',
            description: 'Dapatkan sertifikat yang diakui industri setiap kali kamu menyelesaikan kursus dan bagikan ke LinkedIn.',
            iconClass: 'fi-green'
        },
        {
            icon: '💻',
            title: 'Latihan Langsung',
            description: 'Praktik coding dan desain langsung di browser dengan editor terintegrasi. Tidak perlu install apa pun.',
            iconClass: 'fi-blue'
        },
        {
            icon: '📊',
            title: 'Lacak Progressmu',
            description: 'Dashboard personal yang menampilkan statistik belajarmu, streak harian, dan rekomendasi materi selanjutnya.',
            iconClass: 'fi-amber'
        },
        {
            icon: '👥',
            title: 'Komunitas Aktif',
            description: 'Bergabung dengan komunitas pelajar yang aktif. Diskusi, bantu sesama, dan bangun jaringan profesionalmu.',
            iconClass: 'fi-green'
        }
    ]

    const listBenefits = benefits.map((benefit, index) => {
        return (
            <div key={index} className="feature-card bg-[#18181F] rounded-[18px] p-[1.75rem]"><div className={`feature-icon ${benefit.iconClass}`}>{benefit.icon}</div><h3>{benefit.title}</h3><p>{benefit.description}</p></div >
        )
    })
    return (
        <section className="benefit section w-max-width py-[5rem] px-[3rem]">
            <div className="section-tag inline-block">Mengapa Learnify?</div>
            <h2 className="section-title">Cara belajar yang lebih<br />efektif &amp; menyenangkan</h2>
            <p className="section-sub">Kami merancang pengalaman belajar yang disesuaikan dengan gaya belajarmu, sehingga kamu bisa maju lebih cepat.</p>
            <div className="features-grid grid grid-cols-3 gap-[2rem] mt-[3rem]">
                {listBenefits}
            </div>
        </section>
    )
}