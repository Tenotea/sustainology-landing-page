declare type SListItem = {
  id: number;
  name: string;
};

declare type SRouteListItem = SListItem & {
  path: string;
};
