
const Promise = require('promise');

const main = async () => {

   console.log("Running")

   const listNumber = await getObjectList()

   console.log("List Number :", listNumber)
   console.log("Ended main task")

   setTimeout(() => {
      console.log("Delayu List Number :", listNumber)

   }, 5000)

}

const getObjectList = () => {
   return new Promise((resolve, reject) => {

      setTimeout(async () => {

         let files = [{ fileNum: 1 }, { fileNum: 2 }, { fileNum: 3 }]

         files = await getFileData(files)

         resolve(files)

         console.log("Get Object Resolved")

      }, 3000)

   })
}

const getFileData = async (files) => {
   return new Promise(async (resolve, reject) => {

      let result = []

      await files.forEach(async (file) => {

         console.log("file :", file)
         await setTimeout(() => {
            file.data = "Data"
            result.push(file)
         }, 3000)

      })
      
      resolve(result)
   })
}

main()