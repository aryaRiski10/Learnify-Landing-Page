export default function Footer() {
    return (
        <footer>
            <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '1.2rem' }}>learn<span style={{ color: 'var(--accent)' }}>ify</span></div>
            <span>© 2025 Learnify · Dibuat dengan ❤️ di Indonesia</span>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href="#">Kebijakan Privasi</a>
                <a href="#">Syarat &amp; Ketentuan</a>
            </div>
        </footer>
    )
}