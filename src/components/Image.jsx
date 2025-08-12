import { buildSrc, Image as IKImage } from '@imagekit/react';
import { useCallback, useState } from 'react';

function Image({
  src = '/default.png',
  className = '',
  alt = 'default',
  loading = 'lazy',
  height = '32',
  width = '32',
}) {
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const hidePlaceholder = () => setShowPlaceholder(false);

  const imgRef = useCallback((img) => {
    if (!img) return; // unmount

    if (img.complete) {
      hidePlaceholder();
      return;
    }
  }, []);

  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      src={src}
      className={className}
      loading={loading}
      alt={alt}
      ref={imgRef}
      width={width}
      height={height}
      style={
        showPlaceholder
          ? {
              backgroundImage: `url(${buildSrc({
                urlEndpoint: 'https://ik.imagekit.io/ikmedia',
                src: '/default-image.jpg',
                transformation: [
                  // {}, // Any other transformation you want to apply to the placeholder image
                  {
                    quality: 10,
                    blur: 90,
                  },
                ],
              })})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }
          : {}
      }
    />
  );
}

export default Image;
