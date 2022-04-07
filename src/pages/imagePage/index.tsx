import { ImageWrapper } from '@/components/ImageWrapper';
import { GetBatchImages, ImageDetail } from '@/utils/request';
import { useEffect, useMemo, useRef, useState } from 'react';
import lazyLoad from 'lazyload';
import Masonry from 'masonry-layout';
export const ImagePage = () => {
  const [loading, setLoading] = useState(true);
  const [imageList, setImageList] = useState<ImageDetail[]>([]);
  const wrapper = useRef<HTMLElement>();

  useEffect(() => {
    GetBatchImages(new Date(), [])
      .then((res) => {
        if (res?.data) {
          setImageList(res.data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const elements = useMemo(() => {
    return document.querySelectorAll('.lazyload');
  }, []);

  const msnry = new Masonry('.grid', {
    itemSelector: '.grid-item',
  });

  useEffect(() => {
    if (elements.length) {
      console.log(elements);

      lazyLoad();
    }
  }, [elements]);

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <div
            ref={wrapper}
            className="grid"
            style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
          >
            {imageList.map((item, index) => {
              return <ImageWrapper {...item}></ImageWrapper>;
            })}
          </div>
        </div>
      )}
    </>
  );
};
