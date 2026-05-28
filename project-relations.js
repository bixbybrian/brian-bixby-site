/* ─────────────────────────────────────────────
   project-relations.js
   Single source of truth for all project data
   and related-work relationships.

   To use on a project page, add before </body>:
     <script>const PROJECT_SLUG = 'your-slug';</script>
     <script src="../project-relations.js"></script>
   ───────────────────────────────────────────── */

const PROJECTS = {
  'lightvessel': {
    title: 'Lightvessel',
    year: '2021',
    medium: 'Sculpture',
    image: '../images/363A0540-lightvessel-duratrans1.jpg',
    url: 'lightvessel.html'
  },
  'unseen-unfelt': {
    title: 'Unseen / Unfelt',
    year: '2020',
    medium: 'Photography',
    image: '../images/ArakiimErotikfachgeschaeft_Ausstellung_12.jpg',
    url: 'unseen-unfelt.html'
  },
  'forbidden-colours': {
    title: 'Forbidden Colours',
    year: '2019',
    medium: 'Photography',
    image: '../images/forbidden_colours-blue-1140x761-1.jpg',
    url: 'forbidden-colours.html'
  },
  'apparition': {
    title: 'Apparition',
    year: '2019',
    medium: 'Installation',
    image: '../images/apparition-1140-761.jpg',
    url: 'apparition.html'
  },
  'glyph': {
    title: 'Glyph',
    year: '2018',
    medium: 'Photography',
    image: '../images/Bixby-Glyph-01-HEADER.jpg',
    url: 'glyph.html'
  },
  'aldi': {
    title: 'ALDI Nord I',
    year: '2018',
    medium: 'Mixed Media',
    image: '../images/aldi-nord-1140-761b-e1699424900379.jpg',
    url: 'aldi.html'
  },
  'autumn-fires': {
    title: 'Autumn Fires',
    year: '2018',
    medium: 'Painting',
    image: '../images/Untitled-Blue-Painting-1140-761-1.jpg',
    url: 'autumn-fires.html'
  },
  'portal': {
    title: 'Portal',
    year: '2017',
    medium: 'Installation',
    image: '../images/portal-1140-761-IMG_9150b-e1699425136837.jpg',
    url: 'portal.html'
  },
  'i-want-to-believe': {
    title: 'I Want To Believe',
    year: '2017',
    medium: 'Installation',
    image: '../images/I-Want-To-Believe-IMG_9143-1140-761-e1699517294933.jpg',
    url: 'i-want-to-believe.html'
  },
  'witness': {
    title: 'Witness',
    year: '2014',
    medium: 'Installation',
    image: '../images/IMG_6097.jpg',
    url: 'witness.html'
  },
  'dream-therapy': {
    title: 'Dream Therapy',
    year: '2015',
    medium: 'Photography',
    image: '../images/dream-therapy-3.jpg',
    url: 'dream-therapy.html'
  },
  'mechanical-postcard': {
    title: 'Mechanical Postcard',
    year: '2014',
    medium: 'Mixed Media',
    image: '../images/mechanical-postcard-1140-761-e1699425299142.jpg',
    url: 'mechanical-postcard.html'
  },
  'the-lion': {
    title: 'The Lion',
    year: '2015',
    medium: 'Photography',
    image: '../images/The-Lion-18-Series-Header-e1699425377820.jpg',
    url: 'the-lion.html'
  },
  'wolf-man-in-forest': {
    title: 'Wolf Man In Forest',
    year: '2013',
    medium: 'Painting',
    image: '../images/wolfman-in-forest-1140-761-e1699425448561.jpg',
    url: 'wolf-man-in-forest.html'
  },
  'ruminants': {
    title: 'Ruminants',
    year: '2014',
    medium: 'Mixed Media',
    image: '../images/Ruminants-Cover1-e1699425521337.jpg',
    url: 'ruminants.html'
  },
  'schwarz-zimmer': {
    title: 'Schwarz Zimmer',
    year: '2013',
    medium: 'Installation',
    image: '../images/schwartz-zimmer-1140-761-IMG_1953.jpg',
    url: 'schwarz-zimmer.html'
  },
  'archaeology-excavation-and-what-remains': {
    title: 'Archaeology, Excavation and What Remains',
    year: '2012',
    medium: 'Installation',
    image: '../images/archaeology-1140-761-IMG_0994-e1699425585513.jpg',
    url: 'archaeology-excavation-and-what-remains.html'
  },
  'lustmord': {
    title: 'Lustmord',
    year: '2012',
    medium: 'Installation',
    image: '../images/Archaeology-1140-761-P1160410.jpg',
    url: 'lustmord.html'
  },
  'inflorescence': {
    title: 'Inflorescence',
    year: '2012',
    medium: 'Photography',
    image: '../images/infloresence-1140-761-IMG_6172-28.jpg',
    url: 'inflorescence.html'
  },
  'in-the-darkest-places': {
    title: 'In The Darkest Places',
    year: '2012',
    medium: 'Photography',
    image: '../images/in-the-darkest-places-IMG_4360-1140-761-e1699425660547.jpg',
    url: 'in-the-darkest-places.html'
  },
  'shedding': {
    title: 'Shedding',
    year: '2011',
    medium: 'Video',
    image: '../images/shedding-1140-761-3J3A9179-e1699425718899.jpg',
    url: 'shedding.html'
  },
  'walter-benjamin-in-the-mall-of-america': {
    title: 'Walter Benjamin in the Mall of America',
    year: '2012',
    medium: 'Mixed Media',
    image: '../images/Mall-of-America-1140-761-IMG_7804.jpg',
    url: 'walter-benjamin-in-the-mall-of-america.html'
  },
  'memory-of-a-desert-journey': {
    title: 'Memory of a Desert Journey',
    year: '2011',
    medium: 'Video',
    image: '../images/desert-journey-1140-761-IMG_5211.jpg',
    url: 'memory-of-a-desert-journey.html'
  },
  'interference': {
    title: 'Interference',
    year: '2011',
    medium: 'Video',
    image: '../images/interference-install-view-1-1140-761-cover.jpg',
    url: 'interference.html'
  },
  'apperception': {
    title: 'Apperception',
    year: '2011',
    medium: 'Video',
    image: '../images/apperception01-install-1140-761-cover.jpg',
    url: 'apperception.html'
  }
};

