export type HeaderConfig =
  | {
      title: string;
      showBack?: false;
    }
  | {
      title?: never;
      showBack: true;
    };
