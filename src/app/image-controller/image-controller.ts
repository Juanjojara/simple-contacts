import { Component, input, model, output, signal } from '@angular/core';

@Component({
  selector: 'app-image-controller',
  imports: [],
  templateUrl: './image-controller.html',
  styleUrl: './image-controller.css',
})
export class ImageController {
  //size = signal(64);
  size = model(64);   // così si semplifica la logica

  setNewPictureSize = output<number>();
  
  biggerPicture(){
    this.size.update((size) => size = size+1);
    //this.setNewPictureSize.emit(this.size()); con model non serve più
  }

  smallerPicture(){
    this.size.update((size) => size = size-1);
    //this.setNewPictureSize.emit(this.size()); con model non serve più
  } 

  switchShowDetails(){
    
  } 
}
