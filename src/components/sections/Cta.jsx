import Button from "../ui/Button"

export default function Cta() {
    return (
        <section className="cta-wrap w-max-width">
            <div className="cta-section bg-[#18181F] rounded-[28px] relative text-center p-[4rem]">
                <div className="cta-glow1"></div>
                <div className="cta-glow2"></div>
                <h2>Siap tingkatkan<br />karirmu hari ini?</h2>
                <p>Bergabunglah dengan 50.000+ pelajar yang sudah memulai perjalanan mereka.<br />Akses 7 hari pertama gratis, tanpa kartu kredit.</p>
                <div className="cta-btns">
                    <Button variant="primary" className="cta-btn1">Mulai Gratis 7 Hari →</Button>
                    <Button variant="secondary" className="cta-btn2">Jadwalkan Demo</Button>
                </div>
            </div>
        </section>
    )
}