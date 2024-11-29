const path = require('node:path')
const fs = require('fs-extra')
// eslint-disable-next-line n/no-path-concat
const dataFile = path.join(__dirname, 'data', 'data.json')

class CrudData {
  async getData () {
    try {
      const productos = await fs.readJson(dataFile)
      console.log('leerProductos: ' + productos.length)
      return productos
    } catch (error) {
      console.log(error)
      return []
    }
  }

  async saveData (data) {
    try {
      const datas = await this.getData()
      datas.push(data)
      await fs.writeJson(dataFile, datas, { spaces: 2 })
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  async deleteData (id) {}

  async editData (id, newData) {}
}

module.exports = new CrudData()
