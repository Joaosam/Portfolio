const getCurrentDate = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  document.getElementById('currentDate').innerHTML = currentYear
  console.log(currentYear)
}

export default getCurrentDate