/* ─── Relationship graph ────────────────────────────────────────────────
   3 related projects per page, inferred from medium, theme, and concept.
   Edit this object to adjust any relationship.
   ──────────────────────────────────────────────────────────────────────── */
const RELATIONS = {
  'lightvessel':           ['inflorescence', 'forbidden-colours', 'apparition'],
  'unseen-unfelt':         ['the-lion', 'dream-therapy', 'forbidden-colours'],
  'forbidden-colours':     ['inflorescence', 'in-the-darkest-places', 'lightvessel'],
  'apparition':            ['portal', 'witness', 'archaeology-excavation-and-what-remains'],
  'glyph':                 ['dream-therapy', 'aldi', 'mechanical-postcard'],
  'aldi':                  ['glyph', 'walter-benjamin-in-the-mall-of-america', 'mechanical-postcard'],
  'autumn-fires':          ['wolf-man-in-forest', 'ruminants', 'i-want-to-believe'],
  'portal':                ['apparition', 'witness', 'schwarz-zimmer'],
  'i-want-to-believe':     ['ruminants', 'wolf-man-in-forest', 'apparition'],
  'witness':               ['portal', 'lustmord', 'apparition'],
  'dream-therapy':         ['glyph', 'schwarz-zimmer', 'shedding'],
  'mechanical-postcard':   ['walter-benjamin-in-the-mall-of-america', 'apperception', 'aldi'],
  'the-lion':              ['witness', 'dream-therapy', 'glyph'],
  'wolf-man-in-forest':    ['ruminants', 'autumn-fires', 'shedding'],
  'ruminants':             ['wolf-man-in-forest', 'in-the-darkest-places', 'i-want-to-believe'],
  'schwarz-zimmer':        ['lustmord', 'portal', 'archaeology-excavation-and-what-remains'],
  'archaeology-excavation-and-what-remains': ['portal', 'apparition', 'schwarz-zimmer'],
  'lustmord':              ['schwarz-zimmer', 'witness', 'portal'],
  'inflorescence':         ['forbidden-colours', 'in-the-darkest-places', 'lightvessel'],
  'in-the-darkest-places': ['inflorescence', 'forbidden-colours', 'ruminants'],
  'shedding':              ['memory-of-a-desert-journey', 'apperception', 'wolf-man-in-forest'],
  'walter-benjamin-in-the-mall-of-america': ['mechanical-postcard', 'aldi', 'apperception'],
  'memory-of-a-desert-journey': ['shedding', 'apperception', 'interference'],
  'interference':          ['memory-of-a-desert-journey', 'apperception', 'shedding'],
  'apperception':          ['memory-of-a-desert-journey', 'interference', 'shedding']
};

/* ─── Sequential order (for prev/next nav) ────────────────────────────── */
const PROJECT_ORDER = [
  'lightvessel', 'unseen-unfelt', 'forbidden-colours', 'apparition',
  'glyph', 'aldi', 'autumn-fires', 'portal', 'i-want-to-believe',
  'witness', 'dream-therapy', 'mechanical-postcard', 'the-lion',
  'wolf-man-in-forest', 'ruminants', 'schwarz-zimmer',
  'archaeology-excavation-and-what-remains', 'lustmord',
  'inflorescence', 'in-the-darkest-places', 'shedding',
  'walter-benjamin-in-the-mall-of-america', 'memory-of-a-desert-journey',
  'interference', 'apperception'
];

