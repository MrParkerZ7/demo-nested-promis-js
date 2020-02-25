
const Promise = require('promise');

const main = async () => {

   console.log("Running")

   const listNumber = await getObjectList()

   console.log("List Number Instancely :", listNumber)

   setTimeout(() => {
      console.log("List Number Delay 5000 :", listNumber)
   }, 5000)

}

const getObjectList = () => {
   return new Promise((resolve, reject) => {

      setTimeout(async () => {

         let files = [{ fileNum: 1 }, { fileNum: 2 }, { fileNum: 3 }]

         files = await recursiveAsyncGetFileData(files, [])

         resolve(files)

         console.log("Get Object Resolved")

      }, 3000)

   })
}

const recursiveAsyncGetFileData = (files, result) => {
   return new Promise(async (resolve, reject) => {
      let file = files.pop()
      console.log("Pop", file)

      if (file) {

         let getFile = await getFileData(file)
         result.push(getFile)
         recursiveAsyncGetFileData(files, result)
      } else resolve(result)
   })
}

const getFileData = (file) => {
   return new Promise((resolve, reject) => {

      setTimeout(() => {
         file.data = "Data"
         console.log("Getting File :", file)
         resolve(file)
      }, 3000)


   })
}

main()