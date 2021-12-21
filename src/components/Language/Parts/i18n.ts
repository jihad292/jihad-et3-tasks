const i18n = {
  LG: {
    comment: {
      AR: 'تعليق',
      ENG: 'Comment',
    },
    link: {
      AR: 'حلقة الوصل',
      ENG: 'Link',
    },
    se: {
      AR: 'المبرمج',
      ENG: 'SE',
    },
    difficulty: {
      AR: 'صعوبة',
      ENG: 'Difficulty',
    },
    platform: {
      AR: 'برنامج',
      ENG: 'Platform',
    },
    status: {
      AR: 'الحالة',
      ENG: 'Status',
    },
    version: {
      AR: 'الإصدار',
      ENG: 'Version',
    },
    size: {
      AR: 'حجم',
      ENG: 'Size',
    },
    by: {
      AR: 'مراجعة بواسطة BY',
      ENG: 'Review by BY',
    },
    ah: {
      AR: 'مراجعة بواسطة AH',
      ENG: 'Review by AH',
    },
    ht: {
      AR: 'مراجعة بواسطة HT',
      ENG: 'Review by HT',
    },
    date: {
      AR: 'تاريخ',
      ENG: 'Date',
    },
    id: {
      AR: 'بطاقة تعريف',
      ENG: 'ID',
    },
  },
  get(message: string, language: string) {
    return this.LG[message] === undefined || this.LG[message] === undefined
      ? message
      : this.LG[message][language];
  },
};
export default i18n;
