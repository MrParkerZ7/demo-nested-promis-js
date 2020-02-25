
const Promise = require('promise');

const main = async () => {

   console.log("## ##  Main has been started  ## ##")

   const listFile = await getListObjectFileInfo()

   console.log("## MAIN ##   List File Result Instancely :", listFile)
   console.log()

   setTimeout(() => {

      console.log("## MAIN ##   List File Result Delay 5000 :", listFile)
      console.log()

   }, 5000)

   console.log("## ##  Main has been ended  ## ##")
   console.log()
}

const getListObjectFileInfo = () => {
   return new Promise((resolve, reject) => {

      setTimeout(async () => {

         let files = [{ fileNum: 1 }, { fileNum: 2 }, { fileNum: 3 }]
         console.log("Get Object Resolved List File Info :", files)

         files = await recursiveAsyncGetFileData(files, [])

         resolve(files)

         console.log("Get Object Resolved Result :", files)
         console.log()

      }, 3000)

   })
}

const recursiveAsyncGetFileData = (files, result) => {
   return new Promise(async (resolve, reject) => {

      let file = files.shift()
      console.log("Recursive Pop", file)
      console.log()

      if (file) {

         let getFile = await getFileData(file)
         result.push(getFile)

         console.log("Recursive if Result :", result)
         await recursiveAsyncGetFileData(files, result)

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