export const heavyProcess = (loops) => {
  for(let i = 0; i < loops; i++) {
    console.log('heavy process')
  }
  return `${loops} loops`
}
