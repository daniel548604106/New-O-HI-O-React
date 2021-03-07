import clothing from '../assets/images/global/clothing.svg';
import shoewear from '../assets/images/global/shoewear.svg';
import bags from '../assets/images/global/bags.svg';
import accessory from '../assets/images/global/accessory.svg';
import gift from '../assets/images/global/gift.svg';
import food from '../assets/images/global/food.svg';

export const menuOptions = [
  {
    icon: clothing,
    title: '居家生活',
    category: [
      {
        name: '家具',
        id: 1,
      },
      {
        name: '生活飾品',
        id: 2,
      },
    ],
    id: 2,
  },
  {
    icon: accessory,
    title: '配件飾品',
    category: [
      {
        name: '斜背包',
        id: 1,
      },
      {
        name: '肩背包',
        id: 2,
      },
    ],
    id: 3,
  },
  {
    icon: bags,
    title: '包包提袋',
    category: [
      {
        name: '家具',
        id: 1,
      },
      {
        name: '生活飾品',
        id: 2,
      },
    ],
    id: 4,
  },
  {
    title: '衣著良品',
    icon: shoewear,
    category: [
      {
        name: '家具',
        id: 1,
      },
      {
        name: '生活飾品',
        id: 2,
      },
    ],
    id: 5,
  },
  {
    icon: gift,
    title: '文具卡片',
    category: [
      {
        name: '家具',
        id: 1,
      },
      {
        name: '生活飾品',
        id: 2,
      },
    ],
    id: 6,
  },
  {
    icon: food,
    title: '品味美食',
    category: [
      {
        name: '家具',
        id: 1,
      },
      {
        name: '生活飾品',
        id: 2,
      },
    ],
    id: 7,
  },
];
