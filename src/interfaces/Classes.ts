import React from 'react';

export interface Classes {
  id?: number;
  slug?: string;
  title?: string;
  desc?: string;
  teacherName?: string;
  date: string;
  comments?: number;
  images?: string[];
}

export interface MenuItemProps {
  icon: React.ReactElement;
  title: string;
  onClick?: () => void;
  id?: string;
}
