import React from 'react';
import PropTypes from 'prop-types';

const CardUniversity = ({ item }) => {
  const { university, alamat, singkatan } = item;
  return (
    <div className="flex p-3 mb-2 bg-primary rounded-2xl">

      <div className=" min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px]">
        <img src="https://picsum.photos/90/90" alt="" className="border-2 rounded-lg" />
      </div>
      <div className="ms-2 w-full">
        <p className="mb-1 text-xs font-bold">{ university }</p>
        <p className="text-xs capitalize">{ alamat.toLowerCase() }</p>

        <div>
          <div className="flex gap-2 mt-2 text-xs justify-between ">
            <span className="px-2 font-semibold border-2 rounded-md text-slate-600 border-accent bg-accent">{ singkatan || ' - '}</span>
            <div className="flex gap-2">
              <span className="px-2 font-semibold border-2 border-white rounded-md ">PTS</span>
              <span className="px-2 font-semibold border-2 rounded-md border-secondary bg-secondary">A</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardUniversity.propTypes = {
  item: PropTypes.shape({
    university: PropTypes.string.isRequired,
    alamat: PropTypes.string.isRequired,
    singkatan: PropTypes.string,
  }).isRequired,
};

export default CardUniversity;
