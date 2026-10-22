import { useEffect, useId, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import {
  IconArrow,
  IconClose,
  IconContainer,
  IconCrane,
  IconHazard,
  IconLoaders,
  IconManager,
  IconMark,
  IconReefer,
  IconShield,
  IconTent,
  IconTral,
  IconVan,
  IconWhatsApp,
} from './icons'
import './App.css'

const PHONE_DISPLAY = '+7 706 606 2207'
const PHONE_E164 = '77066062207'
const WHATSAPP_URL = `https://wa.me/${PHONE_E164}`
const TEL_URL = `tel:+${PHONE_E164}`

const FLEET = [
  {
    title: 'Тент',
    text: 'Универсальные фуры. Боковая и верхняя погрузка, защита от дождя и пыли.',
    icon: IconTent,
  },
  {
    title: 'Рефрижератор',
    text: 'Температурный режим от −20°C до +25°C. Продукты, фармацевтика, химия.',
    icon: IconReefer,
  },
  {
    title: 'Трал и открытые платформы',
    text: 'Негабарит, техника и конструкции. Верхняя и боковая погрузка.',
    icon: IconTral,
  },
  {
    title: 'Газели и средние грузовики',
    text: 'От 100 кг до 10 тонн. Срочные поставки, магазины, небольшие партии.',
    icon: IconVan,
  },
  {
    title: 'Контейнеровоз',
    text: '20- и 40-футовые контейнеры. От порта или станции — до склада.',
    icon: IconContainer,
  },
]

const CARGO = [
  { title: 'Стройматериалы', text: 'Гипс, цемент, кирпич, плитка на паллетах.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85' },
  { title: 'Негабарит и техника', text: 'Краны, экскаваторы и конструкции на тралах.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=85' },
  { title: 'Температурные грузы', text: 'Продукты, фармацевтика и химия от +25°C до −20°C.', image: 'https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&w=900&q=85' },
  { title: 'Контейнеры', text: 'Морские и железнодорожные 20′ и 40′.', image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=900&q=85' },
  { title: 'Металлопрокат', text: 'Трубы, балки, арматура, листы и ЖБИ.', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85' },
  { title: 'Сборные партии', text: 'Коробки, мебель, оборудование и переезды.', image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=900&q=85' },
  { title: 'Сырьё и биг-бэги', text: 'Песок, гранулы, смеси и сыпучие грузы.', image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=900&q=85' },
  { title: 'Особые грузы', text: 'ADR, медицина и ценные партии по согласованию.', image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=85' },
]

const STEPS = [
  {
    n: '01',
    title: 'Заявка',
    text: 'Пишите в WhatsApp или оставьте форму. Ответим в течение нескольких минут.',
  },
  {
    n: '02',
    title: 'Расчёт',
    text: 'Уточняем груз, маршрут и сроки. Даём стоимость и варианты машин.',
  },
  {
    n: '03',
    title: 'Договор и машина',
    text: 'Оформляем документы при необходимости. На срочных рейсах техника выезжает сразу.',
  },
  {
    n: '04',
    title: 'Доставка',
    text: 'Координируем погрузку, держим на связи и доводим груз до выгрузки.',
  },
]

function openWhatsApp(message: string) {
  const url = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = contactOpen || menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [contactOpen, menuOpen])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setContactOpen(false)
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openContact = () => {
    setMenuOpen(false)
    setContactOpen(true)
  }

  return (
    <>
      <Header
        onContact={openContact}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((v) => !v)}
        onCloseMenu={() => setMenuOpen(false)}
      />

      <main>
        <Reveal><Hero onContact={openContact} /></Reveal>
        <Reveal delay={80}><Fleet /></Reveal>
        <Reveal delay={120}><Extras /></Reveal>
        <Reveal delay={80}><Cargo /></Reveal>
        <Reveal delay={120}><Why /></Reveal>
        <Reveal delay={80}><Process /></Reveal>
        <Reveal delay={120}><Stats /></Reveal>
        <Reveal delay={80}><About onContact={openContact} /></Reveal>
      </main>

      <Footer onContact={openContact} />
      <MobileContactButton open={contactOpen} onContact={openContact} />
      <ContactPanel open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}

function Header({
  onContact,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
}: {
  onContact: () => void
  menuOpen: boolean
  onToggleMenu: () => void
  onCloseMenu: () => void
}) {
  return (
    <header className="nav">
      <a className="brand" href="#top" aria-label="Грузпроект — на главную">
        <IconMark className="brand-mark" />
        <span>Грузпроект</span>
      </a>

      <nav className="nav-links" aria-label="Основное меню">
        <a href="#fleet">Автопарк</a>
        <a href="#cargo">Грузы</a>
        <a href="#about">О компании</a>
      </nav>

      <div className="nav-actions">
        <a className="nav-phone" href={TEL_URL}>
          {PHONE_DISPLAY}
        </a>
        <button type="button" className="btn btn-light" onClick={onContact}>
          Связаться с нами
        </button>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={onToggleMenu}
        >
          <span className="sr-only">{menuOpen ? 'Закрыть меню' : 'Открыть меню'}</span>
          <span />
          <span />
        </button>
      </div>

      {menuOpen ? (
        <div className="mobile-menu" id="mobile-menu">
          <a href="#fleet" onClick={onCloseMenu}>
            Автопарк
          </a>
          <a href="#cargo" onClick={onCloseMenu}>
            Грузы
          </a>
          <a href="#about" onClick={onCloseMenu}>
            О компании
          </a>
          <a href={TEL_URL}>{PHONE_DISPLAY}</a>
          <button type="button" className="btn btn-solid" onClick={onContact}>
            Связаться с нами
          </button>
        </div>
      ) : null}
    </header>
  )
}

function MobileContactButton({ open, onContact }: { open: boolean; onContact: () => void }) {
  return (
    <button
      type="button"
      className={`mobile-contact ${open ? 'is-hidden' : ''}`}
      onClick={onContact}
      aria-label="Связаться с нами"
    >
      <IconWhatsApp className="mobile-contact-icon" />
      <span>Связаться</span>
    </button>
  )
}

function Hero({ onContact }: { onContact: () => void }) {
  return (
    <section className="hero" id="top">
      <p className="hero-kicker">Грузоперевозки · Казахстан · СНГ · Китай · Европа</p>
      <h1>Выберите направление</h1>

      <div className="hero-split">
        <article className="hero-panel">
          <CargoIllustration />
          <div className="hero-panel-copy">
            <h2>Казахстан и СНГ</h2>
            <p>Городские и междугородние рейсы. Фуры, газели, рефы — под ваш груз.</p>
          </div>
        </article>

        <article className="hero-panel">
          <RouteIllustration />
          <div className="hero-panel-copy">
            <h2>Китай и Европа</h2>
            <p>Международные маршруты, контейнеры и экспедирование под ключ.</p>
          </div>
        </article>
      </div>

      <div className="hero-cta">
        <p>Любой груз — любая машина — в срок.</p>
        <button type="button" className="btn btn-solid" onClick={onContact}>
          Связаться с нами
          <IconArrow className="btn-icon" />
        </button>
      </div>
    </section>
  )
}

function CargoIllustration() {
  return (
    <svg className="hero-illustration" viewBox="0 0 800 560" role="img" aria-label="Грузовой автомобиль в пути">
      <rect width="800" height="560" fill="#f4f4f0" />
      <circle cx="650" cy="105" r="68" fill="#ffd200" />
      <path d="M0 430c170-70 330-60 500-5s220 45 300 10v125H0Z" fill="#e7e7e2" />
      <path d="M0 474c190-28 360-28 800 5" fill="none" stroke="#a6a69e" strokeWidth="4" strokeDasharray="18 20" />
      <g className="hero-art-truck" fill="none" stroke="#111111" strokeWidth="8" strokeLinejoin="round">
        <path d="M154 290h382v137H154z" fill="#ffd200" />
        <path d="M536 335h82l52 54v38H536z" fill="#f0bd00" />
        <path d="M577 350h38l29 30h-67z" fill="#f3eee5" />
        <path d="M186 316h315M186 348h315M186 380h315" stroke="#d99076" strokeWidth="4" />
        <circle cx="250" cy="438" r="31" fill="#292824" />
        <circle cx="250" cy="438" r="11" fill="#f4f4f0" />
        <circle cx="594" cy="438" r="31" fill="#111111" />
        <circle cx="594" cy="438" r="11" fill="#f4f4f0" />
      </g>
      <path d="M112 215h90" stroke="#ffd200" strokeWidth="8" strokeLinecap="round" />
      <path d="M112 215l22-18M112 215l22 18" fill="none" stroke="#ffd200" strokeWidth="8" strokeLinecap="round" />
    </svg>
  )
}

function RouteIllustration() {
  return (
    <svg className="hero-illustration" viewBox="0 0 800 560" role="img" aria-label="Маршрут доставки с навигационной звездой">
      <rect width="800" height="560" fill="#f4f4f0" />
      <path d="M0 400c125-90 200-30 310-100s160-160 280-100 105 102 210 40v320H0Z" fill="#e7e7e2" />
      <path d="M-20 420c135-94 235-22 345-103s164-130 278-72 126 91 235 28" fill="none" stroke="#ffffff" strokeWidth="26" strokeLinecap="round" />
      <path d="M-20 420c135-94 235-22 345-103s164-130 278-72 126 91 235 28" fill="none" stroke="#ffd200" strokeWidth="5" strokeDasharray="12 15" strokeLinecap="round" />
      <g transform="translate(585 112)">
        <path d="m0-55 15 39 40 16-40 15-15 40-15-40-40-15 40-16Z" fill="#ffd200" stroke="#111111" strokeWidth="7" />
        <circle r="11" fill="#f4f4f0" />
      </g>
      <g transform="translate(230 344)" fill="none" stroke="#292824" strokeWidth="8" strokeLinejoin="round">
        <path d="M-74-26h82l28 32v42h-110z" fill="#ffd200" />
        <path d="M8-3h28l17 18H8z" fill="#f4f4f0" />
        <circle cx="-43" cy="50" r="19" fill="#111111" />
        <circle cx="34" cy="50" r="19" fill="#111111" />
      </g>
      <text x="76" y="106" fill="#111111" fontFamily="Manrope, sans-serif" fontSize="17" letterSpacing="4">ДОСТАВКА БЕЗ ГРАНИЦ</text>
    </svg>
  )
}

function Fleet() {
  return (
    <section className="section" id="fleet">
      <div className="section-head">
        <p className="eyebrow">Автопарк</p>
        <h2>Машина под задачу, а не «что есть»</h2>
        <p className="lede">
          Берём на себя логистику: от малотоннажных газелей до тралов и рефрижераторов.
        </p>
      </div>

      <div className="fleet-grid">
        {FLEET.map((item) => {
          const Icon = item.icon
          return (
            <article className="fleet-card" key={item.title}>
              <div className="fleet-copy">
                <Icon className="picto" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function Extras() {
  return (
    <section className="section section-tight" id="extras">
      <div className="section-head">
        <p className="eyebrow">Дополнительно</p>
        <h2>Погрузка без лишней суеты</h2>
      </div>
      <div className="extra-grid">
        <article className="extra-card">
          <IconCrane className="picto" />
          <h3>Автокран</h3>
          <p>Подъём тяжёлой техники и материалов. Опытные операторы на площадке.</p>
        </article>
        <article className="extra-card">
          <IconLoaders className="picto" />
          <h3>Грузчики</h3>
          <p>Погрузка, выгрузка и перенос. Аккуратно и по нормам безопасности.</p>
        </article>
      </div>
    </section>
  )
}

function Cargo() {
  return (
    <section className="section" id="cargo">
      <div className="section-head">
        <p className="eyebrow">Что возим</p>
        <h2>От паллет до негабарита</h2>
      </div>
      <div className="cargo-grid">
        {CARGO.map((item, index) => (
          <article className="cargo-card" key={item.title}>
            <img src={item.image} alt="" loading="lazy" />
            <div className="cargo-card-shade" />
            <span className="cargo-number">{String(index + 1).padStart(2, '0')}</span>
            <div className="cargo-card-copy">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Why() {
  return (
    <section className="section why" id="why">
      <div className="section-head">
        <p className="eyebrow">Почему мы</p>
        <h2>Не только машина — ответственность за результат</h2>
      </div>
      <div className="why-grid">
        <article>
          <IconShield className="picto" />
          <h3>Страхование</h3>
          <p>При необходимости оформляем страховку на весь маршрут: от погрузки до выгрузки.</p>
        </article>
        <article>
          <IconManager className="picto" />
          <h3>Личный менеджер</h3>
          <p>Один человек ведёт транспорт, документы и маршрут. Вы занимаетесь своим делом.</p>
        </article>
        <article>
          <IconHazard className="picto" />
          <h3>Особые грузы</h3>
          <p>ADR, медицина, химия, ценные партии. Допуски у водителей и контроль по нормативам.</p>
        </article>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section" id="process">
      <div className="section-head">
        <p className="eyebrow">Как работаем</p>
        <h2>Четыре шага до выгрузки</h2>
      </div>
      <ol className="steps">
        {STEPS.map((step) => (
          <li key={step.n}>
            <span>{step.n}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Stats() {
  return (
    <section className="stats" aria-label="Цифры компании">
      <div>
        <strong>98%</strong>
        <p>доставок вовремя</p>
      </div>
      <div>
        <strong>100+</strong>
        <p>компаний возвращаются</p>
      </div>
      <div>
        <strong>1500+</strong>
        <p>рейсов в год</p>
      </div>
      <div>
        <strong>56</strong>
        <p>направлений и регионов</p>
      </div>
    </section>
  )
}

function WarehouseIllustration() {
  return (
    <svg className="warehouse-illustration" viewBox="0 0 760 620" role="img" aria-label="Схема погрузки на складе">
      <rect width="760" height="620" rx="28" fill="#111111" />
      <path d="M0 470 220 335l270 82 270-145v348H0Z" fill="#242424" />
      <path d="m84 387 216-128 350 104-218 130Z" fill="#ffd200" />
      <path d="m84 387 348 106v76L84 462Z" fill="#e3b900" />
      <path d="m432 493 218-130v76L432 569Z" fill="#b89000" />
      <path d="M300 259v234M514 323v242" stroke="#ffffff" strokeOpacity=".22" strokeWidth="2" />
      <g fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M148 424h100v-60h82v60h96" />
        <path d="M180 424v-36M216 424v-36M252 424v-36" />
        <path d="M479 224v122M479 224h132M611 224v44M585 268h52" />
        <path d="M558 268v76M529 344h58" />
      </g>
      <circle cx="611" cy="180" r="34" fill="#ffd200" />
      <path d="m596 180 10 10 21-23" fill="none" stroke="#111111" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <text x="48" y="82" fill="#ffffff" fontFamily="Manrope, sans-serif" fontSize="16" letterSpacing="3">ПОГРУЗКА ПОД КОНТРОЛЕМ</text>
    </svg>
  )
}

function About({ onContact }: { onContact: () => void }) {
  return (
    <section className="about" id="about">
      <div className="about-media"><WarehouseIllustration /></div>
      <div className="about-copy">
        <p className="eyebrow">О компании</p>
        <h2>Грузпроект — экспедитор, который закрывает маршрут целиком</h2>
        <p>
          Организуем перевозки по Казахстану, СНГ, Китаю, Турции и Европе. Стройматериалы,
          промышленные партии, сборные и негабаритные грузы — подбираем транспорт под задачу, а не
          наоборот.
        </p>
        <p>
          Работаем с 2013 года. Нет жёсткой привязки к одному автопарку: оперативно находим тент,
          реф, трал или газель и держим прозрачные условия для каждого заказчика.
        </p>
        <button type="button" className="btn btn-solid" onClick={onContact}>
          Связаться с нами
          <IconArrow className="btn-icon" />
        </button>
      </div>
    </section>
  )
}

function Footer({ onContact }: { onContact: () => void }) {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <p className="brand-inline">
            <IconMark className="brand-mark" />
            Грузпроект
          </p>
          <p className="footer-lead">Надёжная перевозка грузов. Сложные маршруты — простые решения.</p>
        </div>
        <button type="button" className="btn btn-light" onClick={onContact}>
          Связаться с нами
        </button>
      </div>

      <div className="footer-grid">
        <div>
          <p className="footer-label">Контакты</p>
          <a href={TEL_URL}>{PHONE_DISPLAY}</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
        <div>
          <p className="footer-label">Направления</p>
          <span>Казахстан</span>
          <span>СНГ</span>
          <span>Китай, Турция, Европа</span>
        </div>
        <div>
          <p className="footer-label">Услуги</p>
          <a href="#fleet">Тент, реф, трал</a>
          <a href="#fleet">Газели и контейнеры</a>
          <a href="#extras">Кран и грузчики</a>
        </div>
      </div>

      <p className="copyright">© {new Date().getFullYear()} Грузпроект. Грузоперевозки и экспедирование.</p>
    </footer>
  )
}

function ContactPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const formId = useId()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [cargo, setCargo] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (!open) setSent(false)
  }, [open])

  if (!open) return null

  const submit = (event: FormEvent) => {
    event.preventDefault()
    const lines = [
      'Заявка с сайта Грузпроект',
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      from ? `Погрузка: ${from}` : '',
      to ? `Выгрузка: ${to}` : '',
      cargo ? `Груз: ${cargo}` : '',
    ].filter(Boolean)

    openWhatsApp(lines.join('\n'))
    setSent(true)
  }

  return (
    <div className="overlay" role="presentation" onClick={onClose}>
      <div
        className="panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${formId}-title`}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="panel-close" onClick={onClose} aria-label="Закрыть">
          <IconClose />
        </button>

        <div className="panel-copy">
          <p className="eyebrow">Связаться с нами</p>
          <h2 id={`${formId}-title`}>Напишите — ответим в WhatsApp</h2>
          <p>
            Заявка уходит на номер <a href={TEL_URL}>{PHONE_DISPLAY}</a>. Можно сразу открыть чат
            или отправить маршрут и параметры груза.
          </p>
          <a className="btn btn-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <IconWhatsApp className="btn-icon" />
            Открыть WhatsApp
          </a>
        </div>

        {sent ? (
          <div className="panel-form sent">
            <h3>Открыли WhatsApp</h3>
            <p>Если чат не открылся, напишите вручную на {PHONE_DISPLAY}.</p>
            <button type="button" className="btn btn-solid" onClick={onClose}>
              Закрыть
            </button>
          </div>
        ) : (
          <form className="panel-form" onSubmit={submit}>
            <label>
              Ваше имя
              <input
                name="name"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Телефон
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                placeholder="+7"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
            <div className="form-row">
              <label>
                Адрес погрузки
                <input name="from" value={from} onChange={(e) => setFrom(e.target.value)} />
              </label>
              <label>
                Адрес выгрузки
                <input name="to" value={to} onChange={(e) => setTo(e.target.value)} />
              </label>
            </div>
            <label>
              Груз, вес и размеры
              <textarea
                name="cargo"
                rows={4}
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
              />
            </label>
            <button type="submit" className="btn btn-solid">
              Отправить в WhatsApp
              <IconArrow className="btn-icon" />
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
