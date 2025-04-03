declare global {
  type StatamicPageBlock = {
    id?: string;
    type?: string;
    anchor?: string;
    content?: StatamicContentBlock[];
    image?: StatamicImage;
  };

  type HeroBlock = StatamicPageBlock & {
    title?: string;
    full_width_image?: boolean;
    image_max_height?: string;
    image_pos?: StatamicSelectOption;
  };

  type BasicBlock = StatamicPageBlock & {
    image_pos?: StatamicSelectOption;
    image_caption?: string;
  };

  type FormBlock = StatamicPageBlock & {
    form?: StatamicForm;
    form_button_label?: string;
  };

  type ArticlesBlock = StatamicPageBlock & {
    entries: StatamicArticleEntry[];
    button_label?: string;
    button_link?: string;
    button_icon?: string;
    button_variant?: StatamicSelectOption;
  };

  type EmployeesBlock = StatamicPageBlock & {
    entries: StatamicEmployeesEntry[];
  };

  type SponsorsBlock = StatamicPageBlock & {
    entries: StatamicSponsorsEntry[];
  };

  type StatamicContentBlock =
    | TextContentBlock
    | ButtonContentBlock
    | ImageContentBlock
    | VideoContentBlock
    | QuoteContentBlock
    | FormContentBlock;

  type TextContentBlock = {
    type: 'text';
    id?: string;
    text: string;
  };

  type ButtonContentBlock = {
    type: 'button';
    id: string;
    button_label: string;
    button_link?: string;
    button_icon?: string;
    button_variant: StatamicSelectOption;
  };

  type FormContentBlock = {
    type: 'form';
    id: string;
    form: StatamicForm;
    form_button_label?: string;
  };

  type ImageContentBlock = {
    type: 'image';
    id: string;
    image: StatamicImage;
    image_caption?: string;
  };

  type VideoContentBlock = {
    type: 'video';
    id: string;
    video_url?: string;
    image_caption?: string;
  };

  type QuoteContentBlock = StatamicQuote & {
    type: 'quote';
  };
}
