import { GifItem } from "../GalleryItem/GalleryItem";
import { GifList, GifListItem, ImageListItemBar } from "@mui/material";


export function GifList({gif, gifData}) {
  
  return (
<ImageList variant="masonry" cols={3} gap={8}>
        <ul>
        {gif?.map(gifItem => (
          <GifItem
            key={gifItem.id}
            path={gifItem.path}
            likes= {gifItem.likes}
            id={gifItem.id}
            galleryData={galleryData}
          />
        ))}
      </ul>
    </ImageList>
  );
}