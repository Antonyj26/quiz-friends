export const encodeJsonToBase64 = (json: object): string => {
  const jsonString = JSON.stringify(json)
  const utf8String = encodeURIComponent(jsonString).replace(
    /%([0-9A-F]{2})/g,
    (_, p1) => String.fromCharCode(parseInt(p1, 16))
  )
  return btoa(utf8String)
}
