export function formatHeroName(name) {
  switch (name) {
    case "dva":
      return "D.Va";

    default:
      return name.replace("-", " ");
  }
}
