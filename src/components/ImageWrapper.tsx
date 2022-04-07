import { TagData } from '@/utils/request';
import div from '@ant-design/pro-card';

interface Param {
  image_url: string;
  tags: TagData[];
}

//todo
export const ImageWrapper = ({ image_url }: Param) => {
  return (
    <div
      className="grid-item"
      style={{
        padding: '10px',
        background: '#fff',
        borderRadius: '8px',
        margin: '10px',
        width: 'fit-content',
        height: 'fit-content',
      }}
    >
      <img
        className="lazyload"
        data-src={image_url}
        src={image_url}
        style={{
          maxWidth: '240px',
          maxHeight: '240px',
          background: 'pink',
          zIndex: -1,
        }}
      />
    </div>
  );
};
