const joinName = nameObj => {
  const joinedName = Object.values(nameObj)
    .map(v => v)
    .join(' ')
  return joinedName.length > 15
    ? joinedName.slice(0, 15).concat('..')
    : joinedName
}

export default joinName
