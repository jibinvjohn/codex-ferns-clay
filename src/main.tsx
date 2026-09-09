import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, CalendarDays, Clock3, MapPin, Menu, Sprout, X } from 'lucide-react'
import './styles.css'

const image = (id: string, width = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`

const plants = [
  { name: 'Moss pole philodendron', note: 'Good in bright, indirect light', price: '£28', img: image('photo-1501004318641-b39e6451bec6', 700) },
  { name: 'Bird’s nest fern', note: 'Happy in a steamy kitchen', price: '£18', img: image('photo-1485955900006-10f4d324d411', 700) },
  { name: 'Trailing pothos', note: 'A forgiving shelf companion', price: '£14', img: image('photo-1497250681960-ef046c08a56e', 700) },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <main>
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Fern and Clay home"><span>F</span><i>&amp;</i><span>C</span></a>
      <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation">
        <a href="#plants" onClick={() => setMenuOpen(false)}>Plants</a><a href="#care" onClick={() => setMenuOpen(false)}>Plant care</a><a href="#workshops" onClick={() => setMenuOpen(false)}>Workshops</a><a href="#visit" onClick={() => setMenuOpen(false)}>Visit us</a>
      </nav>
      <a className="header-link" href="#visit">Open today <ArrowUpRight size={15}/></a>
      <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <section className="hero" id="top">
      <img src={image('photo-1463320726281-696a485928c7', 1800)} alt="Leafy plants gathered inside a weathered glass greenhouse" />
      <div className="hero-shade" />
      <div className="hero-copy"><p className="eyebrow">Stoke Newington · London</p><h1>A small greenhouse<br/>for city living.</h1><p className="intro">Houseplants, good pots and plain-spoken help from a working greenhouse on Stoke Newington Church Street.</p><a className="button light" href="#plants">See what’s in today <ArrowUpRight size={17}/></a></div>
      <p className="hero-caption">Open 10–5 today<br/><span>Tuesday–Sunday</span></p>
    </section>

    <section className="welcome wrap">
      <div><p className="eyebrow green">A neighbourhood greenhouse</p><h2>Plants with a proper place to grow.</h2></div>
      <div className="welcome-copy"><p>Fern &amp; Clay is a plant shop and working greenhouse behind an old brick frontage in Stoke Newington. Come in for a first windowsill plant, a useful pot, or a bit of help with the one you already have.</p><a className="text-link" href="#visit">Find the greenhouse <ArrowUpRight size={16}/></a></div>
    </section>

    <section className="available" id="plants"><div className="wrap"><div className="section-top"><div><p className="eyebrow cream">This week in the greenhouse</p><h2>Plants currently available</h2></div><a className="text-link pale" href="#visit">Ask us to set one aside <ArrowUpRight size={16}/></a></div><div className="plant-grid">{plants.map((plant) => <article className="plant" key={plant.name}><img src={plant.img} alt={plant.name}/><div><h3>{plant.name}</h3><p>{plant.note}</p><strong>{plant.price}</strong></div></article>)}</div><p className="stock-note">Stock changes daily. Call 020 7249 8670 if you are after something particular.</p></div></section>

    <section className="care wrap" id="care"><div className="care-photo"><img src={image('photo-1416879595882-3373a0480b5b', 1000)} alt="Leafy houseplants arranged on a greenhouse bench"/></div><div className="care-copy"><p className="eyebrow green">Useful help, not jargon</p><h2>Bring us the tricky one.</h2><p>Bring a photo of your plant and where it sits. We will help you work out light, watering and whether it needs a bigger pot—no booking needed.</p><dl><div><dt>Plant triage</dt><dd>Wednesday &amp; Saturday, 11–3</dd></div><div><dt>Repotting bar</dt><dd>From £5, pot and compost included</dd></div><div><dt>Care notes</dt><dd>Free with every plant</dd></div></dl><a className="button dark" href="mailto:hello@fernandclay.example">Ask a care question <ArrowUpRight size={17}/></a></div></section>

    <section className="workshops" id="workshops"><div className="workshop-image"><img src={image('photo-1459411621453-7b03977f4bfc', 1400)} alt="A plant-filled greenhouse bench prepared for a potting workshop"/></div><div className="workshop-copy"><p className="eyebrow green">Small workshops</p><h2>Hands in the soil.</h2><p>Short, practical sessions around a big timber table. All materials are included, and tea is always on.</p><div className="event"><CalendarDays size={20}/><div><h3>Make a winter windowsill</h3><p>Saturday 23 November · 10:30–12:00</p></div><span>£38</span></div><div className="event"><CalendarDays size={20}/><div><h3>Repotting clinic</h3><p>Thursday 5 December · 18:30–19:30</p></div><span>£18</span></div><a className="text-link" href="mailto:hello@fernandclay.example?subject=Workshop%20booking">Book a place <ArrowUpRight size={16}/></a></div></section>

    <section className="visit" id="visit"><div className="visit-copy"><p className="eyebrow cream">Come by the greenhouse</p><h2>Find us just off Church Street.</h2><p>Walk through the timber gate at 84 Stoke Newington Church Street. The greenhouse is at the end of the yard.</p><div className="visit-details"><div><MapPin size={19}/><p><strong>84 Stoke Newington Church St</strong><br/>London N16 0AS</p></div><div><Clock3 size={19}/><p><strong>Tue–Fri 10–6 · Sat 9–6</strong><br/>Sun 10–5 · Closed Monday</p></div></div><a className="button light" href="https://maps.google.com/?q=Stoke+Newington+Church+Street" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={17}/></a></div><div className="shopfront"><img src={image('photo-1512428559087-560fa5ceab42', 1000)} alt="Greenhouse entrance with plants displayed near the door"/></div></section>

    <section className="delivery wrap"><Sprout size={31}/><div><p className="eyebrow green">Local delivery</p><h2>Plants, delivered carefully.</h2><p>We deliver by bike or small van to N16, N4, N5 and E8 every Thursday and Saturday. Order by 2pm the day before. Delivery is £5, free over £45.</p></div><a className="text-link" href="mailto:hello@fernandclay.example?subject=Local%20delivery">Arrange delivery <ArrowUpRight size={16}/></a></section>

    <footer><a className="brand footer-brand" href="#top"><span>F</span><i>&amp;</i><span>C</span></a><p>Fern &amp; Clay<br/>Stoke Newington, London</p><a href="mailto:hello@fernandclay.example">hello@fernandclay.example</a><p className="small">© Fern &amp; Clay 2024</p></footer>
  </main>
}
createRoot(document.getElementById('root')!).render(<App />)
