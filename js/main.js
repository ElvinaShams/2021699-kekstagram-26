import { generatePhotos} from './data.js';
import {renderPictures} from './render-picture.js';
import {validationForm} from './user-form.js';

const pictures = generatePhotos(25);
renderPictures(pictures);
validationForm();
