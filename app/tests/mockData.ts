export const mockCompanyData: StatamicGlobalCompany = {
  address: 'Burgemeester Brokxlaan 32\n5041 SB\nTilburg',
  po_box: 'PO Box 1340\n5004 BH\nTilburg',
  bank: 'NL34ABNA0131445715',
  btw: 'NL866125474B01',
  email: 'info@krafters.nl',
  kvk: '92641091',
  linkedin: 'https://linkedin.com/company/krafters-nl',
  phone: '0612345678',
  title: 'Krafters BV',
};

export const mockMainNavData: NavTreeItem[] = [
  {
    page: {
      id: 'e66ac4f1-7c26-43ee-ab48-53ea2ee6bb3a',
      title: 'Websites',
      url: '/#websites',
    },
    depth: 1,
    children: [],
  },
  {
    page: {
      id: '62b155c3-af5c-492e-81d9-ff3c79b4ec89',
      title: 'Webapplicaties',
      url: '/#webapps',
    },
    depth: 1,
    children: [],
  },
  {
    page: {
      id: '554c3171-6659-49fa-b338-9d41c507940d',
      title: 'Team',
      url: '/#team',
    },
    depth: 1,
    children: [],
  },
  {
    page: {
      id: 'f89ff669-3b8d-473a-ab2f-9a216231e9c3',
      title: 'Contact',
      url: '/#contact',
    },
    depth: 1,
    children: [],
  },
];

export const mockFooterNavData: NavTreeItem[] = [
  {
    page: {
      id: '449274d7-8c34-4553-ac19-4f2ff1ecffe5',
      title: 'Algemene voorwaarden',
      url: '/algemene-voorwaarden',
    },
    depth: 1,
    children: [],
  },
  {
    page: {
      id: 'f95430a2-e8a8-44d9-9b6d-0ab99462c016',
      title: 'Privacy',
      url: '/privacy',
    },
    depth: 1,
    children: [],
  },
  {
    page: {
      id: '61102191-341f-486f-a6c0-edf7e2f87af4',
      title: 'Toegankelijkheid',
      url: '/toegankelijkheid',
    },
    depth: 1,
    children: [],
  },
];

export const mockFormData: StatamicForm = {
  handle: 'contact',
  title: 'Contact',
  fields: {
    name: {
      autocomplete: 'name',
      type: 'text',
      display: 'Naam',
      validate: ['required'],
      handle: 'name',
      width: 100,
    },
    email: {
      autocomplete: 'email',
      type: 'text',
      display: 'Email',
      validate: ['required'],
      handle: 'email',
      width: 100,
    },
    phone: {
      autocomplete: 'tel',
      type: 'text',
      display: 'Telefoonnummer',
      handle: 'phone',
      width: 100,
    },
    message: {
      type: 'textarea',
      display: 'Bericht',
      validate: ['required'],
      handle: 'message',
      width: 100,
    },
    source: {
      autocomplete: 'off',
      type: 'text',
      display: 'Source',
      handle: 'source',
      width: 100,
    },
  },
};

