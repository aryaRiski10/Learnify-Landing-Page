export default function Testimonial() {
    const testimonials = [
        {
            name: 'Andi Wijaya',
            role: 'Frontend Dev · Startup Jakarta',
            text: '"Dalam 3 bulan belajar React di Learnify, saya berhasil dapat kerja sebagai frontend developer. Kontennya sangat lengkap dan mudah dipahami!"',
            rating: 5,
            avatar: 'AW'
        },
        {
            name: 'Sari Rahayu',
            role: 'Data Analyst · Perusahaan FMCG',
            text: '"Fitur mentor AI-nya luar biasa! Setiap kali saya stuck, langsung bisa tanya dan dapat jawaban yang detail. Rasanya kayak punya guru pribadi."',
            rating: 5,
            avatar: 'SR'
        },
        {
            name: 'Budi Hartono',
            role: 'UI/UX Designer · Agency Digital',
            text: '"Sertifikatnya langsung diakui pas interview. Interviewer bilang mereka familiar dengan kualitas alumni Learnify. Investasi terbaik yang pernah saya lakukan!"',
            rating: 4,
            avatar: 'BH'
        }
    ];

    const listTestimonials = testimonials.map((testi, index) => {
        return (
            <div className="testi-card" key={index}>
                <div className="testi-stars">{"★".repeat(testi.rating)}</div>
                <p className="testi-text">{testi.text}</p>
                <div className="testi-user">
                    <div className={`avatar av${index + 1}`}>{testi.avatar}</div>
                    <div className="user-info">
                        <p>{testi.name}</p>
                        <span>{testi.role}</span>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <section className="testimonials py-[5rem] px-[3rem] w-max-width">
            <div className="section-tag">Testimoni</div>
            <h2 className="section-title">Apa kata mereka yang<br />sudah belajar di sini?</h2>
            <p className="section-sub" style={{ marginBottom: '2.5rem' }}>Ribuan pelajar telah mengubah karir mereka bersama Learnify.</p>
            <div className="testi-grid grid grid-cols-3 gap-6">
                {listTestimonials}
            </div>
        </section>
    )
}