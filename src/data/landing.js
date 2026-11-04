// Contenido de la página de presentación.
// Cada texto es un par [español, inglés]. Todo sale del CV (src/pages/cv.astro) o del blog.

import { readdirSync, readFileSync } from 'node:fs';

// Cuando esté el PDF: déjalo en public/ y pon aquí su ruta, por ejemplo '/alvaro-liebana-cv.pdf'.
export const cvPdf = null;

export const links = {
  email: 'alvaro@tricubo.tech',
  github: 'https://github.com/leyenda95',
  linkedin: 'https://www.linkedin.com/in/alvaro-liebana-carrascosa-898a67254',
  trailer: 'https://www.youtube.com/watch?v=7Mptwj129NQ',
};

export const nav = [
  { href: '#about', label: ['Sobre mí', 'About'] },
  { href: '#work', label: ['Proyectos', 'Work'] },
  { href: '#path', label: ['Trayectoria', 'Path'] },
  { href: '#blog', label: ['Blog', 'Blog'] },
  { href: '#contact', label: ['Contacto', 'Contact'] },
];

export const hero = {
  status: ['Abierto a nuevas oportunidades', 'Open to new opportunities'],
  role: ['Ingeniero de producto · Blockchain', 'Product Engineer · Blockchain'],
  intro: [
    'Construyo productos sobre blockchain con la privacidad en el centro: pruebas de conocimiento cero, divulgación selectiva y cifrado de extremo a extremo, entre lo técnico y el producto.',
    'I build blockchain products with privacy at their core: zero-knowledge proofs, selective disclosure and end-to-end encryption, working between engineering and product.',
  ],
  seeWork: ['Ver proyectos', 'See the work'],
  contact: ['Contacto', 'Contact'],
};

export const cvMenu = {
  interactive: ['CV interactivo', 'Interactive CV'],
  interactiveHint: ['Tú eliges qué ver', 'You choose what to see'],
  pdf: ['Archivo PDF', 'PDF file'],
  pdfHint: ['Para descargar', 'To download'],
  pdfSoon: ['Próximamente', 'Coming soon'],
};

export const about = {
  title: ['Sobre mí', 'About'],
  paragraphs: [
    [
      'Soy un apasionado de la tecnología. Hace diez años descubrí blockchain y se me abrió un nuevo mundo. Desde hace seis trabajo en este ámbito, desde los smart contracts en Ethereum hasta redes diseñadas para superar sus limitaciones.',
      'I have always been curious about technology and where it is heading. I came across blockchain ten years ago and it opened up a whole new set of possibilities. I have worked in the space for the last six years, from smart contracts on Ethereum to networks built to get past its limits.',
    ],
    [
      'Hoy estoy centrado en la privacidad: exploro cómo blockchain se combina con tecnologías como las pruebas de conocimiento cero para cambiar nuestra relación con los datos y devolver el control a las personas.',
      'My focus now is privacy: how blockchain, combined with technologies like zero-knowledge proofs, can change our relationship with data and give people back control over it.',
    ],
  ],
  pillars: [
    {
      title: ['Privacidad', 'Privacy'],
      text: [
        'Pruebas de conocimiento cero y contratos en Compact sobre Midnight.',
        'Zero-knowledge proofs and Compact contracts on Midnight.',
      ],
    },
    {
      title: ['Producto', 'Product'],
      text: [
        'Entender un problema, darle forma y llevarlo hasta el final.',
        'Understanding a problem, shaping it and seeing it through.',
      ],
    },
    {
      title: ['IA', 'AI'],
      text: [
        'Agentes en el flujo de desarrollo, con el código validado por tests y CI.',
        'Agents in the development workflow, with the code validated by tests and CI.',
      ],
    },
  ],
};

export const work = {
  title: ['Proyectos', 'Selected work'],
  items: [
    {
      name: 'Aegis',
      when: '2026',
      role: ['Co-fundador, responsable de blockchain', 'Co-founder, blockchain lead'],
      text: [
        'Inteligencia de mercado colectiva para el pequeño comercio, sin rastrear a nadie. Diseñé la capa de privacidad en Compact, sobre Midnight: cada compra se demuestra con pruebas de conocimiento cero.',
        'Collective market intelligence for small retailers, without tracking anyone. I designed the privacy layer in Compact, on Midnight: each purchase is proven with zero-knowledge proofs.',
      ],
      tags: ['Midnight', 'Compact', 'ZK'],
      link: { href: links.trailer, label: ['Ver el tráiler', 'Watch the trailer'] },
    },
    {
      name: 'Project Catalyst',
      when: '2026',
      role: ['Revisor de propuestas de financiación', 'Funding proposal reviewer'],
      text: [
        'Evaluación de propuestas de financiación del ecosistema Cardano según su viabilidad técnica, presupuesto e impacto.',
        'Assessing Cardano ecosystem funding proposals on technical feasibility, budget and impact.',
      ],
      tags: ['Cardano'],
    },
    {
      name: 'Zunibal',
      when: '2021 – 2024',
      role: ['Arquitecto de soluciones e ingeniero de software', 'Solutions architect and software engineer'],
      text: [
        'Sistemas acústicos para estimar biomasa desde boyas satelitales: algoritmos de detección y procesado de señal, y prototipos marinos con sensores, cámaras submarinas e instrumentación.',
        'Acoustic systems for estimating biomass from satellite buoys: detection and signal processing algorithms, and marine prototypes with sensors, underwater cameras and instrumentation.',
      ],
      tags: ['DSP', ['Acústica', 'Acoustics'], ['Prototipos marinos', 'Marine prototypes']],
    },
  ],
};

