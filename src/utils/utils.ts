export function parseJSON(jsonString: string) {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    throw new Error(`Ошибка разбиения JSON: ${jsonString}`);
  }
}
