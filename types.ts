export type post = {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
};

export type postData = {
  title: string;
  date: string;
  image: string;
  excerpt: string;
  isFeatured: boolean;
  slug: string;
  content: string;
};

export type notificationDataType = {
  title: string;
  message: string;
  status: string;
};

export type contactDetail = {
  email: string;
  name: string;
  message: string;
};

export type notificationType = {
  status: string;
  title: string;
  message: string;
};