export const path = {
  title: ['Trayectoria', 'Path'],
  sub: ['De escuchar bajo el agua a demostrar sin revelar.', 'From listening underwater to proving without revealing.'],
  more: ['Todo el detalle en el CV interactivo', 'Full detail in the interactive CV'],
  // En orden cronológico: se lee como un camino, desde el principio hasta hoy
  items: [
    {
      icon: 'cap',
      when: '2015 – 2020',
      org: ['Universitat Politècnica de València', 'Universitat Politècnica de València'],
      role: ['Ingeniería de Telecomunicación y Máster', 'Telecommunications Engineering and Master’s'],
      text: ['Tecnologías, sistemas y redes. Por el camino, descubro blockchain.', 'Technologies, systems and networks. Along the way, I come across blockchain.'],
    },
    {
      icon: 'net',
      when: '2020',
      org: ['Agencia Estatal de Investigación', 'Spanish State Research Agency'],
      role: ['Ingeniero de infraestructura IoT', 'IoT infrastructure engineer'],
      text: ['Una red cognitiva definida por software para optimizar y asegurar el tráfico IoT.', 'A software-defined cognitive network to optimise and secure IoT traffic.'],
    },
    {
      icon: 'wave',
      when: '2021',
      org: ['Agencia Estatal de Investigación', 'Spanish State Research Agency'],
      role: ['Desarrollador de sistemas y procesado de señal', 'Systems and signal processing developer'],
      text: ['Detección acústica submarina y astronomía multimensajero con telescopios de neutrinos.', 'Underwater acoustic detection and multi-messenger astronomy with neutrino telescopes.'],
    },
    {
      icon: 'buoy',
      when: '2021 – 2024',
      org: ['Zunibal', 'Zunibal'],
      role: ['Arquitecto de soluciones e ingeniero de software', 'Solutions architect and software engineer'],
      text: ['Sistemas acústicos para estimar biomasa desde boyas satelitales, del algoritmo al prototipo marino.', 'Acoustic systems for estimating biomass from satellite buoys, from the algorithm to the marine prototype.'],
    },
    {
      icon: 'receipt',
      when: '2023 – 2026',
      org: ['Tricubo Technologies', 'Tricubo Technologies'],
      role: ['Arquitecto blockchain', 'Blockchain architect'],
      text: ['Recibos privados y recompensas para retail, cifrados de extremo a extremo sobre Algorand.', 'Private receipts and rewards for retail, end-to-end encrypted on Algorand.'],
    },
    {
      icon: 'check',
      when: '2026',
      org: ['Project Catalyst', 'Project Catalyst'],
      role: ['Revisor de propuestas de financiación', 'Funding proposal reviewer'],
      text: ['Evaluar propuestas del ecosistema Cardano y razonar cada evaluación.', 'Assessing Cardano ecosystem proposals and setting out the reasoning behind each assessment.'],
    },
    {
      icon: 'shield',
      when: ['2026 – hoy', '2026 – today'],
      org: ['Aegis', 'Aegis'],
      role: ['Co-fundador, responsable de blockchain', 'Co-founder, blockchain lead'],
      text: ['Privacidad con pruebas de conocimiento cero sobre Midnight: cada compra se demuestra sin revelar quién la hizo.', 'Privacy with zero-knowledge proofs on Midnight: each purchase is proven without revealing who made it.'],
    },
  ],
};

export const blog = {
  title: ['Blog', 'Blog'],
  sub: ['Notas sobre privacidad, blockchain y creación de productos.', 'Notes on privacy, blockchain and building products.'],
  all: ['Todos los artículos', 'All articles'],
};

export const contact = {
  title: ['Hablemos', 'Let’s talk'],
  text: [
    'Busco un sitio donde aportar lo que sé y seguir aprendiendo. Si tienes algo en mente, escríbeme.',
    'I am looking for a place to put what I know to use and keep learning. If you have something in mind, write to me.',
  ],
};

// Artículos: el blog es la única fuente. Cada uno existe dos veces con el mismo nombre de archivo.
// Se leen como texto al compilar: importarlos como páginas traería aquí los estilos globales del blog.
const read = (dir, file) => readFileSync(`src/pages/${dir}/${file}`, 'utf8');
const field = (md, name) => md.match(new RegExp(`^${name}: *"?(.*?)"? *\\r?$`, 'm'))[1];

export const posts = readdirSync('src/pages/blog')
  .filter((file) => file.endsWith('.md'))
  .map((file) => {
    const slug = file.replace('.md', '');
    const post = read('blog', file);
    const twin = read('es/blog', file);
    return {
      slug,
      date: field(post, 'date'),
      title: [field(twin, 'title'), field(post, 'title')],
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));
