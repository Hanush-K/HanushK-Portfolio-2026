import {
  SiC,
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiCss,
  SiMysql,
  SiFigma,
  SiGit,
  SiGithub,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa6'
import { BarChart3, Palette } from 'lucide-react'

// ONLY these skills are included according to strict prompt specification
export const skills = [
  { name: 'Java', category: 'Programming', Icon: FaJava },
  { name: 'Python', category: 'Programming', Icon: SiPython },
  { name: 'C', category: 'Programming', Icon: SiC },
  { name: 'C++', category: 'Programming', Icon: SiCplusplus },
  { name: 'HTML', category: 'Web', Icon: SiHtml5 },
  { name: 'CSS', category: 'Web', Icon: SiCss },
  { name: 'MySQL', category: 'Database', Icon: SiMysql },
  { name: 'Figma', category: 'Design', Icon: SiFigma },
  { name: 'Canva', category: 'Design', Icon: Palette },
  { name: 'Git', category: 'Version Control', Icon: SiGit },
  { name: 'GitHub', category: 'Version Control', Icon: SiGithub },
  { name: 'Power BI', category: 'Data Visualization', Icon: BarChart3 },
]
