import React, { useState } from 'react';
import { BsSearch, BsFillArrowLeftCircleFill, BsFillEmojiFrownFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import useDebounced from '../hooks/useDebounced';
import { asyncSearchUniversity } from '../states/university/action';
import useEffectAfterMount from '../hooks/useEffectAfterMount';
import CardUniversity from '../container/components/Card/cardUniversity';
import Header from '../container/components/Header/header';
import Menu from '../container/components/Menu/menu';
import ToastDemo from '../container/components/Toast/toast';
import { setToastStatus } from '../states/toast/action';

const SearchUniversityPage = () => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();
  const keywordSearch = useDebounced(keyword, 1000);
  const university = useSelector((state) => state.university);

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
    dispatch(setToastStatus(false));
  };

  useEffectAfterMount(() => {
    dispatch(asyncSearchUniversity(keywordSearch));

    return () => dispatch(asyncSearchUniversity(null));
  }, [keywordSearch, dispatch]);

  return (
    <>
      <Header iconLeft={<BsFillArrowLeftCircleFill color="white" />}>
        Search University
      </Header>
      <div className="min-h-screen overflow-y-scrol relative bg-gradient-to-tr from-[#56d6e4] to-transparent via-transparent">
        <div className="m-4 tracking-wide text-white">

          <div className="relative ">
            <input
              type="search"
              name="keyword"
              className="w-full py-2 mb-4 text-xs border-2 rounded-full outline-none caret-primary text-primary border-primary ps-10 pe-4 placeholder:text-xs"
              placeholder="Search University"
              onChange={handleKeywordChange}
            />
            <BsSearch color="#24B0C1" className="absolute text-white -translate-y-1/2 cursor-pointer top-1/3 left-4 focus:text-primary" />
          </div>

          {university.length > 0 ? (
            university.map((item) => <CardUniversity key={item.id_sp} item={item} />)
          ) : (
            <div className="flex justify-center items-center">
              <div className="flex flex-col items-center">
                <BsFillEmojiFrownFill color="#24B0C1" size={60} />
                <p className="text-xs text-center text-slate-600 italic mt-4">Universitas tidak ditemukan:(</p>
              </div>
            </div>
          )}

        </div>

      </div>
      <ToastDemo />
      <Menu />
    </>

  );
};

export default SearchUniversityPage;
