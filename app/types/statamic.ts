declare global {
  type NavTreeItem = {
    page: NavItem;
    depth: number;
    children: NavTreeItem[];
  };

  type NavItem = {
    id: string;
    title: string;
    link?: string;
    url?: string;
    permalink?: string;
    slug?: string;
    status?: string;
    icon?: string;
  };

  type TaxonomyTerm = {
    id: string;
    title: string;
    locale: string;
    slug: string;
    taxonomy: {
      handle: string;
      title: string;
    };
  };

  type PaginationLinks = {
    first: string;
    last: string;
    prev?: string;
    next?: string;
  };

  type PaginationMeta = {
    current_page: number;
    from: number;
    to: number;
    total: number;
    last_page: number;
    per_page: number;
    path: string;
    links: {
      url: string;
      label: string;
      active: boolean;
    }[];
  };

  type StatamicEntry = {
    id: string;
    title: string;
    summary?: string;
    slug: string;
    url: string;
    permalink?: string;
    image?: StatamicImage;
  };

  type StatamicPageEntry = StatamicEntry & {
    blocks?: StatamicPageBlock[];
    meta_title?: string;
    meta_description?: string;
    meta_image?: string;
    seo?: {
      meta?: {
        title?: string;
        description?: string;
        image?: string;
      };
    };
  };

  type StatamicArticleEntry = StatamicEntry & {
    blocks?: StatamicPageBlock[];
    date?: string;
  };

  type StatamicProjectEntry = StatamicEntry & {
    sub_title?: string;
  };

  type StatamicEmployeesEntry = StatamicEntry & {
    sub_title?: string;
  };

  type StatamicTestimonialEntry = StatamicEntry & {
    sub_title?: string;
  };

  type StatamicSponsorsEntry = StatamicEntry & {
    website?: string;
  };

  // Statamic helper fieldsets
  type StatamicButton = {
    button_label: string;
    button_link?: string;
    button_icon?: string;
    button_variant?: StatamicSelectOption;
  };

  type StatamicSelectOption = {
    value: string;
    label: string;
    key: string;
  };

  type StatamicCategory = {
    id: string;
    title: string;
    slug: string;
    url: string;
    permalink: string;
  };

  type StatamicImage = {
    id?: string;
    permalink?: string;
    alt?: string;
  };

  type StatamicQuote = {
    quote?: string;
    quote_author?: string;
  };

  type StatamicForm = {
    handle: string;
    title?: string;
    fields?: {
      [key: string]: StatamicFormField;
    };
  };

  type StatamicFormField = {
    handle: string;
    display: string;
    type: string;
    input_type?: string;
    autocomplete?: string;
    instructions?: string;
    validate?: string[];
    width?: number;
    options?: {
      key?: string;
      value?: string;
    }[];
  };

  type StatamicGlobalCompany = {
    title?: string;
    email?: string;
    phone?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    address?: string;
    po_box?: string;
    kvk?: string;
    btw?: string;
    bank?: string;
    wysiwyg?: string;
  };

  type StatamicGlobalSEO = {
    noindex_local: boolean;
    noindex_production: boolean;
    noindex_testing: boolean;
    seo_meta_title_seperator: string;
    seo_website_title: string;
    handle: string;
    api_url: string;
  };
}
