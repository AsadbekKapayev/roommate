import {Injectable} from "@angular/core";
import {Camera, CameraResultType, CameraSource, Photo} from "@capacitor/camera";
import {Directory, Filesystem} from "@capacitor/filesystem";
import {BehaviorSubject, finalize} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {LoadingController, Platform} from "@ionic/angular";

const IMAGE_DIR = 'stored-images';

export interface LocalFile {
  name: string;
  path: string;
  data: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  images: LocalFile[] = [];
  images$ = new BehaviorSubject<LocalFile[]>(null);

  constructor(private httpClient: HttpClient,
              private loadingCtrl: LoadingController,
              private platform: Platform) {
  }

  async loadFiles() {
    this.images = [];

    const loading = await this.loadingCtrl.create({
      message: 'Loading data...',
    });
    await loading.present();

    Filesystem.readdir({
      directory: Directory.Data,
      path: IMAGE_DIR
    }).then(result => {
      console.log('HERE: ', result);
      this.loadFileData(result.files.map(x => x.name));

    }, async err => {
      console.error('nXjLL6ri :: ', err);
      await Filesystem.mkdir({
        directory: Directory.Data,
        path: IMAGE_DIR
      })
    }).then(() => {
      loading.dismiss();
    })

  }

  async loadFileData(fileNames: string[]) {
    for (let f of fileNames) {
      const filePath = `${IMAGE_DIR}/${f}`;

      const readFile = await Filesystem.readFile({
        directory: Directory.Data,
        path: filePath
      })

      this.images.push({
        name: f,
        path: filePath,
        data: `data:image/jpeg;base64,${readFile.data}`
      });

      console.log('READ: ', readFile)
    }

    this.images$.next(this.images);
  }

  async selectImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt
    });

    console.log(image)

    if (image) {
      this.saveImage(image);
    }
  }

  async saveImage(photo: Photo) {
    const base64Data = await this.readAsBase64((photo));
    console.log('h495qJfJ :: ', base64Data);

    const fileName = `roommate-${new Date().getTime()}.jpeg`;
    const savedFile = await Filesystem.writeFile({
      directory: Directory.Data,
      path: `${IMAGE_DIR}/${fileName}`,
      data: base64Data
    });
    console.log('h495qJfJ :: ', savedFile);
    this.loadFiles();
  }

  async readAsBase64(photo: Photo) {
    console.log('4H4qPiJT :: platform: ', this.platform.is('hybrid'))

    if (this.platform.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path
      })

      return file.data;
    } else {
      const response = await fetch(photo.webPath);
      const blob = await response.blob();

      return await this.convertBlobToBase64(blob) as string;
    }
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    }
    reader.readAsDataURL(blob);
  })

  async startUpload(file: LocalFile) {
    const response = await fetch(file.data);
    const blob = await response.blob();
    const formData = new FormData();
    formData.append('file', blob, file.name);
    this.uploadData(formData);
  }

  async getFormData(file: LocalFile) {
    const response = await fetch(file.data);
    const blob = await response.blob();
    const formData = new FormData();
    formData.append('file', blob, file.name);

    return formData;
  }


  async uploadData(formData: FormData) {
    const loading = await this.loadingCtrl.create({
      message: 'Uploading image...',
    });
    await loading.present();

    const url = '';
    this.httpClient.post(url, formData).pipe(
      finalize(() => {
        loading.dismiss();
      })
    ).subscribe(res => {
      console.log('res: ', res);
    })
  }

  async deleteImage(file: LocalFile) {
    console.log('2ddxMXgE :: ')
    await Filesystem.deleteFile({
      directory: Directory.Data,
      path: file.path
    });
  }

  async clearData() {
    await Filesystem.rmdir({
      directory: Directory.Data,
      path: IMAGE_DIR,
      recursive: true
    })
  }

}
