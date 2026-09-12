import { Hammer, Zap, Wind, BrickWall, Paintbrush, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Trade {
  id: string;
  name: string;
  icon: LucideIcon;
  image: string;
  blurb: string;
  capabilities: string[];
}

export const trades: Trade[] = [
  {
    id: 'carpentry',
    name: 'Carpentry',
    icon: Hammer,
    image: 'https://images.pexels.com/photos/12172496/pexels-photo-12172496.jpeg?auto=compress&cs=tinysrgb&w=800',
    blurb: 'Custom framing, trim, cabinetry, and structural woodwork built to last.',
    capabilities: ['Custom cabinetry & built-ins', 'Structural framing & decking', 'Crown molding & finish trim'],
  },
  {
    id: 'electrical',
    name: 'Electrical',
    icon: Zap,
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    blurb: 'Licensed electricians for panel upgrades, rewiring, lighting, and code compliance.',
    capabilities: ['Panel upgrades & rewiring', 'Recessed & accent lighting', 'Code compliance & inspection'],
  },
  {
    id: 'hvac',
    name: 'HVAC',
    icon: Wind,
    image: 'https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg?auto=compress&cs=tinysrgb&w=800',
    blurb: 'Heating, cooling, and ventilation systems installed and serviced year-round.',
    capabilities: ['Furnace & AC installation', 'Ductwork & ventilation', 'Smart thermostat setup'],
  },
  {
    id: 'masonry',
    name: 'Masonry',
    icon: BrickWall,
    image: 'https://images.pexels.com/photos/30580527/pexels-photo-30580527.jpeg?auto=compress&cs=tinysrgb&w=800',
    blurb: 'Brick, stone, and block work for facades, walls, patios, and structural repairs.',
    capabilities: ['Brick & stone veneer', 'Repointing & restoration', 'Patios & walkways'],
  },
  {
    id: 'painting',
    name: 'Painting',
    icon: Paintbrush,
    image: 'https://images.pexels.com/photos/5583116/pexels-photo-5583116.jpeg?auto=compress&cs=tinysrgb&w=800',
    blurb: 'Interior and exterior painting with premium finishes and meticulous prep.',
    capabilities: ['Interior walls & ceilings', 'Exterior & siding repaint', 'Deck & fence staining'],
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    icon: Wrench,
    image: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=800',
    blurb: 'From fixture replacements to whole-home repiping — done right the first time.',
    capabilities: ['Fixture & faucet installation', 'Water heater replacement', 'Repiping & leak repair'],
  },
];

export const estimatorTrades = [
  ...trades.map((t) => ({ id: t.id, name: t.name, icon: t.icon })),
  { id: 'full-renovation', name: 'Full Renovation', icon: Hammer },
];
