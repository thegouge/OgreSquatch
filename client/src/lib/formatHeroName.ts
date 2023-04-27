export default function formatHeroName(name: string) {
  switch (name) {
    case 'dva':
      return 'D.Va'

    default:
      return name.replace('-', ' ')
  }
}
