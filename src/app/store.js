import { configureStore } from '@reduxjs/toolkit';
import videoslice from '../features/Videos/videoslice';
import svideoslice from '../features/Video/svideoslice';
import Relatedslice from '../features/Relatedv/Relatedslice';
import Postslicee from '../features/Post/Postslicee';
import filterslice from '../features/filter/filterslice';




export const store = configureStore({
  reducer: {
    videos:videoslice,
    video:svideoslice,
    Related:Relatedslice,
    like:Postslicee,
    filter:filterslice,
  },
});
