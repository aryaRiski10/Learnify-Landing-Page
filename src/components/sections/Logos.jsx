export default function Logos() {
    const logos = ["Google", "Gojek", "Tokopedia", "Traveloka", "Shopee", "Bukalapak"];
    const listLogos = logos.map((logo, index) => {
        return <span key={index} className="logo-chip">{logo}</span>
    })
    return (
        <section className="logos w-max-width flex flex-col text-center py-[2rem] px-[3rem] gap-[2rem]">
            <h3>Dipercaya oleh alumni dari</h3>
            <div className="logo-slider">
                <div className="logos-row logo-track flex justify-center gap-[3rem] flex-wrap items-center">
                    {listLogos}
                    {listLogos}
                </div>
            </div>

        </section >
    )
}