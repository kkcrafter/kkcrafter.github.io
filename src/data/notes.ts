export interface Note {
  title: string;
  description: string;
  tag: string;
  url: string;
  color: 'green' | 'blue' | 'amber' | 'purple';
  icon: string;
}

export const notes: Note[] = [
  {
    title: 'DPP 101',
    description: 'Core concepts about Digital Product Passport (DPP)',
    tag: 'Sustainability',
    url: 'https://app.heptabase.com/p/whiteboard/368c2406-0c36-4223-ae5f-fbf76a3def1d',
    color: 'green',
    icon: '\u{1F331}',
  },
  {
    title: 'GIS 101',
    description: 'Core concepts about Geoinformation System (GIS)',
    tag: 'Sustainability',
    url: 'https://app.heptabase.com/p/whiteboard/1d5faa02-8afb-44a7-9463-ee8cacecd137',
    color: 'green',
    icon: '\u{1F331}',
  },
  {
    title: 'LCA 101',
    description: 'Core concepts about Life Cycle Assessment (LCA)',
    tag: 'Sustainability',
    url: 'https://app.heptabase.com/p/whiteboard/a19ea322-7982-4978-9441-ed235f404c44',
    color: 'green',
    icon: '\u{1F331}',
  },
  {
    title: 'LkSG 101',
    description: 'Core concepts about German Supply Chain Due Diligence Act / Liefer\u00ADketten\u00ADsorgfalts\u00ADpflichten\u00ADgesetz (LkSG)',
    tag: 'Sustainability',
    url: 'https://app.heptabase.com/p/whiteboard/1a44868e-920b-4952-bf44-19e2223caa41',
    color: 'green',
    icon: '\u{1F331}',
  },
];
