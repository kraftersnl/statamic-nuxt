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
    graphic_visual?: StatamicSelectOption;
    image_position?: StatamicSelectOption;
    background_color?: StatamicSelectOption;
  };

  type BasicBlock = StatamicPageBlock & {
    image_position?: StatamicSelectOption;
    image_caption?: string;
    super_title?: string;
    title?: string;
    background_color?: StatamicSelectOption;
    background_shape?: StatamicSelectOption;
    shape_position?: StatamicSelectOption;
  };

  type ColumnsBlock = StatamicPageBlock & {
    columns: Column[];
  };

  type StepsBlock = StatamicPageBlock & {
    list: Step[];
  };

  type Step = {
    id?: string;
    title?: string;
    icon?: string;
  };

  type TestimonialsBlock = StatamicPageBlock & {
    super_title?: string;
    title?: string;
    background_color?: StatamicSelectOption;
    entries?: StatamicTestimonialEntry[];
  };

  type ProductsBlock = StatamicPageBlock & {
    super_title?: string;
    title?: string;
    products?: Product[];
  };

  type Product = StatamicButton & {
    id: string;
    title?: string;
    text?: string;
    image?: StatamicImage;
  };

  type ProjectsBlock = StatamicPageBlock & {
    super_title?: string;
    title?: string;
    entries?: StatamicProjectEntry[];
    background_color?: StatamicSelectOption;
  };

  type TwoColsTextBlock = StatamicPageBlock & {
    super_title?: string;
    title?: string;
    description?: string;
    content?: StatamicContentBlock[];
    background_color?: StatamicSelectOption;
    background_shape?: StatamicSelectOption;
    shape_position?: StatamicSelectOption;
    image?: StatamicImage;
  };

  type TwoColsImageBlock = StatamicPageBlock & {
    super_title?: string;
    title?: string;
    content?: StatamicContentBlock[];
    background_color?: StatamicSelectOption;
    image?: StatamicImage;
    image_position?: StatamicSelectOption;
    graphic_visual?: StatamicSelectOption;
  };

  type TwoColsVisualBlock = StatamicPageBlock & {
    super_title?: string;
    title?: string;
    content?: StatamicContentBlock[];
    graphic_visual?: StatamicSelectOption;
    image_position?: StatamicSelectOption;
  };

  type Column = {
    content?: StatamicContentBlock[];
    background_color?: StatamicSelectOption;
  };

  type DividerBlock = StatamicPageBlock & {
    color?: StatamicSelectOption;
    margin_block_start?: number;
    margin_block_end?: number;
  };

  type GridBlock = StatamicPageBlock & {
    images?: StatamicImage[];
  };

  type FormBlock = StatamicPageBlock & {
    form?: StatamicForm;
    form_button_label?: string;
    legal?: string;
    super_title?: string;
    title?: string;
    description?: string;
  };

  type ArticlesBlock = StatamicPageBlock & {
    entries: StatamicArticleEntry[];
    super_title?: string;
    title?: string;
  };

  type EmployeesBlock = StatamicPageBlock & {
    entries: StatamicEmployeesEntry[];
  };

  type SponsorsBlock = StatamicPageBlock & {
    entries: StatamicSponsorsEntry[];
  };

  type StatamicContentBlock =
    | TextContentBlock
    | IconContentBlock
    | ListContentBlock
    | ButtonContentBlock
    | ButtonGroupContentBlock
    | ImageContentBlock
    | VideoContentBlock
    | QuoteContentBlock
    | FormContentBlock;

  type TextContentBlock = {
    type: 'text';
    id?: string;
    text: string;
  };

  type IconContentBlock = {
    type: 'icon';
    id?: string;
    icon: string;
  };

  type ButtonContentBlock = StatamicButton & {
    type: 'button';
    id?: string;
  };

  type ButtonGroupContentBlock = {
    type: 'button_group';
    buttons?: StatamicButton[];
  };

  type ListContentBlock = {
    type: 'list';
    id?: string;
    variant?: 'icons' | 'numbers';
    list: CustomListItem[];
  };

  type CustomListItem = {
    icon?: string;
    title?: string;
    text?: string;
    id?: string;
  };

  type AccordionContentBlock = {
    type: 'accordion';
    id: string;
    items: AccordionItem[];
  };

  type AccordionItem = StatamicButton & {
    id: string;
    title: string;
    content: string;
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
