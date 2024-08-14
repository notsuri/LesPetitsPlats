// function qui retire les accents
export function transformNormalize(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
