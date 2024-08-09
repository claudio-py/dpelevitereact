import './Wpp.css'
export default function Wpp() {
  return (
    <div className="wpp">
      <a
        href="https://api.whatsapp.com/send?phone=5592988665533"
        target="_blank"
        rel="noreferrer">
        <img className="about-logo" src="/logo192.png" alt="wpp" />
      </a>
      <object type="image/svg+xml" data="src/assets/wpp.svg" aria-label="wpp" ></object>
    </div>
  )
}