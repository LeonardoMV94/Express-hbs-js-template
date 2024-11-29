const loggerHttpMethods = (req, res, next) => {
  console.log(`Solicitud entrante: ${req.method} ${req.url}`)
  next()
}

const getCurrentPathBrowser = (req, res, next) => {
  // usado en bootstrap en la class active para el navbar
  res.locals.currentPath = req.path
  next()
}

const getYear = (req, res, next) => {
  res.locals.year = new Date().getFullYear()
  next()
}

module.exports = {
  loggerHttpMethods,
  getCurrentPathBrowser,
  getYear
}
