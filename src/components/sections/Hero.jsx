import Button from "../ui/Button"

export default function Hero() {
    return (
        <section className="hero w-max-width py-[6rem] pl-[3rem] pr-[4rem] flex flex-row gap-[4rem] grid grid-cols-[1fr_1fr]">
            <div>
                <div className="hero-badge fade-in d1">✦ 10.000+ pelajar aktif setiap hari</div>
                <h1 className="fade-in d2 font-extrabold mb-[1.2rem] text-[var(--text)]">Belajar Skill <em>Digital</em> Bersama Para Ahli</h1>
                <p className="fade-in d3">Platform belajar online terbaik untuk mengembangkan kemampuanmu. Dari coding hingga desain, semua tersedia dengan kurikulum yang terstruktur.</p>
                <div className="hero-btns fade-in d4 flex flex-wrap gap-[1rem] mt-[2rem] justify-items-start">
                    <Button className="btn-primary">Mulai Belajar Sekarang →</Button>
                    <Button className="btn-ghost">Lihat Semua Kursus</Button>
                </div>
                <div className="hero-stats fade-in d5 flex gap-[2rem] mt-[2.5rem]">
                    <div className="stat"><div className="stat-num">200<span>+</span></div><div className="stat-label">Kursus tersedia</div></div>
                    <div className="stat"><div className="stat-num">98<span>%</span></div><div className="stat-label">Tingkat kepuasan</div></div>
                    <div className="stat"><div className="stat-num">50K<span>+</span></div><div className="stat-label">Alumni sukses</div></div>
                </div>
            </div>
            <div className="hero-visual fade-in d3 flex justify-center relative items-center">
                <div className="card-stack relative w-[320px] h-[390px]">
                    <div className="card-back2 absolute bg-[#1F1410] rounded-[20px] h-[330px]"></div>
                    <div className="card-back1 absolute bg-[#17163A] rounded-[20px] h-[350px]"></div>
                    <div className="card-main absolute bg-[#18181F] rounded-[20px] h-[370px] p-[24px] w-full">
                        <div className="course-header flex align-items-center gap-[0.75rem] mb-[1rem]">
                            <div className="course-icon">⚡</div>
                            <div className="course-info">
                                <h4>React untuk Pemula</h4>
                                <p>Progres belajarmu • 65% selesai</p>
                            </div>
                        </div>
                        <div className="progress-bar-wrap"><div className="progress-bar"></div></div>
                        <div className="mini-lessons flex flex-col gap-[0.5rem]">
                            <div className="lesson-item">
                                <div className="lesson-dot dot-done">✓</div>
                                <span className="lesson-name">Dasar JSX &amp; Component</span>
                                <span className="lesson-dur">12 min</span>
                            </div>
                            <div className="lesson-item">
                                <div className="lesson-dot dot-done">✓</div>
                                <span className="lesson-name">Props &amp; State</span>
                                <span className="lesson-dur">18 min</span>
                            </div>
                            <div className="lesson-item" style={{ background: 'rgba(123,107,255,0.1)', border: '1px solid rgba(123,107,255,0.2)' }}>
                                <div className="lesson-dot dot-active">▶</div>
                                <span className="lesson-name">useEffect Hook</span>
                                <span className="lesson-dur" style={{ color: 'var(--accent2)' }}>Sedang berjalan</span>
                            </div>
                            <div className="lesson-item" style={{ opacity: 0.4 }}>
                                <div className="lesson-dot dot-todo">4</div>
                                <span className="lesson-name">React Router</span>
                                <span className="lesson-dur">22 min</span>
                            </div>
                        </div>
                    </div>
                    <div className="float-badge fb-top">🎯 Misi harian selesai!</div>
                    <div className="float-badge fb-bot">✅ Sertifikat siap diunduh</div>
                </div>
            </div>
        </section>
    )
}