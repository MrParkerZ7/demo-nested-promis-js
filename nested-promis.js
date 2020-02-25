
const Promise = require('promise');

const main = async () => {

   console.log("Running")

   const listNumber = await getObjectList()

   console.log("List Number Instancely :", listNumber)
   console.log()

   setTimeout(() => {
      console.log("List Number Delay 5000 :", listNumber)
      console.log()
   }, 5000)

}

const getObjectList = () => {
   return new Promise((resolve, reject) => {

      setTimeout(async () => {

         let files = [{ fileNum: 1 }, { fileNum: 2 }, { fileNum: 3 }]
         files = await recursiveAsyncGetFileData(files, [])

         resolve(files)

         console.log("Get Object Resolved Result :", files)
         console.log()

      }, 3000)

   })
}

const recursiveAsyncGetFileData = (files, result) => {
   return new Promise(async (resolve, reject) => {
      let file = files.pop()
      console.log("Recursive Pop", file)
      if (file) {

         let getFile = await getFileData(file)
         result.push(getFile)
         console.log("Recursive if Result :", result)
         let wait = await recursiveAsyncGetFileData(files, result)
         resolve(result)

         return result
      } else {

         resolve(result)
         console.log("Recursive else Result :", result)
         console.log()
         return result

      }
   })
}

const getFileData = (file) => {
   return new Promise((resolve, reject) => {

      setTimeout(() => {
         file.data = "Data"
         console.log("GetFileData Getting File :", file)

         resolve(file)
         console.log()
      }, 3000)
   })
}

main()