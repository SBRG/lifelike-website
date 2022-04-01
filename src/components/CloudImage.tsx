import {
  accessibility,
  AdvancedImage,
  lazyload,
  placeholder,
  responsive,
} from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { getConfigValue } from '../config';

interface CloudImageProps {
  objectId: string;
  [x: string]: any;
}

const cloudinary = new Cloudinary({
  cloud: { cloudName: 'lifelike-bio' },
});

const getCloudImage = (objectId: string) => cloudinary.image(objectId);

const getMediaUrl = (objectId: string, transformation?: string) => {
  const cloudName = getConfigValue(
    'cloudinary_cloud_name',
    process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
  );

  const moBaseUrl = `https://${cloudName}.mo.cloudinary.net`;
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
