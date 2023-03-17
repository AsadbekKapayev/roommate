// import { environment } from '@environments/environment';
// import { DEFAULT_IMAGE } from '@app/shares/static';
//
// export function getImage(id, extraUrl?) {
//   return requestFile()
//     .then(fs => getFile(fs, id))
//     .then(fileEntry => readFile(fileEntry))
//     .catch((fileEntry) => {
//       return getBlobFromRequest(id, extraUrl)
//         .then(blob => writeFile(fileEntry, blob))
//         .then(fileEntry1 => readFile(fileEntry1));
//     })
//     .then(file => getBlob(file))
//     .then(blob => (window.URL || window.webkitURL).createObjectURL(blob))
//     .then(url => {
//       const image = new Image();
//       image.src = url;
//       return image;
//     })
//     .catch(err => {
//       const image = new Image();
//       image.src = DEFAULT_IMAGE;
//       throw image;
//     });
// }
//
// function requestFile() {
//   return new Promise((resolve, reject) => {
//     (window as any).requestFileSystem((window as any).TEMPORARY, 5 * 1024 * 1024, (fs) => {
//       resolve(fs);
//     }, (err) => {
//       reject(err);
//     });
//   });
// }
//
//
// function getBlobFromRequest(imageId, extraUrl?) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     if (!!extraUrl) {
//       xhr.open('GET', extraUrl, true);
//     } else {
//       xhr.open('GET', environment.imageUrl + '/' + imageId + '/', true);
//     }
//     xhr.responseType = 'blob';
//     xhr.onerror = () => {
//       reject('not loaded');
//     };
//     xhr.onabort = () => {
//       reject('not loaded');
//     };
//     xhr.onload = () => {
//       console.error(xhr);
//       if (xhr.status === 200) {
//         // const fileType = (xhr.getResponseHeader('Content-Type') || fileType);
//         // const blob = new Blob([xhr.response], {type: fileType});
//         resolve(xhr.response);
//       }
//     };
//     xhr.send();
//   });
//
// }
//
//
// function getFile(fs, fileName) {
//   return new Promise((resolve, reject) => {
//     fs.root.getFile(fileName, {create: true, exclusive: false}, (fileEntry) => {
//       resolve(fileEntry);
//     }, (err) => {
//       reject(err);
//     });
//   });
// }
//
// function readFile(fileEntry) {
//   return new Promise((resolve, reject) => {
//     fileEntry.file((file) => {
//       if (file.size === 0) {
//         reject(fileEntry);
//       } else {
//         resolve(file);
//       }
//     }, (err) => {
//       reject(fileEntry);
//     });
//   });
// }
//
// function getBlob(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onerror = (err) => {
//       reject(err);
//     };
//     reader.onloadend = () => {
//       console.log('type : ', file.type);
//       const blob = new Blob([new Uint8Array(reader.result as any)], {type: file.type});
//       resolve(blob);
//     };
//     reader.readAsArrayBuffer(file);
//   });
// }
//
// function writeFile(fileEntry, blob) {
//   return new Promise((resolve, reject) => {
//     // Create a FileWriter object for our FileEntry (log.txt).
//     fileEntry.createWriter((fileWriter) => {
//       fileWriter.onerror = (err) => {
//         reject(err);
//       };
//       fileWriter.onwriteend = () => {
//         resolve(fileEntry);
//       };
//       fileWriter.write(blob);
//     });
//   });
//
// }