export const mockPageData: StatamicPageEntry[] = [
  {
    api_url: 'http://localhost:8000/api/collections/pages/entries/home',
    author: '60920cf5-a7d9-4a31-8854-4b5bc9d0f921',
    blocks: [
      {
        title: 'Digitale toegankelijkheid voor iedereen',
        content: [
          {
            type: 'text',
            text: '<p>Krafters is gespecialiseerd in het cre\u00ebren van digitale ervaringen die voor iedereen toegankelijk zijn. We combineren design en technologie om websites en webapplicaties te bouwen die voldoen aan de hoogste toegankelijkheidsnormen. Onze missie is om digitale inclusie te bevorderen en ervoor te zorgen dat iedereen gelijke toegang heeft tot het internet.</p>',
          },
          {
            button_link: '#contact',
            button_label: 'Word ook toegankelijk',
            button_icon:
              '<svg width="24" height="24" viewBox="0 0 24 24"  fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M16.2803 11.4697C16.5732 11.7626 16.5732 12.2374 16.2803 12.5303L8.78033 20.0303C8.48744 20.3232 8.01256 20.3232 7.71967 20.0303C7.42678 19.7374 7.42678 19.2626 7.71967 18.9697L14.6893 12L7.71967 5.03033C7.42678 4.73744 7.42678 4.26256 7.71967 3.96967C8.01256 3.67678 8.48744 3.67678 8.78033 3.96967L16.2803 11.4697Z"/>\n</svg>\n',
            button_variant: { value: 'link', label: 'Link', key: 'link' },
            id: 'm7xe4hog',
            type: 'button',
          },
          { type: 'text', text: '<p></p>' },
        ],
        image: null,
        full_width_image: false,
        anchor: null,
        id: 'm7x72ltz',
        type: 'hero',
      },
      {
        content: [
          {
            type: 'text',
            text: '<h2>Inclusieve websites.</h2><p>Bij Krafters streven we ernaar om websites te cre\u00ebren die voor iedereen toegankelijk zijn, ongeacht hun mogelijkheden of beperkingen. Toegankelijke websites zijn ontworpen en ontwikkeld met het oog op gebruiksgemak voor alle gebruikers, inclusief mensen met visuele, auditieve, motorische of cognitieve beperkingen. Door te investeren in toegankelijkheid kunnen bedrijven een breder publiek bereiken, hun merkimago versterken en voldoen aan wettelijke vereisten. </p>',
          },
        ],
        image: {
          id: 'assets::test.jpg',
          url: '/assets/test.jpg',
          permalink: 'http://localhost:8000/assets/test.jpg',
          api_url: 'http://localhost:8000/api/assets/assets/test.jpg',
          alt: null,
        },
        image_caption: null,
        image_position: {
          value: 'inline-end',
          label: 'Right',
          key: 'inline-end',
        },
        anchor: 'websites',
        id: 'm7xdgqp3',
        type: 'basic',
      },
      {
        content: [
          {
            type: 'text',
            text: '<h2>Toegankelijke webapplicaties</h2><p>Naast websites ontwikkelt Krafters ook toegankelijke webapplicaties die intu\u00eftief en gemakkelijk te gebruiken zijn voor alle gebruikers. Toegankelijke applicaties zijn ontworpen met aandacht voor inclusief ontwerp, wat betekent dat ze rekening houden met de diverse behoeften en vaardigheden van gebruikers. Door te investeren in toegankelijke applicaties kunnen organisaties de gebruikerservaring verbeteren, de betrokkenheid van gebruikers vergroten en een positieve impact hebben op het leven van mensen met diverse achtergronden en behoeften.</p>',
          },
        ],
        image: {
          id: 'assets::test.jpg',
          url: '/assets/test.jpg',
          permalink: 'http://localhost:8000/assets/test.jpg',
          api_url: 'http://localhost:8000/api/assets/assets/test.jpg',
          alt: null,
        },
        image_caption: null,
        image_position: {
          value: 'inline-start',
          label: 'Left',
          key: 'inline-start',
        },
        anchor: 'webapps',
        id: 'm7xeqpn9',
        type: 'basic',
      },
      {
        content: [
          {
            type: 'text',
            text: '<h2>Het team</h2><p>Bij Krafters hebben we een getalenteerd en divers team van experts op het gebied van toegankelijkheid, veiligheid en ontwikkeling.</p>',
          },
        ],
        entries: [
          {
            id: '99533324-648f-4e71-8e62-f8fe1fc07e69',
            slug: 'danny-degenkamp',
            url: null,
            title: 'Danny Degenkamp',
            api_url:
              'http://localhost:8000/api/collections/employees/entries/99533324-648f-4e71-8e62-f8fe1fc07e69',
            image: {
              id: 'assets::danny-degenkamp.jpg',
              url: '/assets/danny-degenkamp.jpg',
              permalink: 'http://localhost:8000/assets/danny-degenkamp.jpg',
              api_url:
                'http://localhost:8000/api/assets/assets/danny-degenkamp.jpg',
              alt: null,
            },
            jobtitle: 'Lead Development',
          },
          {
            id: '3bc5234b-f49c-4cb7-8709-ca1aea6b7f2a',
            slug: 'martijn-halekor',
            url: null,
            title: 'Martijn Halekor',
            api_url:
              'http://localhost:8000/api/collections/employees/entries/3bc5234b-f49c-4cb7-8709-ca1aea6b7f2a',
            image: {
              id: 'assets::martijn-halekor.jpg',
              url: '/assets/martijn-halekor.jpg',
              permalink: 'http://localhost:8000/assets/martijn-halekor.jpg',
              api_url:
                'http://localhost:8000/api/assets/assets/martijn-halekor.jpg',
              alt: null,
            },
            jobtitle: 'Accessibility Developer',
          },
          {
            id: '28c0caad-1b10-421e-94d9-82f18bf3ab05',
            slug: 'jeroen-van-der-heijden',
            url: null,
            title: 'Jeroen van der Heijden',
            api_url:
              'http://localhost:8000/api/collections/employees/entries/28c0caad-1b10-421e-94d9-82f18bf3ab05',
            image: {
              id: 'assets::jeroen-van-der-heijden.jpeg',
              url: '/assets/jeroen-van-der-heijden.jpeg',
              permalink:
                'http://localhost:8000/assets/jeroen-van-der-heijden.jpeg',
              api_url:
                'http://localhost:8000/api/assets/assets/jeroen-van-der-heijden.jpeg',
              alt: null,
            },
            jobtitle: 'Security Expert & Developer',
          },
          {
            id: '4a8f9854-e398-47a0-911b-304e3b6fcb20',
            slug: 'joost-eijkens',
            url: null,
            title: 'Joost Eijkens',
            api_url:
              'http://localhost:8000/api/collections/employees/entries/4a8f9854-e398-47a0-911b-304e3b6fcb20',
            image: {
              id: 'assets::joost-eijkens.jpeg',
              url: '/assets/joost-eijkens.jpeg',
              permalink: 'http://localhost:8000/assets/joost-eijkens.jpeg',
              api_url:
                'http://localhost:8000/api/assets/assets/joost-eijkens.jpeg',
              alt: null,
            },
            jobtitle: 'Operations',
          },
          {
            id: 'c8e70139-f2a4-4acd-8c58-42f598a69676',
            slug: 'marijn-van-der-laan',
            url: null,
            title: 'Marijn van der Laan',
            api_url:
              'http://localhost:8000/api/collections/employees/entries/c8e70139-f2a4-4acd-8c58-42f598a69676',
            image: {
              id: 'assets::marijn-van-der-laan.jpeg',
              url: '/assets/marijn-van-der-laan.jpeg',
              permalink:
                'http://localhost:8000/assets/marijn-van-der-laan.jpeg',
              api_url:
                'http://localhost:8000/api/assets/assets/marijn-van-der-laan.jpeg',
              alt: null,
            },
            jobtitle: 'Marketing & Sales',
          },
        ],
        anchor: 'team',
        id: 'm7xqy838',
        type: 'team',
      },
      {
        content: [
          {
            type: 'text',
            text: '<h2>Neem contact met ons op</h2><p>Meer weten over digitale toegankelijkheid of over onze dienstverlening? We doen ons best om jouw vragen zo snel mogelijk te beantwoorden.</p>',
          },
        ],
        form: {
          handle: 'contact',
          title: 'Contact',
          api_url: 'http://localhost:8000/api/forms/contact',
        },
        form_button_label: 'Versturen',
        anchor: 'contact',
        id: 'm7xvxw7x',
        type: 'form',
      },
    ],
    blueprint: { title: 'Page', handle: 'page' },
    collection: { title: 'Pages', handle: 'pages' },
    date: null,
    edit_url: 'http://localhost:8000/cp/collections/pages/entries/home',
    id: 'home',
    is_entry: true,
    last_modified: '2025-03-06T23:44:51.000000Z',
    locale: 'default',
    mount: null,
    order: 1,
    origin_id: null,
    parent: null,
    permalink: 'http://localhost:8000',
    private: false,
    published: true,
    slug: 'home',
    status: 'published',
    template: 'home',
    title: 'Home',
    updated_at: '2025-03-06T23:44:51.000000Z',
    updated_by: {
      id: '60920cf5-a7d9-4a31-8854-4b5bc9d0f921',
      name: 'Martijn Halekor',
      email: 'martijn@cardan.com',
      api_url:
        'http://localhost:8000/api/users/60920cf5-a7d9-4a31-8854-4b5bc9d0f921',
    },
    uri: '/',
    url: '/',
  },
];
