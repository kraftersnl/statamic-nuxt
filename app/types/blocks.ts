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
    full_height?: boolean;
    text_align?: StatamicSelectOption;
  };

  type BasicBlock = StatamicPageBlock & {
    image_position?: StatamicSelectOption;
    image_caption?: string;
    super_title?: string;
    title?: string;
    content?: StatamicContentBlock[];
    background_color?: StatamicSelectOption;
    background_shape?: StatamicSelectOption;
    shape_position?: StatamicSelectOption;
    max_width?: number;
    max_width_unit?: StatamicSelectOption;
  };

  type AllInOneBlock = StatamicPageBlock & {
    columns: {
      content: StatamicContentBlock;
      background_color?: StatamicSelectOption;
      max_width?: number;
      max_width_unit?: StatamicSelectOption;
    }[];
    background_color?: StatamicSelectOption;
    align_items?: StatamicSelectOption;
    gap?: number;
    margin_block_start?: StatamicSelectOption;
    margin_block_end?: StatamicSelectOption;
    padding_block_start?: StatamicSelectOption;
    padding_block_end?: StatamicSelectOption;
  };

  type ImageBlock = StatamicPageBlock & {
    image?: StatamicImage;
    image_caption?: string;
    super_title?: string;
    title?: string;
    content?: StatamicContentBlock[];
    background_color?: StatamicSelectOption;
    full_width?: boolean;
  };

  type ColumnsBlock = StatamicPageBlock & {
    columns: Column[];
  };

  type StepsBlock = StatamicPageBlock & {
    list: Step[];
  };

  type LinksBlock = StatamicPageBlock & {
    list: StatamicEntry[];
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

  type ImageCarouselBlock = StatamicPageBlock & {
    background_color?: StatamicSelectOption;
    image_list?: StatamicImage[];
  };

  type CalloutBlock = StatamicPageBlock & {
    content?: StatamicContentBlock[];
    background_color?: StatamicSelectOption;
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

  type CasesBlock = StatamicPageBlock & {
    entries?: StatamicCaseEntry[];
    random_layout?: boolean;
    link?: string;
    link_label?: string;
  };

  type CaseDetailsBlock = StatamicPageBlock & {
    client?: StatamicTaxonomyTerm;
    tags?: string[];
    employees?: StatamicEmployeesEntry[];
    summary?: StatamicContentBlock[];
    wysiwyg?: string;
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
    image_background_color?: StatamicSelectOption;
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
    form_success_message?: string;
    legal?: string;
    super_title?: string;
    title?: string;
    description?: string;
    background_color?: StatamicSelectOption;
  };

  type ArticlesBlock = StatamicPageBlock & {
    entries: StatamicArticleEntry[];
    limit?: number;
    anchor?: string;
    link?: string;
    link_label?: string;
  };

  type EmployeesBlock = StatamicPageBlock & {
    entries: StatamicEmployeesEntry[];
  };

  type SponsorsBlock = StatamicPageBlock & {
    entries: StatamicSponsorsEntry[];
  };

  type QuotePageBlock = StatamicPageBlock & {
    quote?: string;
    author_name?: string;
    author_sub_title?: string;
  };

  type CTAPageBlock = StatamicPageBlock & {
    link?: string;
    link_label?: string;
  };

  type StatamicContentBlock =
    | TitleContentBlock
    | TextContentBlock
    | IconContentBlock
    | ListContentBlock
    | ButtonContentBlock
    | ButtonGroupContentBlock
    | ImageContentBlock
    | VideoContentBlock
    | QuoteContentBlock
    | FormContentBlock
    | EmployeeContentBlock
    | SpacerContentBlock
    | CalloutContentBlock
    | AccordionContentBlock;

  type TitleContentBlock = {
    type?: 'title';
    id?: string;
    title: string;
    font_size?: StatamicSelectOption;
    font_weight?: StatamicSelectOption;
    icon?: string;
  };

  type TextContentBlock = {
    type?: 'text';
    id?: string;
    text: string;
  };

  type IconContentBlock = {
    type?: 'icon';
    id?: string;
    icon: string;
  };

  type ButtonContentBlock = StatamicButton & {
    type?: 'button';
    id?: string;
  };

  type ButtonGroupContentBlock = {
    type?: 'button_group';
    id?: string;
    buttons?: StatamicButton[];
  };

  type ListContentBlock = {
    type?: 'list';
    id?: string;
    variant?: StatamicSelectOption;
    list: CustomListItem[];
  };

  type CustomListItem = {
    icon?: string;
    title?: string;
    text?: string;
    id?: string;
  };

  type CalloutContentBlock = {
    type?: 'callout';
    id: string;
    content?: string;
    background_color?: StatamicSelectOption;
  };

  type AccordionContentBlock = {
    type?: 'accordion';
    id: string;
    items: AccordionItem[];
  };

  type AccordionItem = StatamicButton & {
    id: string;
    title: string;
    content: string;
  };

  type FormContentBlock = {
    type?: 'form';
    id: string;
    form: StatamicForm;
    form_button_label?: string;
  };

  type ImageContentBlock = {
    type?: 'image';
    id: string;
    image: StatamicImage;
    image_caption?: string;
  };

  type VideoContentBlock = {
    type?: 'video';
    id: string;
    video_url?: string;
    image_caption?: string;
  };

  type QuoteContentBlock = StatamicQuote & {
    type?: 'quote';
    id?: string;
  };

  type EmployeeContentBlock = {
    type?: 'employee';
    id: string;
    entry: StatamicEmployeesEntry;
    variant?: StatamicSelectOption;
  };

  type SpacerContentBlock = {
    type?: 'spacer';
    id: string;
    margin?: number;
  };
}
