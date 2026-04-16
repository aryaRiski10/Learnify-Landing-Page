import Button from "../ui/Button"

export default function Navbar() {
    return (
        <header className="navbar-container flex flex-row justify-between py-[1rem] px-[3rem] border-b-[0.5px] border-[rgba(255,255,255,0.07)]">
            <div className="logo-container">
                <h3>Learn<span style={{ color: '#FF5C3A' }}>ify</span></h3>
            </div>
            <div className="button-start-container">
                <Button href="#get-started" className="btn-primary">Get Started</Button>
            </div>
        </header >
    )
}