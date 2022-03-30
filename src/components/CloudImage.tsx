import {
  accessibility,
  AdvancedImage,
  lazyload,
  placeholder,
  responsive,
} from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

interface CloudImageProps {
  objectId: string;
  [x: string]: any;
}

const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;

const moBaseUrl = `https://${cloudName}.mo.cloudinary.net`;

const cloudinary = new Cloudinary({
  cloud: { cloudName },
});

const getCloudImage = (objectId: string) => cloudinary.image(objectId);

const getMediaUrl = (objectId: string, transformation?: string) => {
  return `${moBaseUrl}/${objectId}${
    transformation ? `?tx=${transformation}` : ''
  }`;
};

const CloudImage = ({ objectId, ...props }: CloudImageProps) => {
  return (
    <AdvancedImage
      cldImg={getCloudImage(objectId)}
      plugins={[lazyload(), responsive(), accessibility(), placeholder()]}
      {...props}
    />
  );
};

export { getCloudImage, getMediaUrl };

export default CloudImage;
