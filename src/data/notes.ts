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
    title: 'GIS 101',
    description: 'Core concepts about Geoinformation System (GIS)',
    tag: 'Sustainability',
    url: 'https://app.heptabase.com/p/whiteboard/1d5faa02-8afb-44a7-9463-ee8cacecd137',
    color: 'green',
    icon: '\u{1F331}',
  },
];
