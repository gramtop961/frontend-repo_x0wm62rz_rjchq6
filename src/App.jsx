import { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'

const logos = Array.from({ length: 24 }).map(() => `/logo-placeholder.svg`)
const aboutImages = Array.from({ length: 16 }).map(() => `/about-placeholder.svg`)

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'glass' : ''}`}>
      <div className="container-pad flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-3">
          <img src="/keysiksagency_logo_white.svg" alt="Keysiks" className="h-8 w-auto" loading="lazy" />
        </a>
        <nav className="hidden md:flex items-center gap-6 font-[var(--font-condensed)] uppercase tracking-wide text-sm text-[var(--txt-med)]">
          <a href="#" className="hover:text-white">⌂</a>
          <a href="#mi" className="hover:text-white">О нас</a>
          <div className="relative group">
            <a href="#uslugi" className="hover:text-white">Услуги</a>
            <div className="absolute left-0 mt-2 hidden group-hover:block glass rounded-lg p-3 min-w-[220px]">
              <a className="block px-3 py-2 hover:text-white" href="#uslugi">Брендинг</a>
              <a className="block px-3 py-2 hover:text-white" href="#uslugi">Digital</a>
              <a className="block px-3 py-2 hover:text-white" href="#uslugi">Контент</a>
              <a className="block px-3 py-2 hover:text-white" href="#uslugi">Events</a>
              <a className="block px-3 py-2 hover:text-white" href="#uslugi">PR</a>
              <a className="block px-3 py-2 hover:text-white" href="#uslugi">Design</a>
            </div>
          </div>
          <a href="#key" className="hover:text-white">Кейсы</a>
          <a href="#klienty" className="hover:text-white">Клиенты</a>
          <a href="#kontakty" className="hover:text-white">Контакты</a>
        </nav>
        <button aria-label="menu" onClick={()=>setOpen(v=>!v)} className="md:hidden size-10 grid place-items-center rounded glass">
          <span className={`block w-6 h-0.5 bg-white transition-transform ${open?'rotate-45 translate-y-0.5':''}`}></span>
          <span className={`block w-6 h-0.5 bg-white my-1 transition-opacity ${open?'opacity-0':''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform ${open?'-rotate-45 -translate-y-0.5':''}`}></span>
        </button>
      </div>
      {open && (
        <div className="md:hidden glass">
          <div className="container-pad py-4 grid gap-3 text-[var(--txt-med)]">
            <a href="#" onClick={()=>setOpen(false)}>⌂</a>
            <a href="#mi" onClick={()=>setOpen(false)}>О нас</a>
            <a href="#uslugi" onClick={()=>setOpen(false)}>Услуги</a>
            <a href="#key" onClick={()=>setOpen(false)}>Кейсы</a>
            <a href="#klienty" onClick={()=>setOpen(false)}>Клиенты</a>
            <a href="#kontakty" onClick={()=>setOpen(false)}>Контакты</a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero({ onOrder }) {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden" id="top">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/60 pointer-events-none"></div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="text-[var(--chrome)] text-3xl mb-4">***</div>
        <h1 className="font-[var(--font-manrope)] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-5xl">
          Мы не делаем маркетинг. Мы и есть маркетинг!
        </h1>
        <p className="text-[var(--txt-med)] mt-4 text-lg">Architecture of creative industries</p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a href="#key" className="btn-outline">Показать кейсы</a>
          <button onClick={onOrder} className="btn-red">Заказать проект</button>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="mi" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Creative background layers */}
      <div className="bg-mesh" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-noise" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      <div className="orb orb-red float-slow" style={{ top: '10%', left: '-6%' }} />
      <div className="orb orb-blue float-slow" style={{ bottom: '-6%', right: '5%' }} />

      {/* Existing Ken Burns slider */}
      <div className="kenburns" aria-hidden="true">
        {aboutImages.map((src, i) => (
          <img loading="lazy" src={src} key={i} alt="about" />
        ))}
      </div>

      <div className="relative z-10 container-pad py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">О нас</h2>
          <p className="text-[var(--txt-med)] leading-relaxed">
            Мы выросли из ночной жизни, андеграундной сцены и городской культуры. Сегодня мы соединяем бренды с сообществами, создаем события, образы и смыслы, которые становятся частью культурного кода.
          </p>
        </div>
      </div>
    </section>
  )
}

function Ticker() {
  const text = 'Маркетинг ≠ баннер. Ивент ≠ корпоратив. Комьюнити ≠ CRM. Бренд ≠ логотип. '
  return (
    <section className="relative py-8 border-y overflow-hidden" style={{borderColor:'var(--border)'}}>
      <div className="angle-stripes" aria-hidden="true" />
      <div className="glow-top" aria-hidden="true" />
      <div className="overflow-hidden">
        <div className="ticker">
          <div className="ticker-track text-2xl sm:text-3xl font-[var(--font-condensed)] uppercase">
            {Array.from({length:8}).map((_,i)=> (
              <span key={i} className="mx-6 text-[var(--chrome)]">{text}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function KsxRules() {
  const sceneRef = useRef(null)
  const [running, setRunning] = useState(false)

  useEffect(()=>{ return () => { if(sceneRef.current){ sceneRef.current.innerHTML = '' } } },[])

  const toggle = async () => {
    if(!running){
      const Matter = await import('matter-js')
      const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter
      const container = sceneRef.current
      container.innerHTML = ''
      const width = container.clientWidth
      const height = 360
      const engine = Engine.create()
      const render = Render.create({ element: container, engine, options: { width, height, background: 'transparent', wireframes: false }} )
      const walls = [
        Bodies.rectangle(width/2, -20, width, 40, { isStatic: true }),
        Bodies.rectangle(width/2, height+20, width, 40, { isStatic: true }),
        Bodies.rectangle(-20, height/2, 40, height, { isStatic: true }),
        Bodies.rectangle(width+20, height/2, 40, height, { isStatic: true })
      ]
      const text = 'правила кейсикс'
      const chars = text.split('')
      const startX = 40
      const startY = 120
      const boxes = chars.map((ch, i) =>
        Bodies.rectangle(startX + i*40, startY, 30, 40, {
          render: { fillStyle: 'rgba(255,26,26,0.95)' }
        })
      )
      Composite.add(engine.world, [...walls, ...boxes])
      Render.run(render)
      const runner = Runner.create()
      Runner.run(runner, engine)
      const mouse = Mouse.create(render.canvas)
      const mcon = MouseConstraint.create(engine, { mouse, constraint: { stiffness: 0.2, render: { visible: false } }})
      Composite.add(engine.world, mcon)
      render.mouse = mouse
      container._engine = engine
      container._render = render
      container._runner = runner
      setRunning(true)
    } else {
      const container = sceneRef.current
      if(container){
        try { container._render && container._render.canvas.remove() } catch(e){}
        container.innerHTML = ''
      }
      setRunning(false)
    }
  }

  return (
    <section className="relative container-pad py-24 overflow-hidden">
      <div className="corner-accents" aria-hidden="true" />
      <div className="bg-noise" aria-hidden="true" />
      <div className="max-w-4xl relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">правила кейсикс</h2>
        <p className="text-[var(--txt-med)] mb-6">Нажми кнопку, чтобы текст рассыпался и подчинялся гравитации. Нажми ещё раз — и всё вернётся на место.</p>
        <button className="btn-red" onClick={toggle}>Тыкни сюда</button>
        <div className="mt-6 rounded-xl border relative overflow-hidden" style={{borderColor:'var(--border)'}}>
          <div className="bg-grid" aria-hidden="true" />
          <div className="scanlines" aria-hidden="true" />
          <div ref={sceneRef} className="w-full relative z-10" style={{height: 360}}/>
        </div>
      </div>
    </section>
  )
}

function Services({ onOpen }) {
  const items = [
    { title: 'Брендинг и айдентика', img: '/media-placeholder.svg', modal: 489 },
    { title: 'Digital и реклама', img: '/media-placeholder.svg', modal: 597 },
    { title: 'Контент', img: '/media-placeholder.svg', modal: 602 },
    { title: 'Events', img: '/media-placeholder.svg', modal: 609 },
    { title: 'PR и Influence Collab', img: '/media-placeholder.svg', modal: 613 },
    { title: 'Design & Архитектура', img: '/media-placeholder.svg', modal: 616 },
  ]
  return (
    <section id="uslugi" className="relative container-pad py-24 overflow-hidden">
      <div className="bg-mesh" aria-hidden="true" />
      <div className="bg-noise" aria-hidden="true" />
      <div className="orb orb-red float-slow" style={{ top: '-4%', right: '5%' }} />
      <div className="orb orb-violet float-slow" style={{ bottom: '-6%', left: '0%' }} />
      <h2 className="text-xl uppercase tracking-wider text-[var(--chrome)] mb-6">-УСЛУГИ</h2>
      <div className="grid-cards">
        {items.map((it, idx)=> (
          <article key={idx} className="card h-64">
            <img src={it.img} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10"></div>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="text-xl font-semibold mb-3">{it.title}</h3>
              <button className="btn-outline" onClick={()=>onOpen(it.modal)}>Подробнее</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Philosophy() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(255,26,26,.2),transparent)]" />
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-noise" aria-hidden="true" />
      <div className="relative container-pad">
        <p className="text-2xl sm:text-3xl leading-relaxed max-w-5xl">
          Мы <em className="italic text-[var(--chrome)]">работаем</em> на стыке бизнеса и искусства, технологий и улицы. Мы создаём смыслы, которые двигают бренды. Кейсикс — это место, где бренды становятся <em className="italic text-[var(--chrome)]">культурой</em>.
        </p>
        <div className="mt-12 overflow-hidden">
          <div className="flex gap-12 animate-[scrolllogos_40s_linear_infinite]" style={{willChange:'transform'}}>
            {logos.concat(logos).map((src, i)=> (
              <img key={i} src={src} alt="logo" className="h-12 opacity-80" loading="lazy" />
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes scrolllogos{ 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>
    </section>
  )
}

function Footer() {
  return (
    <footer id="kontakty" className="relative container-pad py-16 border-t overflow-hidden" style={{borderColor:'var(--border)'}}>
      <div className="bg-vignette" aria-hidden="true" />
      <div className="glow-top" aria-hidden="true" />
      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        <div>
          <img src="/keysiksagency_logo_white.svg" alt="Keysiks" className="h-8 w-auto mb-4" />
          <p className="text-[var(--txt-muted)]">© {new Date().getFullYear()} Keysiks agency</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Навигация</h4>
          <nav className="grid gap-1 text-[var(--txt-med)]">
            <a href="#key">Кейсы</a>
            <a href="#klienty">Клиенты</a>
            <a href="#kontakty">Контакты</a>
          </nav>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Контакты</h4>
          <p className="text-[var(--txt-med)]">hello@keysiks.agency</p>
        </div>
      </div>
    </footer>
  )
}

function CasesClients() {
  return (
    <section id="key" className="relative container-pad py-24 overflow-hidden">
      <div className="bg-mesh" aria-hidden="true" />
      <div className="bg-noise" aria-hidden="true" />
      <h2 className="text-3xl font-bold mb-6 relative z-10">Кейсы</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 relative z-10">
        {Array.from({length:6}).map((_,i)=>(
          <div key={i} className="relative h-56 rounded-xl overflow-hidden">
            <img src={`/media-placeholder.svg`} alt="case" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>
      <h2 id="klienty" className="text-3xl font-bold mb-6 relative z-10">Клиенты</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
        {Array.from({length:12}).map((_,i)=>(
          <div key={i} className="h-20 rounded-xl glass grid place-items-center">
            <span className="text-[var(--txt-med)]">Client {i+1}</span>
          </div>
        ))}
      </div>
      <div className="bg-grid" aria-hidden="true" />
    </section>
  )
}

function Modal({ open, onClose, children, title }){
  if(!open) return null
  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
      <div className="absolute inset-0 grid place-items-center p-4">
        <div className="glass max-w-2xl w-full rounded-2xl p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <button className="btn-outline" onClick={onClose}>X</button>
          </div>
          <div className="text-[var(--txt-med)]">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default function App(){
  const [modal, setModal] = useState(null)
  const openModal = (id) => setModal(id)
  const closeModal = () => setModal(null)

  return (
    <div>
      <Header />
      <main>
        <Hero onOrder={()=>openModal(657)} />
        <About />
        <Ticker />
        <KsxRules />
        <Services onOpen={openModal} />
        <Philosophy />
        <CasesClients />
      </main>
      <Footer />
      <Modal open={modal!==null} onClose={closeModal} title={
        modal===657? 'Заказать проект' :
        modal===489? 'Брендинг и айдентика' :
        modal===597? 'Digital и реклама' :
        modal===602? 'Контент' :
        modal===609? 'Events' :
        modal===613? 'PR и Influence Collab' :
        modal===616? 'Design & Архитектура' : 'Окно'
      }>
        <p>Контент модального окна #{modal}. Здесь можно разместить форму заявки или подробности услуги.</p>
      </Modal>
    </div>
  )
}