/* ─── Render ────────────────────────────────────────────────────────────── */
(function () {
  if (typeof PROJECT_SLUG === 'undefined') return;

  const slug = PROJECT_SLUG;
  const idx  = PROJECT_ORDER.indexOf(slug);
  const prev = idx > 0              ? PROJECT_ORDER[idx - 1] : PROJECT_ORDER[PROJECT_ORDER.length - 1];
  const next = idx < PROJECT_ORDER.length - 1 ? PROJECT_ORDER[idx + 1] : PROJECT_ORDER[0];
  const related = (RELATIONS[slug] || []).map(s => PROJECTS[s]).filter(Boolean);

  /* ── CSS (injected once) ── */
  if (!document.getElementById('pr-styles')) {
    const style = document.createElement('style');
    style.id = 'pr-styles';
    style.textContent = `
      .pr-section { max-width: 820px; margin: 0 auto; padding: 0 30px; }

      /* Related Works */
      .pr-related { padding-bottom: 56px; }
      .pr-label { font-size: 10.5px; font-weight: 500; letter-spacing: 0.12em;
                  text-transform: uppercase; color: #aaaaaa; margin-bottom: 20px; }
      .pr-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
      .pr-card { text-decoration: none; display: block; }
      .pr-card:hover .pr-thumb { opacity: 0.75; }
      .pr-card:hover .pr-card-title { color: #03a9f4; }
      .pr-thumb { width: 100%; aspect-ratio: 3/2; object-fit: cover;
                  display: block; background: #f0f0f0;
                  transition: opacity 0.2s; }
      .pr-card-info { padding: 10px 0 0; }
      .pr-card-title { font-family: 'EB Garamond', Georgia, serif; font-size: 16px;
                       font-weight: 400; color: #111111; line-height: 1.2;
                       margin-bottom: 3px; transition: color 0.15s; }
      .pr-card-meta { font-size: 11.5px; font-weight: 300; color: #aaaaaa; }

      /* Prev / Next */
      .pr-nav { border-top: 1px solid #dddddd; padding-bottom: 72px; }
      .pr-nav-inner { display: grid; grid-template-columns: 1fr 1fr; }
      .pr-nav-item { padding: 24px 0; display: flex; flex-direction: column;
                     gap: 6px; text-decoration: none; transition: opacity 0.15s; }
      .pr-nav-item:hover { opacity: 0.55; }
      .pr-nav-item.pr-next { text-align: right; border-left: 1px solid #dddddd;
                             padding-left: 30px; }
      .pr-nav-item.pr-prev { padding-right: 30px; }
      .pr-nav-dir { font-size: 10.5px; font-weight: 500; letter-spacing: 0.12em;
                    text-transform: uppercase; color: #aaaaaa; }
      .pr-nav-title { font-family: 'EB Garamond', Georgia, serif; font-size: 20px;
                      font-weight: 400; color: #111111; line-height: 1.2; }

      @media (max-width: 600px) {
        .pr-section { padding-left: 18px; padding-right: 18px; }
        .pr-grid { grid-template-columns: 1fr; gap: 20px; }
        .pr-nav-title { font-size: 17px; }
        .pr-nav-item.pr-next { padding-left: 16px; }
        .pr-nav-item.pr-prev { padding-right: 16px; }
      }
    `;
    document.head.appendChild(style);
  }

  /* ── Related works HTML ── */
  let relatedHTML = '';
  if (related.length) {
    relatedHTML = `
      <div class="pr-section pr-related">
        <div class="pr-label">Related Works</div>
        <div class="pr-grid">
          ${related.map(p => `
            <a class="pr-card" href="${p.url}">
              <img class="pr-thumb" src="${p.image}" alt="${p.title}" loading="lazy" />
              <div class="pr-card-info">
                <div class="pr-card-title">${p.title}</div>
                <div class="pr-card-meta">${p.year} &middot; ${p.medium}</div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>`;
  }

  /* ── Prev / Next HTML ── */
  const prevP = PROJECTS[prev];
  const nextP = PROJECTS[next];
  const navHTML = `
    <div class="pr-section">
      <div class="pr-nav">
        <div class="pr-nav-inner">
          <a class="pr-nav-item pr-prev" href="${prevP.url}">
            <span class="pr-nav-dir">&#8592; Previous</span>
            <span class="pr-nav-title">${prevP.title}</span>
          </a>
          <a class="pr-nav-item pr-next" href="${nextP.url}">
            <span class="pr-nav-dir">Next &#8594;</span>
            <span class="pr-nav-title">${nextP.title}</span>
          </a>
        </div>
      </div>
    </div>`;

  /* ── Inject before footer ── */
  const footer = document.querySelector('footer');
  if (footer) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = relatedHTML + navHTML;
    footer.parentNode.insertBefore(wrapper, footer);
  }
})();
